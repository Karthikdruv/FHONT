import { useState } from "react";

export default function TypographyBlock({
  title,
  initialData,
  onSave,
}) {
  const [fontFamily, setFontFamily] = useState(
    initialData?.fontFamily || "Poppins"
  );

  const [desktopSize, setDesktopSize] = useState(
    initialData?.desktopSize || "64"
  );

  const [tabletSize, setTabletSize] = useState(
    initialData?.tabletSize || "48"
  );

  const [mobileSize, setMobileSize] = useState(
    initialData?.mobileSize || "36"
  );

  const [fontWeight, setFontWeight] = useState(
    initialData?.fontWeight || "700"
  );

  const [lineHeight, setLineHeight] = useState(
    initialData?.lineHeight || "1.2"
  );

  const [letterSpacing, setLetterSpacing] = useState(
    initialData?.letterSpacing || "0"
  );

  const [unit, setUnit] = useState(
    initialData?.unit || "px"
  );

  const [fontStyle, setFontStyle] = useState(
    initialData?.fontStyle || "normal"
  );

  const [textTransform, setTextTransform] = useState(
    initialData?.textTransform || "none"
  );

  const [textDecoration, setTextDecoration] = useState(
    initialData?.textDecoration || "none"
  );

  const [fontColor, setFontColor] = useState(
    initialData?.fontColor || "#000000"
  );

  const HeadingTag = title.toLowerCase();

  return (
    <s-box padding="base" borderWidth="base" borderRadius="base">

      <s-text variant="headingMd">
        {title} Settings
      </s-text>

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

        <label>Font Style</label>
        <select
          value={fontStyle}
          onChange={(e) => setFontStyle(e.target.value)}
        >
          <option value="normal">Normal</option>
          <option value="italic">Italic</option>
          <option value="oblique">Oblique</option>
        </select>

        <label>Text Transform</label>
        <select
          value={textTransform}
          onChange={(e) => setTextTransform(e.target.value)}
        >
          <option value="none">None</option>
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="capitalize">Capitalize</option>
        </select>

        <label>Text Decoration</label>
        <select
          value={textDecoration}
          onChange={(e) => setTextDecoration(e.target.value)}
        >
          <option value="none">None</option>
          <option value="underline">Underline</option>
          <option value="line-through">Line Through</option>
          <option value="overline">Overline</option>
        </select>

        <label>Font Color</label>
        <input
          type="color"
          value={fontColor}
          onChange={(e) => setFontColor(e.target.value)}
        />

        <s-button
          onClick={() =>
            onSave({
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
            })
          }
        >
          Save {title}
        </s-button>

      </s-stack>

      <div style={{ marginTop: "20px" }}>
        <HeadingTag
          style={{
            fontFamily,
            fontSize: `${desktopSize}${unit}`,
            fontWeight,
            lineHeight,
            letterSpacing: `${letterSpacing}${unit}`,
            fontStyle,
            textTransform,
            textDecoration,
            color: fontColor,
          }}
        >
          {title} Preview
        </HeadingTag>
      </div>

    </s-box>
  );
}