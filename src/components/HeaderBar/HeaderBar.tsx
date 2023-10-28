import React from "react";
import styles from "./HeaderBar.module.css";

interface HeaderBarProps {
  onClickClear: () => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({ onClickClear }) => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>Shopping List</h1>
      <button
        className={styles.headerBtn}
        onClick={onClickClear}
        name="btnClearShopList"
      >
        Clear
      </button>
    </div>
  );
};
