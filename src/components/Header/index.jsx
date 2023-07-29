import { ButtonHeader, HeaderStyle } from "./styles";

const Header = () => {
	return (
		<>
			<HeaderStyle>
				<ButtonHeader>Sobre</ButtonHeader>
				<ButtonHeader>Projetos</ButtonHeader>
				<ButtonHeader>Contatos</ButtonHeader>
			</HeaderStyle>
		</>
	);
};

export default Header;
