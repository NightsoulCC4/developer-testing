import React from "react";
import { Carousel, Modal } from "antd";

import { ModalType } from "../constants/interfaces";

const Modals: React.FC<ModalType> = ({
  modalOpen,
  setModalOpen,
  project_name,
  images,
}) => {
  const showModal = () => {
    setModalOpen(true);
  };

  const handleOk = () => {
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
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
      <Carousel afterChange={onChange} arrows infinite={false}>
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
