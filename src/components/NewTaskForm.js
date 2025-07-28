import React from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { text, category };
    onTaskFormSubmit(newTask);
    setText("");
    setCategory(categories[0]);
  };
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={text}/>
      </label>
      <label>
        Category
        <select name="category"
        value={category} 
          onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
