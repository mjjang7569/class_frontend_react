'use client';
import React, { useState } from 'react';
import { Modal } from 'antd';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>모달창열기</button>
      <Modal
        title="모달제목"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        비밀번호 인력 : <input type="password" />
      </Modal>
    </>
  );
};

export default App;
