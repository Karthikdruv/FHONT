export function generateTypographyCss(settings) {
  if (!settings) return "";

  return `
.${settings.type.toLowerCase()} {
  font-family: ${settings.fontFamily};
  font-size: ${settings.desktopSize}${settings.unit};
  font-weight: ${settings.fontWeight};
  line-height: ${settings.lineHeight};
  letter-spacing: ${settings.letterSpacing}${settings.unit};
  font-style: ${settings.fontStyle};
  text-transform: ${settings.textTransform};
  text-decoration: ${settings.textDecoration};
  color: ${settings.fontColor};
}
`;
}