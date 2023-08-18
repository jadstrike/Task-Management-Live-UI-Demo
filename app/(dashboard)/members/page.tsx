"use client";

import MemberList from "../../../components/MemberList";
// import db from "../../../utils/db";
// const getData = async () => {
//   const members = await db.member.findMany({});
//   return members;
// };

const member = async () => {
  // const members = await getData();
  return (
    <div className="mx-6 mt-12 border-2 border-gray-200 shadow-lg ">
      <MemberList></MemberList>
    </div>
  );
};

export default member;
