//mui
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import Icon from "@mui/material/Icon";

// routing
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
        <MarkEmailReadIcon sx={{ fontSize: "100px" }} color="primary" />
      </Box>
      <Typography variant="h2" mt="40px" align="center">
        thank you for your order.
      </Typography>
      <Typography variant="subtitle2" mt="10px" align="center" color="primary">
        <Box
          sx={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={handleClick}
        >
          here you can go back
        </Box>
      </Typography>
    </>
  );
};

export default ErrorPage;
