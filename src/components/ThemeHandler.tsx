import React, { useState, useEffect } from "react";

// context
import { useFormCtx } from "../contexts/FormCtxProvider";

// mui
import { ThemeProvider, createTheme } from "@mui/material/styles";

type Props = {
  children: React.ReactNode;
};

const ThemeHandler = ({ children }: Props) => {
  const dataCtx = useFormCtx();
  const [mainColor, setMainColor] = useState<string>(dataCtx?.mainColor);

  useEffect(() => {
    setMainColor(dataCtx?.mainColor);
  }, [dataCtx.mainColor]);

  const theme = createTheme({
    palette: {
      background: {
        default: "#fff",
        paper: "#26399B0D",
      },
      primary: {
        main: `#${mainColor}`,
        dark: "#707070",
      },
    },
    typography: {
      fontFamily: "Roboto, Arial",
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeHandler;
