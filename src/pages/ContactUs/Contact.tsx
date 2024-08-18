import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import Footer from "pages/Footer";
import img28 from "./imagesContact/img_28.jpg";

export default function Contact() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <div id="contact">
        <div className="img_28">
          <img src={img28} alt="ảnh" />
        </div>
        <div className="grid_contai_contact">
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Item>
                <div className="form-h2">
                  <h2>We would love to hear from you.</h2>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item>
                <div className="form-h4">
                  <h4>
                    If you have any query or any type of suggestion, you can
                    contact us here. We would love to hear from you.
                  </h4>
                </div>
              </Item>
            </Grid>
            <div className="grid_Contact">
              <div>
                <Grid item xs={12} md={12}>
                  <Item>
                    <div>
                      <div className="input_name">
                        <Grid item xs={12} md={3} xl={6}>
                          <Item>
                            <div className="name">
                              Name
                              <input type="name" />
                            </div>
                          </Item>
                        </Grid>
                        <Grid item xs={12} md={3} xl={6}>
                          <Item>
                            <div className="email">
                              Email
                              <input type="Email" />
                            </div>
                          </Item>
                        </Grid>
                      </div>
                      <Grid item xs={12} md={6} xl={6}>
                        <Item>
                          <div className="input_message">
                            Message
                            <input type="Message" />
                          </div>
                        </Item>
                      </Grid>
                    </div>

                    <div className="button">
                      <ButtonGroup
                        disableElevation
                        variant="contained"
                        aria-label="Disabled elevation buttons"
                      >
                        <Button>SEND MESSAGE</Button>
                      </ButtonGroup>
                    </div>
                  </Item>
                </Grid>
              </div>
              <div>
                <Grid item xs={12} md={12}>
                  <Item>
                    {" "}
                    <div className="information">
                      <div className="visit">
                        <div>
                          <h5>Visit Us</h5>
                        </div>
                        <div>
                          <h6>
                            UET Lahore, Punjab, Pakistan <br /> Phone:
                            +923039898987
                          </h6>
                        </div>
                      </div>
                      <div className="gettouch">
                        <div>
                          <h5>Get In Touch</h5>
                        </div>
                        <div>
                          <h6>
                            You can get in touch with us on this provided email.{" "}
                            <br /> Email: hmjawad087@gmail.com
                          </h6>
                        </div>
                      </div>
                    </div>
                  </Item>
                </Grid>
              </div>
            </div>
          </Grid>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
