import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  topNavigation: [
    { id: "docs", label: "Documentation" },
    { id: "api", label: "API Reference" },
  ],
  basePath: "/developer-portal",
  sidebar: {
    docs: [
      {
        type: "category",
        label: "Overview",
        items: ["introduction", "example"],
      },
    ],
  },
  redirects: [{ from: "/", to: "/docs/introduction" }],
  apis: {
    type: "url",
    input: "https://gist.githubusercontent.com/enzagroup/d78f891185d143bba192b4b7804a1ff4/raw/5bd4b60944f60f1125410730c70fc25d952d8a28/Enza-REST-API-UAT-oas30.yaml",
    navigationId: "api",
  },
  // apis: {
  //   type: "file",
  //   input: "./apis/Enza-REST-API-UAT-oas30.yaml",
  //   navigationId: "api",
  // },
  docs: {
    files: "/pages/**/*.{md,mdx}",
  },
  page: {
    logoUrl: "/logos/enza-logo-dark.svg",
    logo: {
      src: {
        light: "/logos/enza-logo-dark.svg",
        dark: "/logos/enza-logo-dark.svg"
      },
      width: "127px"
    }
  },
  metadata: {
    title: "Enza Developer Portal",
    description: "Developer Portal for Enza partners.",
    logo: "/logos/enza-logo-dark.svg",
    favicon: "/logos/enza-logo-dark.svg",
    applicationName: "Example App",
  },
  theme: {
    light: {
      background: "#ffffff", // White background
      foreground: "#000000", // Black text
      card: "#91dcb3", // Enza green card
      cardForeground: "#000000", // Black text on card
      popover: "#ffffff", // White popover background ######
      popoverForeground: "#000000", // Black popover text
      primary: "#91dcb3", // Enza green primary action
      primaryForeground: "#000000", // Black text on primary
      secondary: "#ffffff", // White secondary action
      secondaryForeground: "#000000", // Black text on secondary
      muted: "#ffffff", // White muted background
      mutedForeground: "#000000", // Black text for muted elements
      accent: "#91dcb3", // Enza green accent
      accentForeground: "#000000", // Black text on accent
      destructive: "#91dcb3", // Enza green for destructive actions
      destructiveForeground: "#000000", // Black text on destructive
      border: "#91dcb3", // Enza green border
      input: "#91dcb3", // Enza green input border
      ring: "#91dcb3", // Enza green focus ring
      radius: "0.5rem", // Border radius
    },
    dark: {
      background: "#000000", // Black background
      foreground: "#ffffff", // White text
      card: "#000000", // Enza green card  ###---->########
      cardForeground: "#91dcb3", // White text on card
      popover: "#91dcb3", // Black popover background ######
      popoverForeground: "#91dcb3", // White popover text
      primary: "#91dcb3", // Enza green primary action
      primaryForeground: "#000000", // White text on primary
      secondary: "#91dcb3", // Black secondary action ######
      secondaryForeground: "#91dcb3", // White text on secondary
      muted: "#91dcb3", // Black muted background
      mutedForeground: "#ffffff", // White text for muted elements
      accent: "#91dcb3", // Enza green accent
      accentForeground: "#ffffff", // White text on accent
      destructive: "#91dcb3", // Enza green for destructive actions
      destructiveForeground: "#ffffff", // White text on destructive
      border: "#91dcb3", // Enza green border
      input: "#91dcb3", // Enza green input border
      ring: "#91dcb3", // Enza green focus ring
      radius: "0.5rem", // Border radius
    },
  },
};

export default config;

