import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Figtree } from "next/font/google";



export const metadata: Metadata = {
  title: 'Lava Rápido Sensacional Bar - Tratamento Premium para Seu Carro',
  description: 'Qualidade e cuidado automotivo de luxo na Vila Matilde, São Paulo. Agende seu tratamento premium e deixe seu carro brilhando com acabamento impecável.',
  keywords: ["lava rápido, estética automotiva, lavagem premium, detailing, Vila Matilde, São Paulo, carro, polimento, cristalização, higienização interna, limpeza de bancos"],
  openGraph: {
    "title": "Lava Rápido Sensacional Bar - Tratamento Premium para Seu Carro",
    "description": "Qualidade e cuidado automotivo de luxo na Vila Matilde, São Paulo. Agende seu tratamento premium e deixe seu carro brilhando com acabamento impecável.",
    "url": "https://www.lavarapidosensacionalbar.com.br",
    "siteName": "Lava Rápido Sensacional Bar",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/closeup-shot-exterior-details-modern-black-car_181624-23579.jpg",
        "alt": "Luxury car wash in progress"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Lava Rápido Sensacional Bar - Tratamento Premium para Seu Carro",
    "description": "Qualidade e cuidado automotivo de luxo na Vila Matilde, São Paulo. Agende seu tratamento premium e deixe seu carro brilhando com acabamento impecável.",
    "images": [
      "http://img.b2bpic.net/free-photo/closeup-shot-exterior-details-modern-black-car_181624-23579.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${figtree.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
