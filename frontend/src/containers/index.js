import React from 'react'
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Login from '../components/Login';
import Signup from '../components/Signup';

function SignInOutContainer() {
  const [value,setValue] = React.useState('1');
  const handleChange = (event,newVal)=>{
    setValue(newVal);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        typography: "body1",
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Sign In" value="1" />
            <Tab label="Sign Up" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Login handleChange = {handleChange}/>
        </TabPanel>
        <TabPanel value="2">
          <Signup />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default SignInOutContainer