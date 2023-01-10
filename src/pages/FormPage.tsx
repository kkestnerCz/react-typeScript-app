// mui
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

// custom components
import Form from "../components/Form";

// hooks
import { useFetch } from "../hooks/useFetch";

const FormPage = () => {
  const { loadFormData } = useFetch();

  const handleLoad = () => loadFormData();

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" gutterBottom>
          Please fill out the following form:
        </Typography>
        <Tooltip title="Load data from api" arrow>
          <IconButton
            aria-label="Load data from api"
            color="primary"
            onClick={handleLoad}
          >
            <SettingsIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Paper variant="outlined" sx={{ mt: 2, px: 2 }}>
        <Form />
      </Paper>
    </>
  );
};

export default FormPage;
