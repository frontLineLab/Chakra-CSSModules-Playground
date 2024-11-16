import { useState } from "react";
import { SetStateAction } from "react";

export const useRegisterForm = (
	setList: (prevState: SetStateAction<string[]>) => void
) => {
	const [todo, setTodo] = useState("");

	const registerTodo = () => {
		setList((prevState) => [...prevState, todo]);
		setTodo("");
	};

	return {
		todo,
		setTodo,
		registerTodo,
	};
};
