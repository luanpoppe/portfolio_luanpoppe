import styled from "styled-components"
import "../../globalStyles.css"

export const FooterStyled = styled.footer`
	margin-top: 80px;
	margin-bottom: 40px;

	@media (max-width: 480px) {
		margin-top: 28px;
	}

	.ul, span {
		display: flex;
		justify-content: center;
		gap: 24px;
	}

	span {
		/* animation: fadeIn 1s ease; */
		animation-duration: 4s;
		margin-bottom: 8px;
		font-size: 20px;
		overflow: hidden;

		@media (max-width: 480px) {
			text-align: center;
			font-size: 12px;
		}
	}

	.li {
		list-style: none;
	}

	.img {
		max-width: 60px;
		border-radius: 50%;
		object-fit: cover;
	}

	.link {
		text-decoration: none;
	}
`
