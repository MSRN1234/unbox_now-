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
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

export default function Login() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button className='button-design-Signin' onClick={handleClickOpen}>
                <PhoneIphoneIcon fontSize='large' style={{ backgroundColor: "#57CC98", marginRight: "45px", marginTop: "-4px", borderRadius: "4px" }} />
                <div>
                    Sign in with Phone Number
                </div>
            </button>
            <Dialog open={open} onClose={handleClose}>
                <form style={{ padding: "25px" }}>
                    <div style={{ float: "right", height: "0.5px", marginTop: "-15px" }}>
                        <IconButton align="right" onClick={handleClose} aria-label="close">
                            <CloseIcon align="right" />
                        </IconButton>
                    </div>
                    <DialogTitle className='welcome-signin' >
                        <h3> Welcome back </h3>
                        <br /> <h5> Sign in with your Phone No <sup style={{ color: "red" }}>*</sup></h5>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <div style={{ fontWeight: "700" }}>
                                Phone No<sup style={{ color: "red" }}>*</sup>
                            </div>
                        </DialogContentText>

                        <TextField fullWidth id="outlined-basic" label="type your Phone Number" variant="outlined" size='small' margin='dense' />

                        <DialogContentText>
                            <div style={{ fontWeight: "700" }}>
                                Enter the OTP<sup style={{ color: "red" }}>*</sup>
                            </div>
                        </DialogContentText>

                        <TextField fullWidth id="outlined-basic" label="Enter the OTP to validate your number" variant="outlined" size='small' margin='dense' />

                        <DialogContentText>
                            <Checkbox />
                            Keep me sign in
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <button className='button-design-login' onClick={handleClose}>Validate OTP</button>
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
