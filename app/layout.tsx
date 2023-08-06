import ChakraUiProvider from "./chakra-ui-provider";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Mitec+",
  description: "Mitec+",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraUiProvider>{children}</ChakraUiProvider>
        <Analytics />
      </body>
    </html>
  );
}
