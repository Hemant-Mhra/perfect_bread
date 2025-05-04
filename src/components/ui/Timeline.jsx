"use client";
import { LeftArrow } from "@/icons";
import { toHTML } from "@portabletext/to-html";
import { useEffect, useMemo, useRef, useState } from "react";
import { isArray } from "sanity";
import { twMerge } from "tailwind-merge";

const data2 = [
  {
    year: 1993,
    image: "/timeline/timeline_1.jpg",
    title: "THE FLAGSHIP LAUNCH:",
    description:
      "The early 1990s marked the public opening of the internet, changing communication and business forever.",
  },
  {
    year: 1995,
    image: "/timeline/timeline_2.jpg",
    title: "Launch of Windows 95",
    description:
      "Microsoft released Windows 95, revolutionizing home computing with a user-friendly interface.",
  },
  {
    year: 1999,
    image: "/timeline/timeline_3.jpg",
    title: "Dot-com Boom",
    description:
      "Internet companies exploded in value, marking the peak of the dot-com bubble.",
  },
  {
    year: 2001,
    image: "/timeline/timeline_4.jpg",
    title: "9/11 Attacks",
    description:
      "Terrorist attacks on the World Trade Center reshaped global politics, security, and foreign policy.",
  },
  {
    year: 2004,
    image: "/timeline/timeline_5.jpg",
    title: "Facebook Launched",
    description:
      "Mark Zuckerberg launched Facebook from a Harvard dorm room, beginning a new era of social networking.",
  },
  {
    year: 2007,
    image: "/timeline/timeline_6.jpg",
    title: "iPhone Revolution",
    description:
      "Apple introduced the iPhone, transforming mobile technology and user interaction forever.",
  },
  {
    year: 2008,
    image: "/timeline/timeline_7.jpg",
    title: "Global Financial Crisis",
    description:
      "The collapse of Lehman Brothers triggered a worldwide economic meltdown and recession.",
  },
  {
    year: 2012,
    image: "/timeline/timeline_8.jpg",
    title: "Tesla Model S Debuts",
    description:
      "Tesla released the Model S, redefining electric cars with performance and style.",
  },
  {
    year: 2015,
    image: "/timeline/timeline_1.jpg",
    title: "SpaceX Makes History",
    description:
      "SpaceX launched reusable rockets, making spaceflight more affordable and sustainable.",
  },
  {
    year: 2016,
    image: "/timeline/timeline_8.jpg",
    title: "US Election Shock",
    description:
      "Donald Trump won the U.S. presidential election, signaling major political shifts worldwide.",
  },
  {
    year: 2018,
    image: "/timeline/timeline_5.jpg",
    title: "GDPR Takes Effect",
    description:
      "The European Union's General Data Protection Regulation reshaped how companies handle data privacy.",
  },
  {
    year: 2020,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Empty_streets_due_to_lockdown_in_India.jpg",
    title: "Global Pandemic",
    description:
      "COVID-19 disrupted lives globally, leading to lockdowns, remote work, and healthcare transformation.",
  },
  {
    year: 2021,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Billionaire_space_race_-_Bezos_Branson_Musk.jpg",
    title: "Billionaire Space Race",
    description:
      "Private space firms led by Musk, Bezos, and Branson launched into low Earth orbit, starting a new era in space tourism.",
  },
  {
    year: 2022,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Climate_March_%2848353918597%29.jpg",
    title: "Climate Action Movement Grows",
    description:
      "Worldwide protests and policy shifts pushed climate change to the top of global priorities.",
  },
  {
    year: 2024,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1c/OpenAI_Logo.svg",
    title: "AI Goes Mainstream",
    description:
      "Artificial Intelligence, led by models like GPT-4, became central to productivity, creativity, and tech evolution.",
  },
];

export function Timeline({ data }) {
  console.log(data);
  const [width, setWidth] = useState(0);
  const [parentWidth, setParentWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState("1993");

  const yearRef = useRef(null);
  const parentRef = useRef(null);

  const obj = useMemo(() => {
    return data.reduce((acc, item) => {
      acc[item.year] = item;
      return acc;
    }, {});
  }, [data]);

  console.log({ obj });

  useEffect(() => {
    // To get the exact width in decimals
    setWidth(Number(yearRef.current.getBoundingClientRect().width).toFixed(2));
    setParentWidth(
      Number(parentRef.current.getBoundingClientRect().width).toFixed(2)
    );
    setIndex(
      Math.floor(parentRef.current.offsetWidth / yearRef.current.offsetWidth)
    );
  }, [data]);

  return (
    <div className="flex flex-col mx-auto w-full justify-center gap-4 my-6 max-w-6xl px-10">
      <div className="flex mx-auto w-full items-center justify-center gap-4 my-6 max-w-6xl">
        <button
          className="p-2 text-white bg-accent rounded-full mt-10 cursor-pointer disabled:cursor-default disabled:bg-disabled"
          disabled={index === Math.floor(parentWidth / width)}
          onClick={() => setIndex((prev) => prev - 1)}
        >
          <LeftArrow />
        </button>
        <div
          className={twMerge(
            "flex flex-col overflow-hidden",
            parentWidth === 0 && "opacity-0"
          )}
          style={{
            width: width
              ? `${width * Math.floor(parentWidth / width)}px`
              : "fit-content",
          }}
          ref={parentRef}
        >
          <div
            className="flex justify-start flex-nowrap transition-all duration-200"
            style={{
              width: width
                ? `${width * Math.floor(parentWidth / width)}px`
                : "fit-content",
              transform: `translateX(-${
                (index - Math.floor(parentWidth / width)) * width
              }px)`,
            }}
          >
            {data.map(({ year }) => (
              <span
                key={year}
                className={twMerge(
                  "px-6 text-2xl py-2 font-light text-accent cursor-pointer",
                  selectedYear == year && "bg-secondary/30"
                )}
                ref={yearRef}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </span>
            ))}
          </div>
          <span className="h-0.5 w-full bg-primary"></span>
        </div>
        <button
          className="p-2 text-white bg-accent rounded-full mt-10 rotate-180 cursor-pointer disabled:cursor-default disabled:bg-disabled"
          disabled={index === data.length}
          onClick={() => setIndex((prev) => prev + 1)}
        >
          <LeftArrow />
        </button>
      </div>
      <div className="p-4 text-white gap-4 bg-secondary flex max-w-2xl mx-auto w-full rounded-4xl">
        <img
          src={obj[selectedYear]?.imageUrl}
          alt={obj[selectedYear]?.title}
          className="w-50 h-50 rounded-3xl/snug object-cover rounded-3xl aspect-square"
        />
        <p className="text-xl font-thin">
          <span className="font-medium uppercase">
            {obj[selectedYear]?.title}
          </span>
          {isArray(obj[selectedYear]?.description) ? (
            <span
              className="prose *:text-white *:text-lg/snug"
              dangerouslySetInnerHTML={{
                __html: toHTML(obj[selectedYear]?.description),
              }}
            />
          ) : null}
        </p>
      </div>
    </div>
  );
}
