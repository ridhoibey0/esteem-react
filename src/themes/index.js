import { extendTheme } from "@chakra-ui/react";
import { colors, fonts } from "./foundations";
import { buttonStyled as Button } from "./components";
import "@fontsource/mukta"

const overrides = {
  colors,
  fonts,
  components: {
    Button,
  },
};

export default extendTheme(overrides);
