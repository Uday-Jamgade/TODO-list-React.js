import TodoItem from "./TodoItem"
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, todoDate , onDeleteClick }) => {
    return (
      <div  className={styles.itemContainer}>
        {todoItems.map((item) => (
          <TodoItem
            todoDate ={item.dueDate}
            todoName={item.name}
            onDeleteClick={onDeleteClick}
          ></TodoItem>
        ))}
      </div>
    );
  };
  
export default TodoItems;