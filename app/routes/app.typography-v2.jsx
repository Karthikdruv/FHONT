import { useFetcher, useLoaderData } from "react-router";
import prisma from "../db.server";
import TypographyBlock from "../components/TypographyBlock";

export async function loader() {
  const h1Settings = await prisma.typographySettings.findUnique({
    where: {
      shop_type: {
        shop: "demo-shop",
        type: "H1",
      },
    },
  });

  const h2Settings = await prisma.typographySettings.findUnique({
    where: {
      shop_type: {
        shop: "demo-shop",
        type: "H2",
      },
    },
  });

  return Response.json({
    h1Settings,
    h2Settings,
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
  const { h1Settings, h2Settings } = useLoaderData();
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

    </s-page>
  );
}