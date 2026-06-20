import TypographyBlock from "../components/TypographyBlock";

export default function TypographyV2() {
  return (
    <s-page heading="Typography V2">
      <TypographyBlock
        title="H1"
        initialData={{}}
        onSave={(data) => console.log(data)}
      />

      <TypographyBlock
        title="H2"
        initialData={{}}
        onSave={(data) => console.log(data)}
      />
    </s-page>
  );
}