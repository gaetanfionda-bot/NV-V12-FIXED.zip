import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Night Vision V12",
  description: "NV system rebuilt module by module",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-black text-white flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* SCRIPT MODEL VIEWER */}
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        ></script>
      </body>
    </html>
  );
}
