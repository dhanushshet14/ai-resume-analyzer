import React from 'react';
import { cn } from "~/lib/format";
import { Accordion, AccordionItem, AccordionHeader, AccordionContent } from "./Accordion";

// Tip type used in category content
type Tip = {
  type: "good" | "improve";
  tip: string;
  explanation: string;
};

// Helper: ScoreBadge
const ScoreBadge: React.FC<{ score: number }> = ({ score }) => {
  const isGreen = score > 69;
  const isYellow = !isGreen && score > 39;

  const base = "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-sm font-semibold";
  const bg = isGreen ? "bg-green-100" : isYellow ? "bg-yellow-100" : "bg-red-100";
  const text = isGreen ? "text-green-700" : isYellow ? "text-yellow-700" : "text-red-700";

  return (
    <span className={cn(base, bg, text)}>
      {/* Check icon for green scores */}
      {isGreen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53-1.59-1.59a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.776-5.284Z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        // fallback dot icon for non-green
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden
        >
          <circle cx="12" cy="12" r="5" />
        </svg>
      )}
      <span>{score}/100</span>
    </span>
  );
};

// Helper: CategoryHeader
const CategoryHeader: React.FC<{ title: string; categoryScore: number }> = ({ title, categoryScore }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <ScoreBadge score={categoryScore} />
    </div>
  );
};

// Helper: CategoryContent
const CategoryContent: React.FC<{ tips: Tip[] }> = ({ tips }) => {
  if (!tips || tips.length === 0) return <p className="text-sm text-gray-500">No tips available.</p>;

  return (
    <div className="flex flex-col gap-4">
      {/* Tips grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {tips.map((t, idx) => (
          <div key={`tip-${idx}`} className="flex items-start gap-2">
            {t.type === "good" ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-green-600 mt-0.5">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53-1.59-1.59a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.776-5.284Z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-amber-600 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
            )}
            <p className="text-sm text-gray-800">{t.tip}</p>
          </div>
        ))}
      </div>

      {/* Explanations list */}
      <div className="flex flex-col gap-3">
        {tips.map((t, idx) => (
          <div
            key={`exp-${idx}`}
            className={cn(
              "rounded-lg p-3 text-sm",
              t.type === "good"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-amber-50 text-amber-800 border border-amber-200"
            )}
          >
            <p className="font-medium mb-1">{t.type === "good" ? "What you did well" : "How to improve"}</p>
            <p className="leading-relaxed">{t.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Details: React.FC<{ feedback: Feedback }> = ({ feedback }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md w-full">
      {/*<div className="p-4 border-b border-gray-200">*/}
      {/*  <h2 className="text-2xl font-bold">Detailed Feedback</h2>*/}
      {/*  <p className="text-sm text-gray-500">Expand each section to see specific tips and explanations.</p>*/}
      {/*</div>*/}

      <Accordion allowMultiple defaultOpen="tone" className="p-2">
        {/* Tone & Style */}
        <AccordionItem id="tone" className="">
          <AccordionHeader itemId="tone" className="hover:bg-gray-50">
            <CategoryHeader title="Tone & Style" categoryScore={feedback.toneAndStyle.score} />
          </AccordionHeader>
          <AccordionContent itemId="tone" className="">
            <CategoryContent tips={feedback.toneAndStyle.tips as Tip[]} />
          </AccordionContent>
        </AccordionItem>

        {/* Content */}
        <AccordionItem id="content">
          <AccordionHeader itemId="content" className="hover:bg-gray-50">
            <CategoryHeader title="Content" categoryScore={feedback.content.score} />
          </AccordionHeader>
          <AccordionContent itemId="content">
            <CategoryContent tips={feedback.content.tips as Tip[]} />
          </AccordionContent>
        </AccordionItem>

        {/* Structure */}
        <AccordionItem id="structure">
          <AccordionHeader itemId="structure" className="hover:bg-gray-50">
            <CategoryHeader title="Structure" categoryScore={feedback.structure.score} />
          </AccordionHeader>
          <AccordionContent itemId="structure">
            <CategoryContent tips={feedback.structure.tips as Tip[]} />
          </AccordionContent>
        </AccordionItem>

        {/* Skills */}
        <AccordionItem id="skills">
          <AccordionHeader itemId="skills" className="hover:bg-gray-50">
            <CategoryHeader title="Skills" categoryScore={feedback.skills.score} />
          </AccordionHeader>
          <AccordionContent itemId="skills">
            <CategoryContent tips={feedback.skills.tips as Tip[]} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Details;
