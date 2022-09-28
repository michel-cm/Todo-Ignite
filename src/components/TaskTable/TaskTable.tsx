import styles from "./TaskTable.module.css";

import emptyTasks from "../../assets/emptyTasks.svg";

import { Trash } from "phosphor-react";

export function TaskTable() {
  return (
    <div className={styles.taskTable}>
      <div className={styles.infoTasks}>
        <p className={styles.tasksCreated}>
          Tarefas criadas<span> 0</span>
        </p>
        <p className={styles.tasksCompleted}>
          Concluídas<span> 0</span>
        </p>
      </div>
      <div className={styles.tasksArea}>
        {/*<div className={styles.tasksAreaEmpty}>
          <img src={emptyTasks} alt="icon empty tasks" />
          <p className={styles.msgNoTasks}>
            Você ainda não tem tarefas cadastradas
          </p>
          <p>Crie tarefas e organize seus itens a fazer</p>
  </div>*/}

        <div className={styles.tasksAreaContain}>
          <div className={styles.taskAreaItem}>
            <input
              className={styles.checkBox}
              type="checkbox"
              checked={false}
            />
            <label htmlFor="checkBox"></label>
            <p>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </p>
            <div className={styles.trashArea}>
              <Trash size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
