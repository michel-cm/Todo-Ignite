import styles from "./NewTask.module.css";
import { PlusCircle } from "phosphor-react";
import { useTasks } from "../../hooks/useTasks";
import { FormEvent, useState } from "react";

import { v1 as uuidv1 } from "uuid";

export function NewTask() {
  const [titleTask, setTitleTask] = useState("");

  const { createNewTask } = useTasks();

  function handleCreateNewTask(title: string, event: FormEvent) {
    event.preventDefault();
    createNewTask({
      title,
      isCompleted: false,
      id: uuidv1(),
      publishedAt: new Date(),
    });
    setTitleTask("")
  }

  return (
    <div className={styles.NewTask}>
      <form
        onSubmit={(event) => handleCreateNewTask(titleTask, event)}
        className={styles.addTodoForm}
      >
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={titleTask}
          onChange={(e) => setTitleTask(e.target.value)}
        />
        <button type="submit">
          Criar
          <PlusCircle className={styles.plusCircle} size={18} />
        </button>
      </form>
    </div>
  );
}
