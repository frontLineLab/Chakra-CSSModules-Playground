import styles from "./index.module.css";
import { useEditButton } from "./logics/useEditButton";
import { Button } from "@/components/ui/button";
import { Input } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
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

const EditButton = ({ todoId, list, setList }: Props) => {
	const { edit, setEdit, editTodo } = useEditButton(list, setList);
	return (
		<DialogRoot>
			<DialogTrigger asChild>
				<Button
					className={styles.editButton}
					variant="outline"
					colorPalette={"green"}
				>
					編集
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Todoの編集</DialogTitle>
				</DialogHeader>
				<DialogBody>
					<Flex className={styles.editFormWrapper}>
						<Input
							placeholder="Todoを入力してください"
							onChange={(e) => setEdit(e.target.value)}
							value={edit}
						/>
					</Flex>
				</DialogBody>
				<DialogFooter>
					<DialogActionTrigger asChild>
						<Button variant="outline">Cancel</Button>
					</DialogActionTrigger>
					<DialogActionTrigger asChild>
						<Button colorPalette={"blue"} onClick={() => editTodo(todoId)}>
							編集する
						</Button>
					</DialogActionTrigger>
				</DialogFooter>
				<DialogCloseTrigger />
			</DialogContent>
		</DialogRoot>
	);
};

export default EditButton;
