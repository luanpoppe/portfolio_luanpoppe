import { TitleStyled } from "../Main/styles";
import { ContactContainerStyled, ContactsStyled } from "./styles";

const Contacts = (props) => {
	return (
		<ContactsStyled
			className={props.fadeIn ? "fadeIn" : ""}
			onAnimationEnd={() => {
				props.setFadeIn(false);
			}}
		>
			<ContactContainerStyled>
				<TitleStyled>Contatos</TitleStyled>
				<ul>
					<li>
						<div className="liMobile">
							<img
								className="img"
								src="https://static-00.iconduck.com/assets.00/gmail-icon-512x511-fih5xfbp.png"
								alt="Gmail"
							/>{" "}
							Email:{" "}
						</div>
						<a href="mailto:luanpoppe.tech@gmail.com" target="_blank">
							luanpoppe.tech@gmail.com
						</a>
					</li>
					<li>
						<div className="liMobile">
							<img
								className="img"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtXmyWwGVESVJ9-ip22SkZPDZRtIfEfpM-mVWUTvOlgg&s"
								alt="GitHub"
							/>
							{`GitHub:    `}
						</div>
						<a href="https://github.com/luanpoppe" target="_blank">
							https://github.com/luanpoppe
						</a>
					</li>
					<li>
						<div className="liMobile">
							<img
								className="img"
								src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
								alt="LinkedIn"
							/>{" "}
							LinkedIn:{" "}
						</div>
						<a href="https://www.linkedin.com/in/luan-poppe/" target="_blank">
							https://www.linkedin.com/in/luan-poppe/
						</a>
					</li>
				</ul>
			</ContactContainerStyled>
		</ContactsStyled>
	);
};

export default Contacts;
