import type { Metadata } from "next";
import "@/styles/globals.css";
import {Header} from "./componentes/Header/index";
import {Footer} from "./componentes/Footer/index";


export const metadata: Metadata = {
  title: "Portfólio - Renan Mezzacapa",
  description: "Portfólio de projetos desenvolvidos por Renan Mezzacapa, utilizando tecnologias como React, Next.js, TypeScript e outras ferramentas do desenvolvimento web.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <body>{children}<Header /> <Footer /> 

      </body>
    </html>
  );
}
