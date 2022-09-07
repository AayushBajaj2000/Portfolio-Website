import React from "react";
import Image from "next/image";

const Project = ({ data }) => {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] flex flex-col h-full p-6 rounded-xl">
      <div className="relative w-full h-[180px]">
        <Image
          src={data.image}
          alt={data.heading}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="mt-2">
        <h1 className="my-3 text-xl font-medium">{data.heading}</h1>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Project;
