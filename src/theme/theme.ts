import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Inter'`,
    body: `'Inter'`,
  },
  styles: {
    global: {
      body: {
        bgColor: "#141523",
      },
      //   p: {
      //     color: "white",
      //   },
    },
  },
});

export default theme;
