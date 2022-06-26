import * as React from "react";
import "./Enquire.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

export default function Enquire() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="Enquire">
      <button className="btn" onClick={handleClickOpen}>
        Enquire now
      </button>
      <Dialog open={open} onClose={handleClose} className="dailogbox">
        <DialogTitle align="center">
          <div style={{ float: "right", height: "1px" }}>
            <IconButton align="right" onClick={handleClose} aria-label="close">
              <CloseIcon align="right" />
            </IconButton>
          </div>
          <div className="headercontent">
            <h1 className="title">Welcome back</h1>
            <h5 className="Tagline">We are here to Connect with you</h5>
          </div>
        </DialogTitle>
        <DialogContent>
          <form
            style={{ padding: "20px", paddingBottom: "0px" }}
            className="formstyle"
          >
            <dl>
              <dt className="form-lable">
                Name<sup style={{ color: "red" }}>*</sup>
              </dt>
              <dd>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your Name"
                />
              </dd>
              <dt className="form-lable">
                Email<sup style={{ color: "red" }}>*</sup>
              </dt>
              <dd>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your Email ID"
                />
              </dd>

              <dt className="form-lable">
                Phone No<sup style={{ color: "red" }}>*</sup>
              </dt>
              <dd>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your Phone Number"
                />
              </dd>
              <dt className="form-lable">Company</dt>
              <dd>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your Company Name"
                />
              </dd>
              <dt className="form-lable">
                Tell Us About Your Requirement(Product Name)
                <sup style={{ color: "red" }}>*</sup>
              </dt>
              <dd>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your Product Name"
                />
              </dd>
              <dt className="form-lable">
                Approx Quantity Required<sup style={{ color: "red" }}>*</sup>
              </dt>
              <dd>
                <input type="text" className="form-control" />
              </dd>
            </dl>
            <div className="d-grid">
              <button
                className="btn"
                style={{ backgroundColor: "#225779", color: "#ffffff" }}
              >
                Enquire Now
              </button>
            </div>
            <div style={{ color: "red" }}>
              <sup>*</sup>Required Fields
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
