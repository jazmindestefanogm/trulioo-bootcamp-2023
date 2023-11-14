import { Providers } from "./provider";
import { Nav } from "./components/Nav";
import Footer from "./components/Footer";
// import DemoTrulioo from "./components/DemoTrulio";
import Verification from "./components/Verification";
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
          <Verification />
          {/* <DemoTrulioo /> */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
