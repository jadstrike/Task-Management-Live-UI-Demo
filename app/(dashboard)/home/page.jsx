"use client";

import ProjectPie from "@/components/ProjectPie";
import { Typography, Card } from "antd";
const { Title } = Typography;
import React from "react";

const DashboardHome = () => {
  return (
    <div>
      <div className="flex justify-center p-0 m-0 mt-5 ">
        <Title level={3}>Welcome to Dashboard</Title>
      </div>
      <div className="flex items-start justify-center w-100 h-52 md:flex-row sm:flex-col">
        <div className="flex space-x-10 mt-7">
          <Card
            title="Total Projects"
            bordered={false}
            headStyle={{ backgroundColor: "#D6E4FF" }}
            style={{
              width: 240,
              border: " 2px solid #597EF7",
            }}
          >
            <p className="pb-1 font-bold">30</p>
            <p>Project count</p>
          </Card>
          <Card
            title="Total Members"
            bordered={false}
            headStyle={{ backgroundColor: "#FFE58F" }}
            style={{
              width: 240,
              border: " 2px solid #FFC53D",
            }}
          >
            <p className="pb-1 font-bold">15</p>
            <p>Members count</p>
          </Card>
        </div>
      </div>

      <div className=" bg-slate-200">
        <ProjectPie />
      </div>
    </div>
  );
};

export default DashboardHome;
