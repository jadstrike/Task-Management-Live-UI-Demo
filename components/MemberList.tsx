"use client";
import { Space, Table, Tag, Input, Button, Modal } from "antd";
import { deleteMember, newMember } from "../utils/actions";
import { useState } from "react";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    render: (_, { role }) => <Tag color="green">{role}</Tag>,
  },

  {
    title: "Email",
    key: "email",
    dataIndex: "email",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a className="text-blue-500 ">View</a>
        <a
          onClick={() => deleteMember(record.id)}
          className="text-red-500 hover:text-red-300 "
        >
          Delete
        </a>
      </Space>
    ),
  },
];

const MemberList = ({ members }) => {
  // console.log(members);
  const [mode, setMode] = useState(false);
  const handleCancel = () => {
    setMode(false);
  };
  const handleOK = (e) => {
    // console.log(e);
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
          footer={null}
          width={400}
        >
          <form action={newMember} className="flex flex-col space-y-3">
            <input
              name="name"
              type="text"
              className="h-8 p-2 border border-gray-400 "
              placeholder="Name"
            />
            <input
              placeholder="Email"
              name="email"
              type="text"
              className="h-8 p-2 border border-gray-400 "
            />
            <input
              name="role"
              placeholder="Role"
              type="text"
              className="h-8 p-2 border border-gray-400 "
            />
            <Button
              htmlType="submit"
              type="primary"
              className="text-white bg-black "
            >
              Submit
            </Button>
            <Button className="" onClick={handleOK}>
              Cancel
            </Button>
          </form>
        </Modal>
        <Input className="mx-3 my-3 w-96" placeholder="Search Members 🔎" />
      </div>
      <Table columns={columns} dataSource={members} />
    </div>
  );
};

export default MemberList;
