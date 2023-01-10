import { useEffect, useState } from "react";

// mui
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

// ctx
import { useFormCtx } from "../../contexts/FormCtxProvider";

const InfoBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dataCtx = useFormCtx();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (dataCtx.alert.message) setOpen(true);
  }, [dataCtx.alert]);

  return (
    <Snackbar
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={dataCtx.alert.type}
        sx={{ width: "100%" }}
      >
        {dataCtx.alert.message}
      </Alert>
    </Snackbar>
  );
};

export default InfoBar;
