import { useFetcher, useLoaderData } from "react-router";
import prisma from "../db.server";
import TypographyBlock from "../components/TypographyBlock";
import { generateTypographyCss } from "../utils/generateTypographyCss";

export async function loader() {
  const settings = await prisma.typographySettings.findMany({
    where: {
      shop: "demo-shop",
    },
  });

  const getSetting = (type) =>
    settings.find((item) => item.type === type) || null;

  return Response.json({
    h1Settings: getSetting("H1"),
    h2Settings: getSetting("H2"),
    h3Settings: getSetting("H3"),
    h4Settings: getSetting("H4"),
    h5Settings: getSetting("H5"),
    h6Settings: getSetting("H6"),
    pSettings: getSetting("P"),
    buttonSettings: getSetting("BUTTON"),
  });
}

export async function action({ request }) {
  const formData = await request.formData();

  const type = formData.get("type");

  const record = await prisma.typographySettings.upsert({
    where: {
      shop_type: {
        shop: "demo-shop",
        type,
      },
    },

    update: {
      fontFamily: formData.get("fontFamily"),
      desktopSize: formData.get("desktopSize"),
      tabletSize: formData.get("tabletSize"),
      mobileSize: formData.get("mobileSize"),
      fontWeight: formData.get("fontWeight"),
      lineHeight: formData.get("lineHeight"),
      letterSpacing: formData.get("letterSpacing"),
      unit: formData.get("unit"),
      fontStyle: formData.get("fontStyle"),
      textTransform: formData.get("textTransform"),
      textDecoration: formData.get("textDecoration"),
      fontColor: formData.get("fontColor"),
    },

    create: {
      shop: "demo-shop",
      type,

      fontFamily: formData.get("fontFamily"),
      desktopSize: formData.get("desktopSize"),
      tabletSize: formData.get("tabletSize"),
      mobileSize: formData.get("mobileSize"),

      fontWeight: formData.get("fontWeight"),
      lineHeight: formData.get("lineHeight"),
      letterSpacing: formData.get("letterSpacing"),

      unit: formData.get("unit"),

      fontStyle: formData.get("fontStyle"),
      textTransform: formData.get("textTransform"),
      textDecoration: formData.get("textDecoration"),
      fontColor: formData.get("fontColor"),
    },
  });

  return Response.json({
    success: true,
    id: record.id,
  });
}


  
  export default function TypographyV2() {
  const {
    h1Settings,
    h2Settings,
    h3Settings,
    h4Settings,
    h5Settings,
    h6Settings,
    pSettings,
    buttonSettings,
  } = useLoaderData();

  const fetcher = useFetcher();

  const saveSettings = (type, data) => {
    fetcher.submit(
      {
        ...data,
        type,
      },
      {
        method: "post",
      }
    );
  };

  const cssPreview = [
    h1Settings,
    h2Settings,
    h3Settings,
    h4Settings,
    h5Settings,
    h6Settings,
    pSettings,
    buttonSettings,
  ]
    .filter(Boolean)
    .map(generateTypographyCss)
    .join("\n");

  return (
    <s-page heading="Typography V2">

      <TypographyBlock
        title="H1"
        initialData={h1Settings}
        onSave={(data) => saveSettings("H1", data)}
      />

      <TypographyBlock
        title="H2"
        initialData={h2Settings}
        onSave={(data) => saveSettings("H2", data)}
      />
	  
	  <TypographyBlock
		  title="H3"
		  initialData={h3Settings}
		  onSave={(data) => saveSettings("H3", data)}
		/>

		<TypographyBlock
		  title="H4"
		  initialData={h4Settings}
		  onSave={(data) => saveSettings("H4", data)}
		/>

		<TypographyBlock
		  title="H5"
		  initialData={h5Settings}
		  onSave={(data) => saveSettings("H5", data)}
		/>

		<TypographyBlock
		  title="H6"
		  initialData={h6Settings}
		  onSave={(data) => saveSettings("H6", data)}
		/>

		<TypographyBlock
		  title="Paragraph"
		  initialData={pSettings}
		  onSave={(data) => saveSettings("P", data)}
		/>

		<TypographyBlock
		  title="Button"
		  initialData={buttonSettings}
		  onSave={(data) => saveSettings("BUTTON", data)}
		/>

      {fetcher.state === "submitting" && (
        <s-paragraph>Saving...</s-paragraph>
      )}

      {fetcher.data?.success && (
        <s-box
          padding="base"
          borderWidth="base"
          borderRadius="base"
        >
          <s-paragraph>
            Saved Successfully. ID: {fetcher.data.id}
          </s-paragraph>
        </s-box>
      )}
	  
	  
		<s-box
		  padding="base"
		  borderWidth="base"
		  borderRadius="base"
		>
		  <s-text variant="headingMd">
			Generated CSS
		  </s-text>

		  <pre
			style={{
			  overflowX: "auto",
			  whiteSpace: "pre-wrap",
			  marginTop: "10px",
			}}
		  >
			{cssPreview}
		  </pre>
		</s-box>

    </s-page>
  );
}