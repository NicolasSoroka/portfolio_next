import React from "react";

const Divider = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <span className="h-[80px] w-[1px] bg-indigo-600"></span>
      <div className="flex flex-col items-center justify-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">1</span>
        <h3>Section</h3>
      </div>
      <h4>titulo de la seccion</h4>
      <p>descripcion de la seccion</p>
    </div>
  );
};

export default Divider;
