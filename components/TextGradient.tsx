import React from "react";

type TextGradientProps = {
  text: string[];
  from?: string;
  via?: string;
  to?: string;
};

export const TextGradient: React.FC<TextGradientProps> = ({
  text,
  from = "from-orange-700",
  via = "via-blue-500",
  to = "to-green-400",
}) => {
  return (
    <>
      {text.map((textItem, index) => (
        <span
          key={index}
          className={`bg-gradient-to-r ${from} ${via} ${to} animate-gradient bg-300% bg-clip-text text-transparent`}
        >
          {textItem}
        </span>
      ))}
    </>
  );
};

export default TextGradient;
