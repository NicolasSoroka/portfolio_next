import React, { FC } from "react";

type DividerProps = {
  section: string;
  number: string;
  title: string;
  description: string;
  from?: string;
  via?: string;
  to?: string;
};

const Divider: FC<DividerProps> = ({
  section,
  number,
  title,
  description,
  from = "from-blue-600",
  via = "via-blue-400",
  to = "to-teal-300",
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <span
        className={`h-[80px] w-[1px] bg-gradient-to-b from-transparent ${via} ${to}`}
      />
      <div className="flex flex-col items-center justify-center">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${from} ${via} ${to} font-extrabold text-black`}
        >
          {number}
        </span>
        <h3
          className={`mt-5 font-extrabold text-3xl bg-gradient-to-r ${from} ${to} text-transparent bg-clip-text`}
        >
          {section}
        </h3>
      </div>
      <h4 className="font-bold text-4xl max-w-xs dark:text-slate-200 my-4">
        {title}
      </h4>
      <p className="font-light text-lg max-w-[300px] dark:text-slate-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Divider;
