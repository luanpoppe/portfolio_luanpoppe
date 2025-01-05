import styled from "styled-components"
import {
	corPadraoDeFundo,
	corPadraoTextos,
	corTagsTexto
} from "../../utils/colors"
import { ButtonProjetoStyled } from "./ConteudoProjetosStyled"
import { FaGithub } from "react-icons/fa"

type Props = PropActiveLanguage & {
	updateObject?: (paramIndex: number) => void
	projeto?: Projeto
	index?: number
}

export function RedirecionamentoProjeto({
	activeLanguage,
	updateObject,
	projeto,
	index
}: Props) {
	return (
		<div className=" d-flex flex-column gap-4 jcc aic">
			<div className="d-flex gap-3 aic jcc mt-2">
				<BotaoVerMais
					activeLanguage={activeLanguage}
					index={index}
					updateObject={updateObject}
				/>

				<BotaoAcesseOProjeto
					activeLanguage={activeLanguage}
					projeto={projeto}
				/>
			</div>

			<BotaoGitHub projeto={projeto} />
		</div>
	)
}

const styleVerMais: React.CSSProperties = {
	backgroundColor: corPadraoDeFundo,
	color: corPadraoTextos,
	border: `1px solid ${corPadraoTextos}`
}

function BotaoVerMais({ activeLanguage, index, updateObject }: Props) {
	return (
		<ButtonProjetoStyled
			style={styleVerMais}
			onClick={() => {
				updateObject(index)
			}}
		>
			{activeLanguage === "english"
				? "Read more"
				: activeLanguage === "portuguese"
				? "Ver mais"
				: ""}
		</ButtonProjetoStyled>
	)
}

const styleAcesseOProjeto = {
	boxShadow: "-2.5px 2.5px rgba(255, 255, 255, 0.3)"
}

function BotaoAcesseOProjeto({ projeto, activeLanguage }: Props) {
	return (
		<ButtonProjetoStyled
			style={styleAcesseOProjeto}
			href={projeto.link}
			target="_blank"
			rel="noreferrer"
		>
			{activeLanguage === "english"
				? "Access"
				: activeLanguage === "portuguese"
				? "Acesse"
				: ""}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				className="w-full h-auto ml-1 !w-6 md:!w-4 ms-1"
			>
				<path fill="none" d="M0 0h24v24H0z"></path>
				<path
					fill="none"
					stroke={corPadraoDeFundo}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1"
					d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
				></path>
			</svg>
		</ButtonProjetoStyled>
	)
}

const BotaoGitHubStyled = styled.a`
	background-color: ${corTagsTexto};
	padding: 8px 24px;
	border-radius: 6px;
	max-width: 80px;
	display: flex;
	justify-content: center;
	box-shadow: -4px 4px rgba(255, 255, 255, 0.7);
	margin-bottom: 1rem;

	&:hover {
		transform: scale(1.05);
		transition: all ease 350ms;
	}

	imf {
		background-color: ${corTagsTexto};
	}
`

function BotaoGitHub({ projeto }: { projeto: Projeto }) {
	return (
		<BotaoGitHubStyled
			href={projeto.github}
			target="_blank"
			rel="noreferrer"
		>
			<FaGithub size={30} title="Acesse o github" />
		</BotaoGitHubStyled>
	)
}
