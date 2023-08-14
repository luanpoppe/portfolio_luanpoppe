import React from "react"

import { HeroStyled, HeroTextStyled } from "./styles"
import { fotoPerfilLuan } from "../../utils/images"

function Hero() {
	return (
		<HeroStyled>
			<img src={fotoPerfilLuan} alt="Foto de Perfil" />
			<HeroTextStyled>
				<h1>
					Olá! Me chamo Luan Poppe. Atuo como desenvolver front-end
				</h1>
				<p>
					Atualmente atuo como desenvolvedor front-end, enquanto
					realizo curso da plataforma da EBAC para me tornar
					Desenvolvedor Fullstack, com previsão de término para o fim
					de 2023.
				</p>
			</HeroTextStyled>
		</HeroStyled>
	)
}

export default Hero
