import styles from "./TaskTable.module.css";
import { v1 as uuidv1 } from "uuid";

import emptyTasks from "../../assets/emptyTasks.svg";

import { useState } from "react";
import { TaskRow } from "./TaskRow/TaskRow";
import { useTasks } from "../../hooks/useTasks";

export function TaskTable() {
  const { tasks } = useTasks();

  let i = 0;
  tasks.forEach((task) => {
    if (task.isCompleted === true) {
      i++;
    }
  });

  return (
    <div className={styles.taskTable}>
      <div className={styles.infoTasks}>
        <p className={styles.tasksCreated}>
          Tarefas criadas<span> {tasks.length}</span>
        </p>
        <p className={styles.tasksCompleted}>
          Concluídas
          <span>{tasks.length > 0 ? `${i} de ${tasks.length}` : "0"}</span>
        </p>
      </div>
      <div className={styles.tasksArea}>
        {tasks.length > 0 ? (
          <>
            {tasks.map((task) => (
              <TaskRow
                title={task.title}
                isCompleted={task.isCompleted}
                id={task.id}
                publishedAt={new Date()}
              />
            ))}
          </>
        ) : (
          <div className={styles.tasksAreaEmpty}>
            <img src={emptyTasks} alt="icon empty tasks" />
            <p className={styles.msgNoTasks}>
              Você ainda não tem tarefas cadastradas
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </div>
    </div>
  );
}
