import React from "react";
import Footer from "pages/Footer";
import { Button } from "@mui/material";
import img17 from "./imagesAbout/img_17.jpg";
import img18 from "./imagesAbout/img_18.png";
import img19 from "./imagesAbout/img_19.png";
import img20 from "./imagesAbout/img_20.png";
import img21 from "./imagesAbout/img_21.png";
import img22 from "./imagesAbout/img_22.png";
import img23 from "./imagesAbout/img_23.png";
import img24 from "./imagesAbout/img_24.svg";
import img25 from "./imagesAbout/img_25.svg";
import img26 from "./imagesAbout/img_26.svg";
import img27 from "./imagesAbout/img_27.svg";

export default function About() {
  return (
    <div>
      <div id="about">
        <div className="images">
          <img src={img17} alt="ảnh" />
        </div>
        <div className="imgg">
          <div className="img_18">
            <img src={img18} alt="ảnh" />
            <div className="About_img18">
              <Button>
                <p>buy now</p>
              </Button>
            </div>
          </div>

          <div className="img_19">
            <img src={img19} alt="ảnh" />
            <div className="About_img19">
              <Button>
                <p>buy now</p>
              </Button>
            </div>
          </div>
        </div>
        <div className="Team">
          <div className="h2">
            <h2>The Founders</h2>
          </div>
          <div className="imga">
            <div className="img_20">
              <img src={img20} alt="ảnh" />
              <h4>HM Jawad</h4>
            </div>
            <div className="img_21">
              <img src={img21} alt="ảnh" />
              <h4>Furqan Abid</h4>
            </div>
            <div className="img_22">
              <img src={img22} alt="ảnh" />
              <h4>Abdullah Ah</h4>
            </div>
            <div className="img_23">
              <img src={img23} alt="ảnh" />
              <h4>Abrar Khan</h4>
            </div>
          </div>
        </div>
        <div className="h2_1">
          <h2>Testimonials</h2>
        </div>
        <div>
          <div className="testimonials">
            <div className="container">
              <div className="img_24">
                <img src={img24} alt="ảnh" />
              </div>
              <div className="img_27">
                <img src={img27} alt="ảnh" />
                <div className="h6">
                  <h6>
                    Once we ordered some accessories items and we got the <br />
                    products delivered in our doorstep, the customer support{" "}
                    <br />
                    was super helpful and they answered all my queries.
                  </h6>
                </div>
                <div className="stacy">
                  <h5>Stacy</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonials">
            <div className="container">
              <div className="img_24">
                <img src={img25} alt="ảnh" />
              </div>
              <div className="img_27">
                <img src={img27} alt="ảnh" />
                <div className="h6">
                  <h6>
                    I ordered 5 shirts from them and received them in no time.
                    The customer support was awesome!
                  </h6>
                </div>
                <div className="stacy">
                  <h5>Tiffany</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonials">
            <div className="container">
              <div className="img_24">
                <img src={img26} alt="ảnh" />
              </div>
              <div className="img_27">
                <img src={img27} alt="ảnh" />
                <div className="h6">
                  <h6>
                    I got a wrong shirt so I contacted them and they happily
                    offered me a refund. I will surely shop from them again.
                  </h6>
                </div>
                <div className="stacy">
                  <h5>James</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
