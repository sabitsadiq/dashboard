"use client";
import React, { useState, MouseEvent, FormEvent, useEffect } from "react";
import { Card, Card3 } from "../components/card/Card";
import { Card2 } from "../components/card/Card";
import { Table } from "../components";
import { Modal } from "../components";
// import { parse } from "path";
export interface todoListProps {
  task: string;
}

const DashBoard = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<todoListProps[]>([]);
  const LOCAL_STORAGE_KEY = "todoList";

  const handleOpenModal = (e: MouseEvent) => {
    setOpenModal(true);
  };
  const addTask = (e: FormEvent) => {
    e.preventDefault();
    if (todo === "") {
      console.log("empty");
      return;
    }
    // console.log(todo);
    const newtask = { task: todo };
    setTodoList([...todoList, newtask]);
    console.log(todoList);
    setTodo("");
    setOpenModal(false);
  };
  // Retrieve with if statement the the data is available(todoList data)
  useEffect(() => {
    // const retrieveTodoList = JSON.parse(
    //   localStorage.getItem(LOCAL_STORAGE_KEY)
    // );
    const storeTodoList = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storeTodoList) {
      const parseItem = JSON.parse(storeTodoList);
      console.log(parseItem);
      setTodoList(parseItem);
    } else {
      console.log("no parse item exit");
    }
    // if (retrieveTodoList) setTodoList(retrieveTodoList);
    // console.log(retrieveTodoList);
  }, []);
  // store Todo to Local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  // Delete task
  const deleteTask = (selectedTask: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.task != selectedTask;
      })
    );
  };
  return (
    <main className="py-10 px-2 md:px-8 text-gray-400 relative">
      <p className="font-normal text-2xl">Task Dashboard</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  md:gap-x-8">
        <Card />
        <Card2 />
        <Card3 />
      </div>
      <Table
        handleOpenModal={handleOpenModal}
        todoList={todoList}
        deleteTask={deleteTask}
      />
      <Modal
        open={openModal}
        closeModal={() => setOpenModal(false)}
        addTask={addTask}
        setTodo={setTodo}
        todo={todo}
      />
    </main>
  );
};

export default DashBoard;
