import styled from "styled-components"
import { black, blue } from "../../utils/colors"
import "../../globalStyles.css"

export const HeaderMobileAside = styled.aside`
	position: fixed;
	top: 0;
	left: 0;
	height: 120px;
	/* min-width: 160px; */
	width: 100%;
	z-index: 3;
	background-color: ${black};
	/* opacity: 0.95; */
	border-radius: 4px;

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
