import React from "react";
import {
  createTheme,
  ThemeProvider,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
const Signup = () => {
  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={3}
        style={{
          width: "35%",
          height: "500px",
          marginTop: "100px",
        }}
      >
        <Typography variant="h1" style={{ fontSize: "50px" }}>
          Sign Up
        </Typography>
        <br></br>
        <br></br>
        <TextField
          id="outlined-basic"
          label="Firstname"
          type="text"
          variant="outlined"
        />
        &emsp;&emsp;&emsp;
        <TextField
          id="outlined-basic"
          label="Lastname"
          type="text"
          variant="outlined"
        />
        <br></br>
        <br></br>
        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
        />
        <br></br>
        <br></br>
        <TextField
          label="Password"
          type="password"
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter password"
        />
        <br></br>
        <br></br>
        <br></br>
        <Button variant="contained">Sign Up</Button>
        <br></br>
        <br></br>
        <Link href="#" underline="hover">
          {"Already have an account?"}
        </Link>
      </Paper>
    </ThemeProvider>
  );
};

export default Signup;
