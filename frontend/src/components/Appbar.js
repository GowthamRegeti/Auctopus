import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import * as React from "react";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Books", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchoElNav] = React.useState(null);
  const [anchorElUser,setAnchorElUser] = React.useState(null);


  return (
    <div>
      <AppBar position="static">
        <h1>App</h1>
        <Container maxWidth="xl">
          <Toolbar>
            <AdbIcon sx={{display:{xs:'none',md:'flex'},mr:1}}/>
            <Typography 
              variant="h6" 
              noWrap
              component="a" 
              href="/" 
              sx={{mr:2, display}}>
                
              </Typography>
          </Toolbar> 
          <h1>capp</h1>
        </Container>
      </AppBar>
    </div>
    
  );
}
export default ResponsiveAppBar;
