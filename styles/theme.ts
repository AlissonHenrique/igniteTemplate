import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    color: {
      "1": "#47585B",
      "2": "#F5F8FA",
      "3": "#FFBA08",
      "4": "#999999",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        fontSize: "16px",
        bg: "color.2",
        color: "color.1",
      },
    },
  },
});
