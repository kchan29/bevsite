"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { MessageCard } from "@/components/MessageCard";
import { birthdayMessages } from "@/lib/data";

export function MessagesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="relative py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Birthday Messages
        </motion.h2>

        <div className="grid grid-cols-1 gap-10">
          {birthdayMessages.map((message, index) => (
            <MessageCard key={message.id} message={message} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
