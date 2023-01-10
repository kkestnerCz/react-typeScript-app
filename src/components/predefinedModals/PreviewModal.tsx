import { ReactNode } from "react";

// MUI
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// icons
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

// custom components
import BasicModal from "../BasicModal";
import Package3dPreview from "../Package3dPreview";

// context
import { useFormCtx } from "../../contexts/FormCtxProvider";

// routing
import { useNavigate } from "react-router-dom";

// hooks
import { useFetch } from "../../hooks/useFetch";

type props = {
  open: boolean;
  handleClose: () => void;
  children?: ReactNode;
  title: string;
};

const PreviewModal = ({ open, handleClose, children, title }: props) => {
  const dataCtx = useFormCtx();
  const { sendOrder } = useFetch();
  const navigate = useNavigate();

  const handleSend = () => {
    sendOrder()
      .then(() => {
        dataCtx.clearFormData(); // will clear only form data
        handleClose(); // close modal
        navigate("/success"); // navigate to success page
      })
      .catch((e) => console.log("error")); // will stay in open modal with data for another atempt
  };

  return (
    <BasicModal open={open} handleClose={handleClose}>
      <Typography variant="h3" gutterBottom>
        Preview
      </Typography>
      <Package3dPreview
        senderLine1={`${dataCtx.formData.name} ${dataCtx.formData.surname}`}
        senderLine2={`${dataCtx.formData.street} ${dataCtx.formData.houseNr}`}
        senderLine3={dataCtx.formData.city}
        senderLine4={dataCtx.formData.zipCode}
        phone={dataCtx.formData.phone}
      />

      <Grid container sx={{ background: "aliceblue" }}>
        <Grid
          item
          xs={6}
          sx={{ my: 2, justifyContent: "center", display: "flex" }}
        >
          <Button
            type="submit"
            variant="outlined"
            startIcon={<EditLocationAltIcon />}
            onClick={handleClose}
          >
            Change address
          </Button>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            my: 2,
            pt: 0,
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Button
            type="reset"
            variant="contained"
            endIcon={<LocalShippingIcon />}
            onClick={handleSend}
          >
            Send package
          </Button>
        </Grid>
      </Grid>
    </BasicModal>
  );
};

export default PreviewModal;
