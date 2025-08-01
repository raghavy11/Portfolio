"use client";
import { motion } from "framer-motion";
import React from "react";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="about" className="container mx-auto px-4 pt-32 pb-20 scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="text-[hsl(48,96%,53%)]">Raghav Yadav</span>
          </h1>
          <p className="text-xl md:text-2xl text-[hsl(0,0%,63.9%)] mb-8">
            Full Stack Developer crafting modern web experiences
          </p>

          <div className="flex gap-4">
            <Button className="gap-2 bg-[hsl(48,96%,53%)] text-black hover:bg-[hsl(48,96%,45%)]">
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>

            <Link href="https://github.com/raghavy11" target="_blank">
              <Button
                variant="outline"
                className="gap-2 border-[hsl(48,96%,53%)] text-[hsl(48,96%,53%)] hover:bg-[hsl(48,96%,53%)] hover:text-black"
              >
                <Github className="w-4 h-4" />
                Github
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Image
            src={"/hero.svg"}
            alt="Developer Illustration"
            width={500}
            height={500}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
