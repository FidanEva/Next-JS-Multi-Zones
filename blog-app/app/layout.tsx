import dynamic from "next/dynamic";

const Header = dynamic(() => import("shared-ui").then((mod) => mod.Header), {});

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
