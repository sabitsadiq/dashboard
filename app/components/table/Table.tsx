"use client";
import React, { useState, MouseEvent } from "react";
import { BiPlus } from "react-icons/bi";
import { todoListProps } from "@/app/dashBoard/page";
import TaskList from "@/app/components/taskList/TaskList";

interface buttonModal {
  handleOpenModal?: any;
  todoList: todoListProps[];
  deleteTask(selectedTask: string): void;
}
const Table = ({ handleOpenModal, todoList, deleteTask }: buttonModal) => {
  return (
    <div className=" mt-5 bg-white rounded-md pb-4">
      <div className="flex flex-col md:flex-row px-5 py-3 justify-between md:items-center border-b mb-4 bg-gray-50/100">
        <h1 className="text-blue-500/90 text-base font-bold my-4">Task List</h1>
        <div className="md:flex gap-2">
          <input
            type="text"
            placeholder="Search by tasks name"
            className="p-2  outline-none border rounded-md w-[98%] md:w-fit  border-gray-300 mb-4 md:mb-0"
          />
          <button
            className="bg-blue-500 rounded-md py-[6px] px-2 items-center flex text-white text-sm"
            onClick={handleOpenModal}
          >
            <BiPlus />
            New Task
          </button>
        </div>
      </div>
      <div className="m-5 border rounded-md ">
        {todoList.map((task: todoListProps, key: number) => {
          return <TaskList task={task} key={key} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
};

export default Table;
