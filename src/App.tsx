import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { NewTask } from "./components/NewTask/NewTask";
import { TaskTable } from "./components/TaskTable/TaskTable";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.app}>
        <NewTask />
        <TaskTable />
      </div>
    </div>
  );
}
