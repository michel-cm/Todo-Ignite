import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { NewTask } from "./components/NewTask/NewTask";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.app}>
        <NewTask />
      </div>
    </div>
  );
}
