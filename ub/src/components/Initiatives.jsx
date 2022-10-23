import React from "react";
import OneWork from "./OneWork";

export default function Work({ works }) {
  return (
    <>
      <p className="animate__animated animate__bounceInLeft text-center text-2xl font-extrabold animate__slower ">
        Our Initiatives
      </p>
      <div className="p-4 m-4 grid md:grid-cols-2 justify-between justify-items-center gap-16">
        {works.map((work, index) => (
          <OneWork key={work._id} work={work} />
        ))}
      </div>
    </>
  );
}
