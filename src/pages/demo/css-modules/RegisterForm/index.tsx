import styles from "./index.module.css";
import { useRegisterForm } from "./logics/useRegisterForm";
import { Button } from "@/components/ui/button";
import { Input } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { SetStateAction } from "react";

type Props = {
	setList: (prevState: SetStateAction<string[]>) => void;
};

const RegisterForm = ({ setList }: Props) => {
	const { todo, setTodo, registerTodo } = useRegisterForm(setList);
	return (
		<Flex className={styles.wrapper}>
			<Input
				placeholder="Todoを入力してください"
				onChange={(e) => setTodo(e.target.value)}
				value={todo}
			/>
			<Button
				onClick={registerTodo}
				colorPalette={"blue"}
				disabled={!(todo.length > 0)}
			>
				登録する
			</Button>
		</Flex>
	);
};

export default RegisterForm;
