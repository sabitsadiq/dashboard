"use client";
import React, { useState, FormEvent } from "react";
import { MdClose } from "react-icons/md";
interface modalProps {
  open: boolean;
  closeModal?: any;
  todo: any;
  setTodo: any;
  addTask?: any;
}

const Modal = ({ open, closeModal, addTask, todo, setTodo }: modalProps) => {
  if (!open) {
    return null;
  }

  return (
    <main className="top-0 left-0 fixed w-full h-screen bg-black/30 flex justify-center md:items-center">
      <div className="relative w-[97%] md:w-4/5 lg:w-1/2 xl:w-2/5 mt-36 md:mt-0">
        <MdClose
          size={30}
          onClick={closeModal}
          className="text-black z-30 absolute -top-16 cursor-pointer right-0"
        />
        <form
          action=""
          className="px-4 py-8 rounded-lg w-full mx-auto bg-gray-50/100"
          onSubmit={addTask}
        >
          <input
            placeholder="Add tasks here..."
            value={todo}
            className="block w-full p-2 rounded-md outline-none border border-gray-300"
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-blue-500 rounded-lg py-[6px] px-2 md:py-3 md:px-4 items-center flex ml-auto w-1/3 md:w-1/4 justify-center mt-4 text-white text-base font-semibold"
          >
            Add
          </button>
        </form>
      </div>
    </main>
  );
};

export default Modal;
