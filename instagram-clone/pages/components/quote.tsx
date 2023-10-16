import React, { useState, useEffect } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";



interface Quote {
  id: number;
  quote: string;
  author: string;
}

export interface QuotesProps {
  quotes: Quote[];
}

export const getServerSideProps: GetServerSideProps<QuotesProps> = async () => {
  try {
    const res = await fetch("https://dummyjson.com/quotes");
    const quotes: Quote[] = (await res.json()).quotes
    return {
      props: {
        quotes,
      },
    };
  } catch (error) {
    console.error("Error fetching quotes:", error);
    return {
      props: {
        quotes: [],
      },
    };
  }
};

export default function Quotes({ quotes }: QuotesProps) {
  return (
    <>
      <div>
      {quotes.map((quote) => {
          return (
            <div className="container" key={quote.id}>
              <p className="text-indigo-300">{quote.id}</p>
              <p className="text-indigo-300">{quote.quote}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
