import { useState } from "react";
import { FooterStyled } from "./styles";
import "../../globalStyles.css";

const Footer = () => {
	const [showEmailMessage, setShowEmailMessage] = useState(false);

	return (
		<>
			<FooterStyled>
				{showEmailMessage && (
					<span className={showEmailMessage ? "fadeOut" : ""}>
						Email foi copiado para a área de transferência
					</span>
				)}
				<ul className="ul">
					<li className="li">
						<a
							className="link"
							target="_blank"
							href="https://github.com/luanpoppe"
							title="GitHub"
						>
							<img
								className="img"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtXmyWwGVESVJ9-ip22SkZPDZRtIfEfpM-mVWUTvOlgg&s"
								alt="GitHub"
							/>
						</a>
					</li>
					<li className="li">
						<a
							className="link"
							target="_blank"
							href="https://www.linkedin.com/in/luan-poppe/"
							title="LinkedIn"
						>
							<img
								className="img"
								src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
								alt="LinkedIn"
							/>
						</a>
					</li>
					<li className="li">
						<a
							onClick={() => {
								navigator.clipboard.writeText("luanpoppe.tech@gmail.com");
								setShowEmailMessage(true);
								setTimeout(() => setShowEmailMessage(false), 4100);
							}}
							className="link"
							// target="_blank"
							href="mailto:luanpoppe@gmail.com"
							title="Entre em Contato"
						>
							<img
								className="img"
								src="https://static-00.iconduck.com/assets.00/gmail-icon-512x511-fih5xfbp.png"
								alt="Gmail"
							/>
						</a>
					</li>
				</ul>
			</FooterStyled>
		</>
	);
};

export default Footer;
