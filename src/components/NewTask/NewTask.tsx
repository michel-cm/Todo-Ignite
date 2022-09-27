import styles from "./NewTask.module.css";
import { PlusCircle } from "phosphor-react";

export function NewTask() {
  return (
    <div className={styles.NewTask}>
      <form onSubmit={() => alert("enter")} className={styles.addTodoForm}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          <p>Criar</p>
          <PlusCircle className={styles.plusCircle} size={18} />
        </button>
      </form>
    </div>
  );
}
