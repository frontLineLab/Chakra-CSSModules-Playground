import { Button } from "@/components/ui/button";
import { SetStateAction } from "react";

import {
	DialogActionTrigger,
	DialogBody,
	DialogCloseTrigger,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogRoot,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
	todoId: number;
	list: string[];
	setList: (prevState: SetStateAction<string[]>) => void;
};

const DeleteButton = ({ todoId, list, setList }: Props) => {
	const deleteTodo = (i: number) => {
		const deleted = list.filter((_, index) => index != i);
		setList(deleted);
	};

	return (
		<DialogRoot role="alertdialog">
			<DialogTrigger asChild>
				<Button colorPalette={"red"} variant="outline">
					削除
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Todoの削除</DialogTitle>
				</DialogHeader>
				<DialogBody>
					<p>Todo を削除しますか?</p>
				</DialogBody>
				<DialogFooter>
					<DialogActionTrigger asChild>
						<Button variant="outline">Cancel</Button>
					</DialogActionTrigger>
					<DialogActionTrigger asChild>
						<Button colorPalette="red" onClick={() => deleteTodo(todoId)}>
							削除する
						</Button>
					</DialogActionTrigger>
				</DialogFooter>
				<DialogCloseTrigger />
			</DialogContent>
		</DialogRoot>
	);
};

export default DeleteButton;
