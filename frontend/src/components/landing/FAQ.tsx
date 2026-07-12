"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is my medical data secure?",
    answer:
      "Yes. All uploaded reports are securely stored and only accessible to your account. We prioritize privacy and secure handling of medical information.",
  },
  {
    question: "Which medical reports are supported?",
    answer:
      "MediSense AI supports blood tests, pathology reports, urine reports, diagnostic reports, and many common laboratory reports in PDF format.",
  },
  {
    question: "How accurate is the AI analysis?",
    answer:
      "Our AI provides easy-to-understand explanations based on your report. It is designed to assist users and should not replace professional medical advice.",
  },
  {
    question: "Can I compare reports over time?",
    answer:
      "Yes. Upload multiple reports to compare changes, identify trends, and monitor improvements in your health metrics.",
  },
  {
    question: "Can I chat with my medical reports?",
    answer:
      "Absolutely. After analysis, you can ask questions about your reports using our AI-powered medical chat assistant.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-8">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Everything you need to know before using MediSense AI.
          </p>

        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-16 space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-slate-600 leading-7">
                {faq.answer}
              </AccordionContent>

            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}