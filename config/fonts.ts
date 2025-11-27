import { Fira_Code as FontMono, Inter as FontSans, Orbitron } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontOrbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // los pesos que uses
  variable: "--font-orbitron",
});