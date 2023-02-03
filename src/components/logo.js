import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import logo from "../../public/static/ShopJOB.svg";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import LogoImage from "../images/shopJOB.png";
import LogoImageInvert from "../images/shopJOB invert.png";
export const Logo = styled((props) => {
  const { invert} = props;
  console.log("IMAGE", LogoImage);
  // if (size === "medium") {
  //   return (
  //     <Typography variant="h5" component="span" sx={{ color: color, zIndex: 10 }}>
  //       ShopJOB
  //     </Typography>
  //   );
  // }
  // if (size === "small") {
  //   return (
  //     <Typography variant="h6" component="span" sx={{ color: color, zIndex: 10 }}>
  //       ShopJOB
  //     </Typography>
  //   );
  // }
  // return (
  //   <Typography variant="h3" component="span" sx={{ color: color, zIndex: 10 }}>
  //     ShopJOB
  //   </Typography>
  // );
  if(invert){

    return (
      <Box sx={{ width: 240, heigh: 240 }}>
        <Image src={LogoImageInvert} />
      </Box>
    );
  }
  return (
    <Box sx={{ width: 240, heigh: 240 }}>
      <Image src={LogoImage} />
    </Box>
  );
})``;

Logo.defaultProps = {
  variant: "primary",
};

Logo.propTypes = {
  variant: PropTypes.oneOf(["light", "primary"]),
};
