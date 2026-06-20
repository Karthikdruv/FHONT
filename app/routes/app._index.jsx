import { boundary } from "@shopify/shopify-app-react-router/server";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null;
};



export default function Index() {
  return (
    <s-page heading="FHONT">
      <s-button slot="primary-action">
        Save Settings
      </s-button>

      <s-section heading="Welcome to FHONT">
        <s-paragraph>
          FHONT is a powerful typography and design management platform for Shopify.
        </s-paragraph>

        <s-stack direction="inline" gap="base">
          <s-button>Typography</s-button>
          <s-button>Colors</s-button>
          <s-button>Fonts</s-button>
          <s-button>Presets</s-button>
        </s-stack>
      </s-section>

      <s-section heading="FHONT Dashboard">
        <s-paragraph>
          Manage typography, colors, responsive settings and custom fonts across your Shopify store.
        </s-paragraph>

        <s-stack direction="block" gap="base">

          <s-box padding="base" borderWidth="base" borderRadius="base">
            <s-text variant="headingMd">Typography</s-text>

            <s-paragraph>
              Font Family, Font Size, Weight, Line Height and Letter Spacing.
            </s-paragraph>
          </s-box>

          <s-box padding="base" borderWidth="base" borderRadius="base">
            <s-text variant="headingMd">Colors</s-text>

            <s-paragraph>
              Primary, Secondary, Accent, Background and Text Colors.
            </s-paragraph>
          </s-box>

          <s-box padding="base" borderWidth="base" borderRadius="base">
            <s-text variant="headingMd">Responsive Controls</s-text>

            <s-paragraph>
              Desktop, Tablet and Mobile settings.
            </s-paragraph>
          </s-box>

          <s-box padding="base" borderWidth="base" borderRadius="base">
            <s-text variant="headingMd">Presets</s-text>

            <s-paragraph>
              Luxury, Fashion, Minimal, Jewelry and Furniture presets.
            </s-paragraph>
          </s-box>

        </s-stack>
      </s-section>
    </s-page>
  );
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
