/* eslint-disable import/extensions */
import React from "react";
import img14 from "./imagesFooter/img_14.png";
import img15 from "./imagesFooter/img_15.png";
import img16 from "./imagesFooter/img_16.png";
import img17 from "./imagesFooter/img_17.png";

export default function Footer() {
  return (
    <div id="footer">
      <div className="container_footer">
        <div className="contai_footer">
          <div>
            <h4>Company info</h4>
          </div>
          <div className="contai_footer_h6">
            <p> About Us Shop</p>
            <p>Latest Posts</p>
            <p> Contact Us</p>
            <p>Shop</p>
          </div>
        </div>
        <div className="contai_footer">
          <div>
            <h4>help links</h4>
          </div>
          <div className="contai_footer_h6">
            <p> Tracking</p>
            <p>Order Status</p>
            <p> Delivery</p>
            <p>Shipping Info</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="contai_footer">
          <div>
            <h4>Company info</h4>
          </div>
          <div className="contai_footer_h6">
            <p> Special Offers</p>
            <p>Advetising</p>
            <p> Terms of Use</p>
            <p>Gift Cards</p>
          </div>
        </div>
        <div className="input_get_in">
          <div className="get_in">
            <h4>get in the know</h4>
          </div>
          <div>
            <input type="Enter email" />
          </div>
        </div>
      </div>
      <div className="bottom_footer">
        <div className="bottom">
          <div className="DeoThemes">
            <h6>© 2020 eCommerce, Made by DeoThemes.</h6>
          </div>
          <div>
            <h6>Privacy Policy Terms & Conditions</h6>
          </div>
        </div>
        <div>
          <div className="imga">
            <img src={img14} alt="ảnh" />
            <div className="img_15">
              <img src={img15} alt="ảnh" />
            </div>
            <div className="img_16">
              <img src={img16} alt="ảnh" />
            </div>
            <img src={img17} alt="ảnh" />
          </div>
        </div>
      </div>
    </div>
  );
}
