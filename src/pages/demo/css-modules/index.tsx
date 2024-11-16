import styles from "./index.module.css";
import RegisterForm from "./RegisterForm";
import TodoList from "./TodoList";
import { useState } from "react";
import { Box } from "@chakra-ui/react";

const TodoApp = () => {
	const [list, setList] = useState<string[]>([]);
	return (
		<>
			<div className={styles.text}>TODO LIST</div>
			<RegisterForm setList={setList} />
			<Box className={styles.todoListWrapper}>
				<TodoList list={list} setList={setList} />
			</Box>
		</>
	);
};

export default TodoApp;
