import { ReactNode } from "react";

// mui
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

// context
import { useFormCtx } from "../contexts/FormCtxProvider";

type props = {
  open: boolean;
  handleClose: () => void;
  children?: ReactNode;
};

const BasicModal = ({ open, handleClose, children }: props) => {
  const dataCtx = useFormCtx();

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "25%",
    transform: "translate(-20%, -50%)",
    minWidth: 400,
    width: "75%",
    bgcolor: "#fff",
    border: `1px solid #${dataCtx.mainColor}`,
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
    >
      <Fade in={open}>
        <Box sx={modalStyle}>{children}</Box>
      </Fade>
    </Modal>
  );
};

export default BasicModal;
