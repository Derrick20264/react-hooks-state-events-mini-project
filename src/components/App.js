import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visibleTasks = tasks.filter(task => 
    selectedCategory === "All" || task.category === selectedCategory
  );

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskText) => {
    setTasks(tasks.filter(task => task.text !== taskText));
  };
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES} 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        />
      <NewTaskForm 
      categories={CATEGORIES.filter(cat => cat !== "All")}
        onTaskFormSubmit={handleAddTask}
        />
      <TaskList 
      tasks={visibleTasks} 
        onDeleteTask={handleDeleteTask}
        />
    </div>
  );
}

export default App;
