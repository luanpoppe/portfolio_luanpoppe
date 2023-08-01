import { ButtonHeader, HeaderStyle } from "./styles";

const Header = (props) => {
	return (
		<HeaderStyle>
			<ButtonHeader
				onClick={() => {
					props.setFalseValues();
					props.setFadeIn(true);
					props.setMostrarInicio(true);
				}}
			>
				Sobre
			</ButtonHeader>

			<ButtonHeader
				onClick={() => {
					props.setFalseValues();
					props.setFadeIn(true);
					props.funcMostrarProjetos(true);
				}}
			>
				Projetos
			</ButtonHeader>

			<ButtonHeader>Contatos</ButtonHeader>
		</HeaderStyle>
	);
};

export default Header;
