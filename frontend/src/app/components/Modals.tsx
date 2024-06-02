import React from "react";
import { Carousel, Modal } from "antd";

import { ModalType } from "../datatype/interfaces";

const Modals: React.FC<ModalType> = ({
  modalOpen,
  setModalOpen,
  project_name,
  images,
}) => {

  const handleOk = () => {
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
};

  return (
    <Modal
      title={project_name}
      open={modalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
      width={820}
    >
      <Carousel arrows infinite={false}>
        {images.length > 0 ? (
          images.map((el, index) => (
            <div key={index} className="w-full">
              <img src={el.imageUrl} className="w-full" />
            </div>
          ))
        ) : (
          <></>
        )}
      </Carousel>
    </Modal>
  );
};

export default Modals;
