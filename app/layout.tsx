import { Providers } from "./provider";
import { Nav } from "./components/Nav";
import Footer from "./components/Footer";
// import DemoTrulioo from "./components/DemoTrulio";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Nav />
          {children}
          {/* <DemoTrulioo /> */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
