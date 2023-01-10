// mui
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// custom components
import Form from "../components/Form";

const FormPage = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Please fill out the following form:
      </Typography>
      <Paper variant="outlined" sx={{ mt: 2, px: 2 }}>
        <Form />
      </Paper>
    </>
  );
};

export default FormPage;
