// last section

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { queries } from "../constants/index.js";

const Questions = () => {
  const midIndex = Math.ceil(queries.length / 2);
  const firstColumnQueries = queries.slice(0, midIndex);
  const secondColumnQueries = queries.slice(midIndex);

  return (
    <section className="size-full flex flex-col gap-8 md:gap-12 items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-semibold !leading-snug">
        Frequently Asked Questions
      </h2>

      {/* queries on small screens */}
      <div className="w-full grid grid-cols-1 md:hidden items-start justify-center md:gap-20">
        <Accordion type="single" collapsible>
          {queries.map((query, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-7 px-4 py-2 rounded-lg shadow-md"
            >
              <AccordionTrigger className="px-4 text-start text-base">
                {query.label}
              </AccordionTrigger>
              <AccordionContent className="bg-white rounded-lg p-4">
                {query.explanation}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* queries on large screens */}
      <div className="hidden md:grid md:grid-cols-2 gap-10 w-full">
        <Accordion type="single" collapsible>
          {firstColumnQueries.map((query, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="w-full mb-7 px-4 py-2 shadow-md rounded-lg"
            >
              <AccordionTrigger className="px-4 text-start text-base">
                {query.label}
              </AccordionTrigger>
              <AccordionContent className="bg-white rounded-lg p-4">
                {query.explanation}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion type="single" collapsible>
          {secondColumnQueries.map((query, index) => (
            <AccordionItem
              key={index + midIndex}
              value={`item-${index + midIndex}`}
              className="w-full mb-7 px-4 py-2 shadow-md rounded-lg"
            >
              <AccordionTrigger className="px-4 text-start text-base">
                {query.label}
              </AccordionTrigger>
              <AccordionContent className="bg-white rounded-lg p-4">
                {query.explanation}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Questions;
