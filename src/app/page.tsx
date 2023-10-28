"use client";

import { FloatButton, HeaderBar, ModalNewItem } from "@/components";
import { useState } from "react";

export default function Home() {
  const [shopList, setShopList] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleToggleModal = () => setOpenModal((prev) => !prev);
  const handleClearShopList = () => setShopList([]);

  const handleAddNewItem = (newItemName: string) => {
    if (!newItemName.length) return;
    const newItem = {
      title: newItemName,
      status: "close",
      count: 1,
    };

    setShopList((prev) => [...prev, newItem]);
    setOpenModal(false);
  };
  return (
    <main>
      <HeaderBar onClickClear={handleClearShopList} />
      <div>
        {!shopList.length ? (
          <span>No items</span>
        ) : (
          <ul>
            {shopList?.map((item) => (
              <li key={item.title}>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <FloatButton onClickBtn={handleToggleModal} />
      {openModal && (
        <ModalNewItem
          onClose={handleToggleModal}
          onSubmit={handleAddNewItem}
          isOpen={openModal}
        />
      )}
    </main>
  );
}
