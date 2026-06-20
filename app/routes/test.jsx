export async function loader() {
  return Response.json({
    success: true,
    message: "Test route works",
  });
}

export default function Test() {
  return <div>Test Route</div>;
}