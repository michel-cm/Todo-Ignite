import styles from "./TaskTable.module.css";

import emptyTasks from "../../assets/emptyTasks.svg";

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
        <div className={styles.tasksAreaEmpty}>
          <img src={emptyTasks} alt="icon empty tasks" />
          <p className={styles.msgNoTasks}>
            Você ainda não tem tarefas cadastradas
          </p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </div>
  );
}
