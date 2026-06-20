import { useFetcher, useLoaderData } from "react-router";
import prisma from "../db.server";
import TypographyBlock from "../components/TypographyBlock";

export async function loader() {
  const settings = await prisma.typographySettings.findUnique({
    where: {
      shop: "demo-shop",
    },
  });

  return Response.json({
    settings,
  });
}

export async function action({ request }) {
  const formData = await request.formData();

  const record = await prisma.typographySettings.upsert({
    where: {
      shop: "demo-shop",
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

export default function Typography() {
  const { settings } = useLoaderData();
  const fetcher = useFetcher();

  const saveSettings = (data) => {
    fetcher.submit(data, {
      method: "post",
    });
  };

  return (
    <s-page heading="Typography">

      <s-section heading="Global Heading Settings">

        <s-stack direction="block" gap="base">

          <TypographyBlock
            title="H1"
            initialData={settings}
            onSave={saveSettings}
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

        </s-stack>

      </s-section>

    </s-page>
  );
}