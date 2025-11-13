export function Header() {
  return (
    <header style={{ background: "#d9ffdbff", color: "#2d8634ff", padding: "10px" }}>
      Shared Header (Auth integrated){" "}
      <nav>
        <a href="/">Go to Main</a>
        <a href="/blog">Go to Blog</a>
        <a href="/dashboard">Go to Dashboard</a>
        <a href="/legacy">Go to Legacy</a>
      </nav>
    </header>
  );
}
