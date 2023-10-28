import React from "react";
import { BsFillBagPlusFill } from "react-icons/bs";
import styles from "./FloatButton.module.css";

interface FloatButtonProps {
  onClickBtn: () => void;
}
export const FloatButton: React.FC<FloatButtonProps> = ({ onClickBtn }) => {
  return (
    <div className={styles.floatBtnContainer}>
      <button
        className={styles.floatBtn}
        onClick={onClickBtn}
        name="openModelModalNewItem"
      >
        <BsFillBagPlusFill size={28} />
      </button>
    </div>
  );
};
