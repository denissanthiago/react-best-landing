import { React } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/globalStyles";
import theme from "../styles/theme";

const Providers = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  );
};

export default Providers;
