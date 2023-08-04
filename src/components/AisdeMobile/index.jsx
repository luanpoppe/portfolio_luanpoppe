import { EachOptionMobile, HeaderMobileAside } from "./styles";

const AsideMobile = (props) => {
	return (
		<>
			<HeaderMobileAside>
				<EachOptionMobile
					onClick={() => {
						props.setFalseValues();
						props.setFadeIn(true);
						props.setMostrarInicio(true);
					}}
				>
					Sobre
				</EachOptionMobile>
				<EachOptionMobile
					onClick={() => {
						props.setFalseValues();
						props.setFadeIn(true);
						props.funcMostrarProjetos(true);
					}}
				>
					Projetos
				</EachOptionMobile>
				<EachOptionMobile
					onClick={() => {
						props.setFalseValues();
						props.setFadeIn(true);
						props.setMosrarContatos(true);
					}}
				>
					Contatos
				</EachOptionMobile>
			</HeaderMobileAside>
		</>
	);
};

export default AsideMobile;
