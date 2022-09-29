import { useContext } from "react";
import { TasksContext } from "../contexts/Tasks.Context";

export function useTasks() {
    const value = useContext(TasksContext);

    return value;
}