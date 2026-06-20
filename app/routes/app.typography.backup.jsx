import { useState } from "react";

export default function Typography() {

	const [fontFamily, setFontFamily] = useState("Poppins");
	const [desktopSize, setDesktopSize] = useState("64");
	const [tabletSize, setTabletSize] = useState("48");
	const [mobileSize, setMobileSize] = useState("36");
	const [fontWeight, setFontWeight] = useState("700");
	const [lineHeight, setLineHeight] = useState("1.2");
	const [letterSpacing, setLetterSpacing] = useState("0");
	const [unit, setUnit] = useState("px");

	const [fontStyle, setFontStyle] = useState("normal");
	const [textTransform, setTextTransform] = useState("none");
	const [textDecoration, setTextDecoration] = useState("none");
	const [fontColor, setFontColor] = useState("#000000");

  const saveSettings = () => {
  console.log({
    fontFamily,
    desktopSize,
    tabletSize,
    mobileSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    unit,
    fontStyle,
    textTransform,
    textDecoration,
    fontColor,
  });

  alert("H1 Settings Ready For Database Save");
};

  return (
    <s-page heading="Typography">

      <s-section heading="Global Heading Settings">

        <s-stack direction="block" gap="base">

          <s-box padding="base" borderWidth="base" borderRadius="base">

            <s-text variant="headingMd">
              H1 Settings
            </s-text>

            <s-paragraph>
              Configure H1 typography settings.
            </s-paragraph>

            <s-stack direction="block" gap="base">

              <s-text-field
                label="Font Family"
                value={fontFamily}
                onInput={(e) => setFontFamily(e.target.value)}
              />

              <s-text-field
                label="Desktop Size"
                value={desktopSize}
                onInput={(e) => setDesktopSize(e.target.value)}
              />

              <s-text-field
                label="Tablet Size"
                value={tabletSize}
                onInput={(e) => setTabletSize(e.target.value)}
              />

              <s-text-field
                label="Mobile Size"
                value={mobileSize}
                onInput={(e) => setMobileSize(e.target.value)}
              />

              <s-text-field
                label="Font Weight"
                value={fontWeight}
                onInput={(e) => setFontWeight(e.target.value)}
              />

              <s-text-field
                label="Line Height"
                value={lineHeight}
                onInput={(e) => setLineHeight(e.target.value)}
              />

              <s-text-field
                label="Letter Spacing"
                value={letterSpacing}
                onInput={(e) => setLetterSpacing(e.target.value)}
              />

              <s-text-field
                label="Unit"
                value={unit}
                onInput={(e) => setUnit(e.target.value)}
              />
			  
			  
			 <s-text-field
  label="Font Style"
  value={fontStyle}
  onInput={(e) => setFontStyle(e.target.value)}
/>

<s-text-field
  label="Text Transform"
  value={textTransform}
  onInput={(e) => setTextTransform(e.target.value)}
/>

<s-text-field
  label="Text Decoration"
  value={textDecoration}
  onInput={(e) => setTextDecoration(e.target.value)}
/>
			
<s-text-field
  label="Font Color"
  value={fontColor}
  onInput={(e) => setFontColor(e.target.value)}
/>
			  

              <s-button onClick={saveSettings}>
  Save H1 Settings
</s-button>

<s-paragraph>
  Database Save: Not Connected Yet
</s-paragraph>


            </s-stack>

          </s-box>

          <s-box padding="base" borderWidth="base" borderRadius="base">

            <h1
              style={{
  fontFamily: fontFamily,
  fontSize: `${desktopSize}${unit}`,
  fontWeight: fontWeight,
  lineHeight: lineHeight,
  letterSpacing: `${letterSpacing}${unit}`,
  fontStyle: fontStyle,
  textTransform: textTransform,
  textDecoration: textDecoration,
  color: fontColor,
  margin: 0,
}}
            >
              This is an H1 Preview
            </h1>

          </s-box>

          <s-box padding="base" borderWidth="base" borderRadius="base">
            <s-text variant="headingMd">H2 Settings</s-text>
            <s-paragraph>
              Control H2 typography settings.
            </s-paragraph>
          </s-box>

          <s-box padding="base" borderWidth="base" borderRadius="base">
            <s-text variant="headingMd">Paragraph Settings</s-text>
            <s-paragraph>
              Control paragraph font settings.
            </s-paragraph>
          </s-box>

        </s-stack>

      </s-section>

    </s-page>
  );
}