import React from "react";
import { Modal } from "antd";

import { ModalType } from "../constants/interfaces";

const Modals: React.FC<ModalType> = ({ modalOpen, setModalOpen }) => {
    
  const showModal = () => {
    setModalOpen(true);
  };

  const handleOk = () => {
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <Modal
      title="Basic Modal"
      open={modalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default Modals;
