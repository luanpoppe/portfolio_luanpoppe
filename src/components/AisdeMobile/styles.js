import styled from "styled-components"
import { black, blue } from "../../utils/colors"
import "../../globalStyles.css"

export const HeaderMobileAside = styled.aside`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	min-width: 160px;
	z-index: 3;
	background-color: ${black};
	/* opacity: 0.95; */
	border: none;

	animation: fadeIn 0.5s ease;
`

export const EachOptionMobile = styled.div`
	background-color: ${blue};
	color: ${black};
	padding: 8px;
	border-radius: 4px;
	font-weight: bold;
	display: block;
	margin-bottom: 4px;
	text-align: center;
`
