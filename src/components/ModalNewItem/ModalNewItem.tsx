"use client";
import React, { ChangeEvent, useState } from "react";
import styles from "./ModalNewItem.module.css";
import { BsX } from "react-icons/bs";

interface ModalNewItemProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string) => void;
}
export const ModalNewItem: React.FC<ModalNewItemProps> = ({
  isOpen = false,
  onClose,
  onSubmit,
}) => {
  const [newItem, setNewItem] = useState("");

  const handleOnChangeItem = (e: ChangeEvent<HTMLInputElement>) =>
    setNewItem(e.currentTarget.value);

  const handleAddItem = () => onSubmit(newItem);

  if (!isOpen) return <></>;
  return (
    <div className={styles.modalContainer} id="modalContainer">
      <div className={styles.modalContent} id="modalContent">
        <button
          className={styles.modalBtnClose}
          onClick={onClose}
          name="btnCloseModal"
        >
          <BsX size={28} />
        </button>
        <input
          placeholder="Insert Name"
          type="text"
          className={styles.modalInput}
          onChange={handleOnChangeItem}
        />
        <div className={styles.modalBtnContainer}>
          <button className={styles.modalBtnAdd} onClick={handleAddItem}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
