import { useState } from "react";
import { SetStateAction } from "react";

export const useEditButton = (
	list: string[],
	setList: (prevState: SetStateAction<string[]>) => void
) => {
	const [edit, setEdit] = useState("");

	const editTodo = (i: number) => {
		const edited = list.map((item, index) => {
			if (index === i) return edit;
			return item;
		});
		setList(edited);
		setEdit("");
	};

	return {
		edit,
		setEdit,
		editTodo,
	};
};
