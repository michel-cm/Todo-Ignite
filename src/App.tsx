import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { NewTask } from "./components/NewTask/NewTask";
import { TaskTable } from "./components/TaskTable/TaskTable";
import { TasksContextProvider } from "./contexts/Tasks.Context";

export function App() {
  return (
    <TasksContextProvider>
      <div>
        <Header />
        <div className={styles.app}>
          <NewTask />
          <TaskTable />
        </div>
      </div>
    </TasksContextProvider>
  );
}
