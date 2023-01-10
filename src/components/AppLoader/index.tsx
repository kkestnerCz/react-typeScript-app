import Backdrop from "@mui/material/Backdrop";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

// ctx
import { useFormCtx } from "../../contexts/FormCtxProvider";

type Props = {
  forceOpen?: boolean;
};

const AppLoader = ({ forceOpen }: Props) => {
  const dataCtx = useFormCtx();

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: "4000" }}
      open={!forceOpen ? dataCtx.loading : forceOpen}
    >
      <Box sx={{ width: "30%", minWidth: "200px" }}>
        <LinearProgress />
      </Box>
    </Backdrop>
  );
};

export default AppLoader;
