import tstLogo1 from "../assets/logos/logoipsum-254.svg";

const Logo = () => {
  const logoStyle = {
    position: "relative" as "relative",
    display: "flex",
    justifyContent: "center",
    background: "unset",
    padding: "20px 1.5rem",
    width: "13rem",
    height: "auto",
  };

  return (
    <div style={logoStyle}>
      <img src={tstLogo1} alt="some random app logo" />
    </div>
  );
};

export default Logo;
