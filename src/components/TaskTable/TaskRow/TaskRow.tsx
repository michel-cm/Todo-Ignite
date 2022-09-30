import styles from "./TaskRow.module.css";
import { Trash } from "phosphor-react";

import { TaskType } from "../../../types/task";
import { useTasks } from "../../../hooks/useTasks";

export function TaskRow({ title, isCompleted, id }: TaskType) {
  const { deleteTask, updateCheckedTask } = useTasks();

  return (
    <div className={styles.taskAreaItem}>
      <div className={styles.checkBoxContent}>
        <input
          className={styles.checkBox}
          type="checkbox"
          checked={isCompleted}
        />
        <label onClick={() => updateCheckedTask(id)} htmlFor="checkBox"></label>
        <p className={isCompleted ? styles.checked : styles.notChecked}>
          {title}
        </p>
      </div>
      <div onClick={() => deleteTask(id)} className={styles.trashArea}>
        <Trash size={18} />
      </div>
    </div>
  );
}
