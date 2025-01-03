import styled from "styled-components"

type Props = {
	setActiveLanguage: React.Dispatch<React.SetStateAction<ActiveLanguage>>
}

export function FlagsComponents({ setActiveLanguage }: Props) {
	return (
		<FlagStyled className="d-flex flex-column gap-3 position-absolute top-100 mt-4">
			<BrasilFlag setActiveLanguage={setActiveLanguage} />
			<USAFlag setActiveLanguage={setActiveLanguage} />
		</FlagStyled>
	)
}

const FlagStyled = styled.div`
	img {
		width: 32px;
		object-fit: cover;
		cursor: pointer;
		transition: none;
	}
`

export function BrasilFlag({ setActiveLanguage }: Props) {
	return (
		<img
			onClick={() => {
				setActiveLanguage("portuguese")
			}}
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/275px-Flag_of_Brazil.svg.png"
			alt="Brasil"
		/>
	)
}

export function USAFlag({ setActiveLanguage }: Props) {
	return (
		<img
			onClick={() => {
				setActiveLanguage("english")
			}}
			src="https://cdn-icons-png.flaticon.com/512/555/555526.png"
			alt="EUA"
		/>
	)
}
