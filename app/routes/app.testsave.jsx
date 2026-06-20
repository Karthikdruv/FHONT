export default function TestSave() {
  async function saveData() {
    try {
      const response = await fetch("/api/typography-save", {
        method: "POST",
      });

      const text = await response.text();

      alert(text.substring(0, 500));

    } catch (error) {
      alert(`ERROR: ${error.message}`);
    }
  }

  return (
    <s-page heading="Database Test">
      <s-button onClick={saveData}>
        Save Test Record
      </s-button>
    </s-page>
  );
}