import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

function LoginDialog(props) {
  const { open, setLoginOpen, setSignupOpen, children } = props;
  const SignUP = {
    marginTop: "-165px",
    marginRight: "195px",
    position: "absolute",
  };

  const switchSignup = (event) => {
    setLoginOpen(false);
    setSignupOpen(true);
  };
  const handleClose = () => {
    setLoginOpen(false);
  };

  return (
    <Dialog aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">
        <div style={{ float: "right", height: "1px" }}>
          <IconButton align="right" onClick={handleClose} aria-label="close">
            <CloseIcon
              align="right"
              onClick={(event) => {
                setLoginOpen(false);
              }}
            />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button>LOGIN</Button>
        <Button onClick={switchSignup} style={SignUP}>
          SIGNUP
        </Button>
      </DialogActions>
    </Dialog>
  );
}

function SignupDialog(props) {
  const { open, setLoginOpen, setSignupOpen, children } = props;

  const switchLogin = (event) => {
    setSignupOpen(false);
    setLoginOpen(true);
  };

  return (
    <Dialog aria-labelledby="simple-dialog-title" open={open}>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          onClick={(event) => {
            setSignupOpen(false);
          }}
        >
          CLOSE
        </Button>
        <Button>SIGNUP</Button>
        <Button onClick={switchLogin}>LOGIN</Button>
      </DialogActions>
    </Dialog>
  );
}

const App2 = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const handleLogin = (event) => {
    setLoginOpen(true);
  };

  const handleSignup = (event) => {
    setSignupOpen(true);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleLogin}
        style={{ backgroundColor: "#225779" }}
      >
        Login
      </Button>
      <LoginDialog
        open={loginOpen}
        setLoginOpen={setLoginOpen}
        setSignupOpen={setSignupOpen}
      >
        {/*<SingIn /> */}
      </LoginDialog>
      <SignupDialog
        open={signupOpen}
        setLoginOpen={setLoginOpen}
        setSignupOpen={setSignupOpen}
      >
        {/*<SignUp /> */}
      </SignupDialog>
    </div>
  );
};

export default App2;
