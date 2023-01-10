import React, { useEffect, useState } from "react";

// mui
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

// mui icons
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

// styles
import "./styles.css";

type props = {
  senderLine1: string;
  senderLine2: string;
  senderLine3: string;
  senderLine4: string;
  phone: string | number;
};

const Package3dPreview = ({
  senderLine1,
  senderLine2,
  senderLine3,
  senderLine4,
  phone,
}: props) => {
  const [animationRunning, setAnimationRunning] = useState<boolean>(true);

  const handlePause = () => {
    setAnimationRunning((state) => !state);
  };

  return (
    <>
      <div className="shadowWrapper" style={{ minHeight: "400px" }}>
        <div
          className={
            animationRunning ? "packageWrapper" : "packageWrapper paused"
          }
        >
          <div className="front">
            <div className="recipientAddressBlock">
              <b>Adresát:</b>
              <br />
              {senderLine1}
              <br />
              {senderLine2}
              <br />
              {senderLine3}
              <br />
              {senderLine4}
              <br />
              tel.: {phone}
            </div>

            <div className="senderAddressBlock">
              <b>Odesílatel:</b>
              <br />
              Lorem ipsum
              <br />
              dolorSitametová 123
              <br />
              consectetuer nad Metují
              <br />
              123 45
              <br />
              tel.: 123 456 789
            </div>
          </div>
          <div className="leftSide" />
          <div className="rightSide" />
          <div className="back" />
          <div className="top" />
        </div>
      </div>
      <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
        <IconButton
          aria-label="pause"
          size="large"
          color={animationRunning ? "default" : "primary"}
          onClick={handlePause}
        >
          <PauseCircleIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </>
  );
};

export default Package3dPreview;
