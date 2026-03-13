"use client";
import { Calendar, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const CALENDAR_URL = "https://luma.com/calendar/manage/cal-ALD4ESReEtrOYZN/events";

export default function UpcomingEvents() {
  return (
    <section
      className="relative py-24 md:py-32 px-6 bg-[#F5F6F7] overflow-hidden"
      data-testid="section-upcoming-events"
    >
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#3BA9A3]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#FF8A5C]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div {...fadeInUp}>
          <div className="inline-flex items-center gap-2 text-[#3BA9A3] mb-4">
            <Calendar className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Upcoming Events
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-[#394D5C]">
            Join Us Live
          </h2>
          <p className="text-xl text-[#6B8299] mb-10 max-w-2xl mx-auto leading-relaxed">
            Free events, taster sessions & info calls - no commitment required.
          </p>
        </motion.div>

        <motion.div
          className="space-y-6 text-[#394D5C] text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p>
            Not sure if IFLI is right for you? Come experience it for yourself.
            We regularly host free live events, open Q&A sessions, and Portuguese
            taster classes so you can get a feel for our method before you
            enroll.
          </p>
          <p>
            Browse upcoming events and save your spot - spaces are limited.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#3BA9A3] hover:bg-[#2D8B85] text-white font-semibold rounded-full transition-colors shadow-lg hover:shadow-xl"
          >
            View the Full Calendar
            <ExternalLink className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
