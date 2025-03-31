"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import type { Message } from "@/lib/data";
import { celebrationName } from "@/lib/data";

interface MessageCardProps {
  message: Message;
  index: number;
}

export function MessageCard({ message, index }: MessageCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine the initial and hover states based on the index (odd/even for staggered appearance)
  const isOdd = index % 2 === 1;

  return (
    <motion.div
      className="w-full mb-10"
      initial={{
        opacity: 0,
        y: 50,
        x: isOdd ? -50 : 50
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.175, 0.885, 0.32, 1.275]
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card
        className={`overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg ${isExpanded ? 'scale-102' : 'scale-100'}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardContent className="p-0">
          {/* Photo of friend with birthday person */}
          <div className="relative w-full h-64 md:h-80 overflow-hidden">
            <img
              src={message.image}
              alt={`${message.friendName} with ${celebrationName}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <h3 className="absolute bottom-3 left-4 font-bold text-xl text-white drop-shadow-md">
              From {message.friendName}
            </h3>
          </div>

          {/* Message content */}
          <div className={`p-6 ${message.color} text-white`}>
            <motion.div
              className="relative"
              initial={{ height: "80px" }}
              animate={{ height: isExpanded ? "auto" : "80px" }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-white/90 text-base leading-relaxed">
                {message.message}
              </p>

              {!isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-current to-transparent" />
              )}
            </motion.div>

            <motion.div
              className="text-sm mt-2 text-white/70 text-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.2, delay: isExpanded ? 0.2 : 0 }}
            >
              Click to {isExpanded ? 'collapse' : 'expand'}
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
