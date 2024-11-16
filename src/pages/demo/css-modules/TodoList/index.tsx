import styles from "./index.module.css";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { Table } from "@chakra-ui/react";
import { SetStateAction } from "react";

type Props = {
	list: string[];
	setList: (prevState: SetStateAction<string[]>) => void;
};

const TodoList = ({ list, setList }: Props) => {
	return (
		<Table.Root>
			<Table.Body>
				{list.map((todo, i) => {
					return (
						<Table.Row key={i}>
							<Table.Cell>
								<p className={styles.todo}>{todo}</p>
							</Table.Cell>
							<Table.Cell className={styles.buttonWrapper} textAlign="end">
								<EditButton todoId={i} list={list} setList={setList} />
								<DeleteButton todoId={i} list={list} setList={setList} />
							</Table.Cell>
						</Table.Row>
					);
				})}
			</Table.Body>
		</Table.Root>
	);
};

export default TodoList;
