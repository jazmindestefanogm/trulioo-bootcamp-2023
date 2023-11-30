import { Providers } from "./Providers";
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
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
