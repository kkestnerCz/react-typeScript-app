
import * as React from 'react';

import { Outlet } from "react-router-dom";

// custom components
import Logo from "../components/Logo";

// mui
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  position: 'relative',
}));


const Layout = () => {
  return (
    <>
        <Container maxWidth="lg">
            <StyledBox sx={{ minHeight: '100vh', px: 3, py: 2 }} >
                <Box sx={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', borderBottom: "1px solid #0000001c", mb: 3}}>
                  <Box sx={{ mx: -3, mt: -2 }}>
                      <Logo />
                  </Box>
                </Box>
                <Outlet />
            </StyledBox>
        </Container>
    </>
  )
};

export default Layout;