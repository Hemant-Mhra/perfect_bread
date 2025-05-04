"use client";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export function Heading(props) {
  const { color = "white" } = props;
  const [width, setWidth] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  return (
    <div
      className={twMerge("flex flex-col items-center gap-1.5", props.className)}
      style={{ color: `var(--color-${color})` }}
    >
      <h2 ref={ref} className="heading uppercase">
        {props.children}
      </h2>
      <span
        className={twMerge("h-1")}
        style={{
          width: `${width - 40}px`,
          background: `var(--color-${color})`,
        }}
      ></span>
    </div>
  );
}
