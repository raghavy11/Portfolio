"use client";
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, GitBranch, GitCommit, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";

interface Props {
  username: string;
}
interface GithubStats {
  user: {
    totalContribution: number;
  };
  contributions: {
    count: number;
    date: string;
  }[];
}

const GithubStats = ({ username }: Props) => {
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        const response = await fetch(`/api/github?username=${username}`);
        if (!response.ok) throw new Error(`Error fetching data: ${response.statusText}`);
        const data = await response.json();
        setStats(data);
      } catch (error) {
        setError("Failed to fetch GitHub stats");
      } finally {
        setLoading(false);
      }
    };
    fetchGithubStats();
  }, [username]);

  if (loading) {
    return (
      <Card className="p-4 sm:p-6 bg-black border border-gray-800">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-700 rounded w-3/4" />
          <div className="h-8 bg-gray-700 rounded" />
          <div className="h-32 bg-gray-700 rounded" />
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-4 sm:p-6 bg-black border border-gray-800">
        <p className="text-red-500">{error}</p>
      </Card>
    );
  }

  if (!stats) return null;

  const currentStreak = stats.contributions
    .slice()
    .reverse()
    .reduce((streak, day, index) => {
      if (index === 0 && day.count === 0) return 0;
      if (day.count > 0) return streak + 1;
      return streak;
    }, 0);

  const maxContributions = Math.max(...stats.contributions.map((day) => day.count));

  const getContributionLevel = (count: number) => {
    if (count === 0) return "bg-gray-800";
    const percent = (count / maxContributions) * 100;
    if (percent <= 25) return "bg-yellow-300/30";
    if (percent <= 50) return "bg-yellow-300/50";
    if (percent <= 75) return "bg-yellow-300/70";
    return "bg-yellow-300";
  };

  return (
    <Card className="p-4 sm:p-6 lg:p-8 bg-black border border-gray-800 overflow-hidden rounded-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 sm:space-y-8"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-yellow-300/10">
            <GitCommit className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-white">Contribution Activity</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="p-4 rounded-lg bg-[#111] backdrop-blur-sm"
          >
            <Calendar className="w-5 h-5 text-yellow-300 mb-2" />
            <p className="text-sm text-gray-400">Current Streak</p>
            <p className="text-xl sm:text-2xl font-bold text-yellow-300">{currentStreak} days</p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-4 rounded-lg bg-[#111] backdrop-blur-sm"
          >
            <GitBranch className="w-5 h-5 text-yellow-300 mb-2" />
            <p className="text-sm text-gray-400">Total Contributions</p>
            <p className="text-xl sm:text-2xl font-bold text-white">
              {stats.user.totalContribution.toLocaleString()}
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="p-4 rounded-lg bg-[#111] backdrop-blur-sm sm:col-span-2 lg:col-span-1"
          >
            <Star className="w-5 h-5 text-yellow-300 mb-2" />
            <p className="text-sm text-gray-400">Best Day</p>
            <p className="text-xl sm:text-2xl font-bold text-white">{maxContributions} commits</p>
          </motion.div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-400">Last 30 days</h4>
          <div className="overflow-x-auto pb-4">
            <div className="grid grid-rows-1 grid-flow-col gap-1 min-w-[600px]">
              <TooltipProvider>
                {stats.contributions.slice(-30).map((day, index) => (
                  <motion.div
                    key={day.date}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.02 }}
                  >
                    <Tooltip>
                      <TooltipTrigger>
                        <div
                          className={cn(
                            "h-6 w-6 sm:h-8 sm:w-8 rounded-sm",
                            getContributionLevel(day.count),
                            "transition-all duration-200 hover:scale-110"
                          )}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs font-semibold text-black">
                          {day.count} contributions on{" "}
                          {new Date(day.date).toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </div>
      </motion.div>
    </Card>
  );
};

export default GithubStats;
