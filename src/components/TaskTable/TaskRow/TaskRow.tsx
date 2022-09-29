import styles from "./TaskRow.module.css";
import { Trash } from "phosphor-react";

import { TaskType } from "../../../types/task";

export function TaskRow({ title, isCompleted }: TaskType) {
  return (
    <div className={styles.taskAreaItem}>
      <div className={styles.checkBoxContent}>
        <input
          className={styles.checkBox}
          type="checkbox"
          checked={isCompleted}
        />
        <label htmlFor="checkBox"></label>
        <p className={isCompleted ? styles.checked : styles.notChecked}>
          {title}
        </p>
      </div>
      <div className={styles.trashArea}>
        <Trash size={18} />
      </div>
    </div>
  );
}
