import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";

import { Span } from "./Typography";
import { MatxLogo } from "app/components";
import useSettings from "app/hooks/useSettings";
import logo from '../../asset/logo.png'
// STYLED COMPONENTS
const BrandRoot = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 18px 20px 29px"
}));

const StyledSpan = styled(Span)(({ mode }) => ({
  fontSize: 18,
  marginLeft: ".5rem",
  display: mode === "compact" ? "none" : "block"
}));

export default function Brand({ children }) {
  const { settings } = useSettings();
  const leftSidebar = settings.layout1Settings.leftSidebar;
  const { mode } = leftSidebar;

  return (
    <BrandRoot>
      <Box display="flex" alignItems="center">
        {/* <MatxLogo /> */}
        <img width={100} height={100} src={logo}/>
        {/* <StyledSpan mode={mode} className="sidenavHoverShow">
         MEHA
        </StyledSpan> */}
      </Box>

      <Box className="sidenavHoverShow" sx={{ display: mode === "compact" ? "none" : "block" }}>
        {children || null}
      </Box>
    </BrandRoot>
  );
}
