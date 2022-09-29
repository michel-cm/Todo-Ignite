import { createContext, useEffect, useState } from "react";
import { v1 as uuidv1 } from "uuid";
import { TaskType, TasksTypeProvider } from "../types/task";

const initialValue = {
  tasks: [],
  createNewTask: () => {},
};

export const TasksContext = createContext<TasksTypeProvider>(initialValue);

export const TasksContextProvider = ({ children }: any) => {
  const [tasks, setTasks] = useState([
    {
      title: "exemplo de task !",
      isCompleted: true,
      id: uuidv1(),
      publishedAt: new Date(),
    },
    {
      title: "exemplo de task 02 !",
      isCompleted: false,
      id: uuidv1(),
      publishedAt: new Date(),
    },
  ]);

  function createNewTask(task: TaskType) {
    setTasks((state) => [...state, task]);
  }

  function deleteTask(id: string) {}

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createNewTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
