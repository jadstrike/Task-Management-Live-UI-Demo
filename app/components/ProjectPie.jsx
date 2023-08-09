"use client";
import { Pie } from "@ant-design/plots";
import React from "react";

const ProjectPie = () => {
  const data = [
    {
      type: "In Progress",
      value: 10,
    },
    {
      type: "Completed",
      value: 20,
    },
    {
      type: "Failed",
      value: 5,
    },
    {
      type: "Todo",
      value: 5,
    },
  ];

  const config = {
    appendPadding: 20,
    data,
    angleField: "value",
    colorField: "type",
    color: ["#1890FF", "#59CE8F", "#EB455F", "gray"],
    radius: 0.75,
    innerRadius: 0.5,
    label: {
      type: "spider",
      labelHeight: 80,
      content: "{name}\n{percentage}",
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,

      content: {
        style: {
          fontSize: 13,

          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: `Total\nProjects\n\n30`,
      },
    },
  };
  return <Pie {...config} />;
};

export default ProjectPie;
