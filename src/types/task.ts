export interface TaskType {
  title: string;
  isCompleted: boolean;
  id: string;
  publishedAt: Date;
}

export interface TasksTypeProvider {
  tasks: TaskType[];
  createNewTask: (task: TaskType) => void;
  deleteTask: (id: string) => void;
}