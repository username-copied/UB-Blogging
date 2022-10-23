import React from "react";
import SingleMember from "./SingleMember";

const AllMembers = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-items-center items-center mx-auto gap-8">
      <SingleMember />
      <SingleMember />
      <SingleMember />
      <SingleMember />
      <SingleMember />
      <SingleMember />
    </div>
  );
};

export default AllMembers;
