"use client";
import { Button, Modal } from "antd";
import { useState } from "react";

const CreateMember = (mode) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Modal open={isModalOpen}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default CreateMember;
