"use client";

import { Check, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { getNextCourseLabel } from "@/lib/courses";

const CLASSROOM_URL = "https://classroom.google.com/c/NzkyNzEyNzIzMzgw?cjc=clutbctc";
const LEVEL_TEST_URL = "https://form.jotform.com/222385082740353";

const planColumns = [
  { name: "Free", price: "€0" },
  { name: "Online", price: "€345", badge: "Most popular" },
  { name: "Premium", price: "€395" },
];

const featureGroups = [
  {
    label: "In every plan",
    rows: [
      { label: "Free level test", values: ["test", true, true] },
      { label: "Google Classroom", values: ["sample", true, true] },
    ],
  },
  {
    label: "In Online and Premium",
    rows: [
      { label: "Digital library", values: ["sample", true, true] },
      { label: "Class recordings with meeting and chat transcripts", values: ["sample", true, true] },
      { label: "10 weeks, Monday to Friday, 50 hours of live classes (min 4 – max 10 participants)", values: [false, true, true] },
      { label: "Google Calendar", values: [false, true, true] },
      { label: "Weekly group recap", values: [false, true, true] },
      { label: "WhatsApp group", values: [false, true, true] },
      { label: "10% off when you renew for the next course", values: [false, true, true] },
    ],
  },
  {
    label: "In Premium only",
    rows: [
      { label: "2 individual 30-minute sessions with an IFLI facilitator: conversation, pronunciation, exam or interview preparation, and more", values: [false, false, true] },
      { label: "1 personal 30-minute progress check-in with your facilitator (week 5)", values: [false, false, true] },
      { label: "Extra weekend practice with an answer key", values: [false, false, true] },
      { label: "Private classes at €30/hour instead of €35/hour", values: [false, false, true] },
    ],
  },
];

const supportOptions = [
  { title: "Private class with an IFLI facilitator", detail: "Per hour (€30 for Premium)", price: "€35" },
  { title: "10-hour private class pack", detail: "10 × 60 minutes, valid for 4 months", price: "€300" },
  { title: "1 hour with Giselle, our founder", detail: "Strategy, exam preparation, a personal challenge and more, plus a written summary with clear goals. Only 4 hours available per week.", price: "€70" },
  { title: "Your Personalised Learning Roadmap", detail: "A 30-minute strategy session with Giselle (week 0–1), a written roadmap, and a 30-minute mid-course check-in (week 6). Limited to 10 people per cohort.", price: "€120" },
];

function FeatureValue({ value, label }) {
  if (!value) return <span className="text-[#AAB7B2]" aria-label={`${label}: not included`}>—</span>;

  if (value === "sample") {
    return (
      <a href={CLASSROOM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-[#1F6A5C] underline decoration-[#1F6A5C]/30 underline-offset-4 hover:decoration-[#1F6A5C]">
        Sample <ExternalLink className="h-3.5 w-3.5" />
      </a>
    );
  }

  if (value === "test") {
    return (
      <a href={LEVEL_TEST_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-[#1F6A5C] underline decoration-[#1F6A5C]/30 underline-offset-4 hover:decoration-[#1F6A5C]">
        Take test <ExternalLink className="h-3.5 w-3.5" />
      </a>
    );
  }

  return <Check className="mx-auto h-5 w-5 text-[#1F6A5C]" strokeWidth={2.5} aria-label={`${label}: included`} />;
}

export default function PricingSection({ onSelectPlan }) {
  return (
    <section id="pricing" className="relative overflow-hidden bg-[#E5F4EF] px-4 py-24 text-[#24477D] md:px-6 md:py-32" data-testid="section-pricing">
      <div className="absolute inset-x-0 top-0 h-2 bg-[#1F6A5C]" />
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1F6A5C] shadow-sm">
            <Sparkles className="h-4 w-4" />
            Cohort 1: {getNextCourseLabel()} · Limited seats available
          </div>
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">Choose your learning path</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#526A82]">Start with the free classroom sample, join the full live experience, or add personal support.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="overflow-hidden rounded-3xl border border-[#C8DED6] bg-white shadow-[0_24px_70px_-40px_rgba(31,106,92,0.55)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#DCE7E3]">
                  <th className="w-[49%] p-6 align-bottom text-lg font-bold md:p-8">What’s included</th>
                  {planColumns.map((plan) => (
                    <th key={plan.name} className="w-[17%] p-5 text-center align-bottom md:p-7">
                      <div className="text-lg font-bold">{plan.name}</div>
                      <div className="mt-1 text-base font-medium text-[#526A82]">{plan.price}</div>
                      {plan.badge && <span className="mt-2 inline-block rounded-full border border-[#BFD7CE] px-3 py-1 text-xs font-semibold text-[#1F6A5C]">{plan.badge}</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureGroups.map((group) => <FeatureGroup key={group.label} group={group} />)}
                <tr className="bg-[#F7FBF9]">
                  <td className="p-6 font-semibold md:p-8">Choose your plan</td>
                  <td className="p-5 text-center"><a href={CLASSROOM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border-2 border-[#1F6A5C] px-5 py-3 text-sm font-bold text-[#1F6A5C] transition hover:bg-[#1F6A5C] hover:text-white">View sample</a></td>
                  <td className="p-5 text-center"><button onClick={() => onSelectPlan("Online")} className="rounded-full bg-[#FF8057] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#E96E48]">Enroll online</button></td>
                  <td className="p-5 text-center"><button onClick={() => onSelectPlan("Premium")} className="rounded-full bg-[#1F6A5C] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#174F45]">Go Premium</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="mt-12 overflow-hidden rounded-3xl bg-[#1F6A5C] text-white shadow-[0_24px_70px_-40px_rgba(23,79,69,0.8)]">
          <div className="border-b border-white/15 p-7 md:p-10">
            <h3 className="text-2xl font-bold md:text-3xl">Personal support: add to any plan or book on its own</h3>
            <p className="mt-3 max-w-3xl text-white/80">Choose one option or combine them. No course plan is required.</p>
          </div>
          <div className="divide-y divide-white/15">
            {supportOptions.map((option) => (
              <div key={option.title} className="grid gap-3 p-7 md:grid-cols-[1fr_auto] md:items-center md:px-10">
                <div><h4 className="font-bold">{option.title}</h4><p className="mt-1 max-w-4xl text-sm leading-relaxed text-white/75">{option.detail}</p></div>
                <div className="text-xl font-bold">{option.price}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureGroup({ group }) {
  return (
    <>
      <tr className="border-b border-[#DCE7E3] bg-[#F2F8F5]"><th colSpan={4} className="px-6 py-3 text-sm font-bold text-[#1F6A5C] md:px-8">{group.label}</th></tr>
      {group.rows.map((row) => (
        <tr key={row.label} className="border-b border-[#E7EEEB] last:border-b-0">
          <td className="p-6 text-sm font-medium leading-relaxed text-[#304E69] md:px-8">{row.label}</td>
          {row.values.map((value, index) => <td key={`${row.label}-${index}`} className="p-5 text-center text-sm"><FeatureValue value={value} label={`${planColumns[index].name} ${row.label}`} /></td>)}
        </tr>
      ))}
    </>
  );
}
