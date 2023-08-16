"use client";
import Member from "./Member";
import { Space, Table, Tag, Input, Button, Modal } from "antd";
import { useState } from "react";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a className="text-blue-500 ">View</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "5",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const MemberList = ({ members }) => {
  const [mode, setMode] = useState(false);
  const handleCancel = () => {
    setMode(false);
  };
  const handleOK = () => {
    setMode(false);
  };
  return (
    <div className="flex flex-col justify-center ">
      <div className="flex flex-row">
        <Button className="mx-3 my-3" onClick={() => setMode(true)}>
          Create New Member
        </Button>
        <Modal
          open={mode}
          title="Create New Member"
          onCancel={handleCancel}
          onOk={handleOK}
          okButtonProps={{ style: { backgroundColor: "black" } }}
        >
          <form action="" className="flex flex-col space-y-3">
            <input type="text" className="border border-gray-400 " />
            <input type="text" className="border border-gray-400 " />
            <input type="text" className="border border-gray-400" />
          </form>
        </Modal>
        <Input className="mx-3 my-3 w-96" placeholder="Search Members 🔎" />
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default MemberList;
