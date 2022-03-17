import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    highlight: {
      500: "#FFBA08",
      450: "#FFBA0880",
    },
    dark: {
      900: "#000000",
      600: "#47585B",
      100: "#999999",
      50: "#99999980"
    },
    light: {
      500: "#DADADA",
      200:"#F5F8FA",
      50: "#FFFFFF"
    }
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, serif"
  }
})