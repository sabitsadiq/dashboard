import React from "react";
import { todoListProps } from "@/app/dashBoard/page";
import { MdDelete, MdModeEdit } from "react-icons/md";
interface Props {
  task: todoListProps;
  deleteTask(selectedTask: string): void;
}
const TaskList = ({ task, deleteTask }: Props) => {
  return (
    <main className="w-full">
      <div className="border-b px-4 py-3">
        <div className=" md:flex  items-center  justify-between">
          <div className="flex gap-2 items-center">
            <input type="checkbox" />
            <p className="overflow-x-auto">{task.task}</p>
          </div>
          <div className="flex gap-4 mt-2 justify-end">
            <MdModeEdit className="cursor-pointer" />
            <MdDelete
              className="cursor-pointer"
              onClick={() => deleteTask(task.task)}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default TaskList;
