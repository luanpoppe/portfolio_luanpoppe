import { ButtonHeader, HeaderMobile, HeaderStyle } from "./styles";

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

			<ButtonHeader
				onClick={() => {
					props.setFalseValues();
					props.setFadeIn(true);
					props.setMosrarContatos(true);
				}}
			>
				Contatos
			</ButtonHeader>

			{!props.mostrarSidebar && (
				<HeaderMobile>
					<div
						className="hamburguer"
						onClick={() => {
							props.setMostrarSideBar(true);
						}}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</HeaderMobile>
			)}
		</HeaderStyle>
	);
};

export default Header;
