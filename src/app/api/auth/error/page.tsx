export default function AuthErrorPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  return (
    <div>
      <h1>Authentication Error</h1>
      <p>{searchParams.error || "An unknown error occurred."}</p>
    </div>
  );
}
