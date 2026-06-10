export const tokens = {
	bg: "#f7f5fc",
	bgSoft: "#ede9fe",
	bgCard: "#ffffff",
	purple: "#7c3aed",
	purpleMid: "#8b5cf6",
	purpleLight: "#c4b5fd",
	purplePale: "#ddd6fe",
	purpleText: "#4c1d95",
	text: "#2e1065",
	textMuted: "#6b5b8a",
	textLight: "#9b8bb8",
	border: "#e4dff5",
	radius: "12px",
	radiusPill: "999px",
	containerMax: "1140px",
	mobileBreakpoint: "960px"
} as const

export const cssVariables = `
  --bg: ${tokens.bg};
  --bg-soft: ${tokens.bgSoft};
  --bg-card: ${tokens.bgCard};
  --purple: ${tokens.purple};
  --purple-mid: ${tokens.purpleMid};
  --purple-light: ${tokens.purpleLight};
  --purple-pale: ${tokens.purplePale};
  --text: ${tokens.text};
  --text-muted: ${tokens.textMuted};
  --text-light: ${tokens.textLight};
  --border: ${tokens.border};
  --radius: ${tokens.radius};
  --radius-pill: ${tokens.radiusPill};
`
