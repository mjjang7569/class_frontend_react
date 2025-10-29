'use client';
import React, { useState } from 'react';
import { Modal } from 'antd';
import DaumPostcodeEmbed, { Address } from 'react-daum-postcode';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (data: Address) => {
    onToggleModal();
    console.log(data);
  };

  return (
    <>
      <button onClick={onToggleModal}>모달창열기</button>

      {/* 모달 종료 방식 1 : 숨기기방식 => ex) 이력서 등 */}
      {/* <Modal
        title="모달제목"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      {/* 모달 종료 방식 2 : 삭제 후 재생성 방식 =>ex) 신용카드, 비밀번호 등*/}
      {isModalOpen && (
        <Modal
          title="모달제목"
          open={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
};

export default App;
