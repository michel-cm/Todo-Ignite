import { createContext, useEffect, useState } from "react";
import { v1 as uuidv1 } from "uuid";
import { TaskType, TasksTypeProvider } from "../types/task";

const initialValue = {
  tasks: [],
  createNewTask: () => {},
  deleteTask: () => {},
  updateCheckedTask: () => {},
};

export const TasksContext = createContext<TasksTypeProvider>(initialValue);

export const TasksContextProvider = ({ children }: any) => {
  const [tasks, setTasks] = useState([
    {
      title: "exemplo de task !",
      isCompleted: false,
      id: uuidv1(),
      publishedAt: new Date(),
    },
  ]);

  function createNewTask(task: TaskType) {
    setTasks((state) => [...state, task]);
  }

  function deleteTask(id: string) {
    const tasksListWithowtDeleted = tasks.filter((task) => {
      return task.id != id;
    });
    setTasks(tasksListWithowtDeleted);
  }

  function updateCheckedTask(id: string) {
    const newTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createNewTask,
        deleteTask,
        updateCheckedTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
