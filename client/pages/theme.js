import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#322d48",
      main: "#0d0221",
      dark: "#000000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff71a2",
      main: "#f83674",
      dark: "#bf0049",
      contrastText: "#000",
    },
  },
});

export default theme;
