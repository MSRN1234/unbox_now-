import * as React from 'react';
import './Login.css';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Checkbox } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
// import Login from './Login';

export default function Signin() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <button variant="outlined" className="btn-infobtn" onClick={handleClickOpen}>
                Log-in
            </button>
            <Dialog open={open} onClose={handleClose}>
                <form style={{ padding: "25px" }}>
                    <div style={{ float: "right", height: "0.5px", marginTop: "-15px" }}>
                        <IconButton align="right" onClick={handleClose} aria-label="close">
                            <CloseIcon align="right" />
                        </IconButton>
                    </div>
                    <DialogTitle className='welcome-signin' >
                        <div>
                            <h3> Welcome back </h3>

                            {/* <Login /> */}

                            <br /> <h5>Or, sign in with your email<sup style={{ color: "red" }}>*</sup></h5>
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <div style={{ fontWeight: "700" }}>
                                Email/Username<sup style={{ color: "red" }}>*</sup>
                            </div>
                        </DialogContentText>

                        <TextField fullWidth id="outlined-basic" label="Type your email/UserName" variant="outlined" size='small' margin='dense' />

                        <DialogContentText>
                            <div style={{ fontWeight: "700" }}>
                                Password<sup style={{ color: "red" }}>*</sup>
                            </div>
                        </DialogContentText>

                        <TextField fullWidth id="outlined-basic" label="Type your password" variant="outlined" size='small' margin='dense' />

                        <DialogContentText>
                            <div style={{ display: "flex" }}>
                                <Checkbox />
                                Keep me sign in
                                <a href='/'>Forgot password?</a>
                            </div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <button className='button-design-login' onClick={handleClose}>Sign in</button>
                    </DialogActions>
                    <div style={{ color: "red", marginLeft: '8px' }}>
                        <sup>*</sup> Required Fields
                    </div>
                    <p style={{ marginLeft: '10px' }}>
                        Don’t have an account?
                        <a href='/' style={{ textDecoration: "none", color: "#225779" }}> Sign up now</a>
                    </p>
                </form>
            </Dialog>
        </div>
    )
}
