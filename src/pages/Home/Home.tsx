import React from "react";
import ProductsCardHome from "pages/ProductCart/ProductCartHome";
import productHome from "pages/Data/ProductHome/ProductHome";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HelpIcon from "@mui/icons-material/Help";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { Button } from "@mui/material";
import images from "pages/Data/ProductHome/ImagesHome";
import ImagesCartHome from "pages/ProductCart/ImagesCartHome";
import Footer from "pages/Footer";
import img from "./img_1.png";

export default function Home(this: any) {
  return (
    <div id="home">
      <div className="image">
        <img src={img} alt="ảnh" />

        <div>
          <div className="center">
            <h1>stylist picks beat the heat</h1>
          </div>
        </div>
        <div className="center_button">
          <Button>
            <p>Shop Now</p>
          </Button>
        </div>
      </div>
      <div>
        <h2>Discover NEW Arrivals</h2>
        <h5>Recently added shirts!</h5>
      </div>

      <div className="home_contenttt">
        {productHome.map((item: { id: any }) => (
          <ProductsCardHome
            img=""
            title=""
            price={0}
            quantity={0}
            item={undefined}
            key={item.id}
            {...item}
          />
        ))}
      </div>

      <div className="base">
        <div className="base_car">
          <div>
            <LocalShippingOutlinedIcon />
          </div>
          <div className="h6">
            <p>Free Shipping</p>
            <p>Free shipping on all US order or order above $100</p>
          </div>
        </div>
        <div className="base_car1">
          <div>
            <HelpIcon />
          </div>
          <div className="h6">
            <p>SUPPORT 24/7</p>
            <p>Our support team is there to help you for queries</p>
          </div>
        </div>
        <div className="base_car2">
          <div>
            <KeyboardReturnIcon />
          </div>
          <div className="h6">
            <p>30 DAYS RETURN</p>
            <p>Simply return it within 30 days for an exchange.</p>
          </div>
        </div>
        <div className="base_car3">
          <div>
            <FingerprintIcon />
          </div>
          <div className="h6">
            <p>100% PAYMENT SECURE</p>
            <p>Our payments are secured with 256 bit encryption</p>
          </div>
        </div>
      </div>
      <div className="Rectangle_36">
        <div className="rectangle">
          <div className="peace">
            <h2>peace of mind</h2>
          </div>
          <div className="peace1">
            <h4>
              A one-stop platform for all your fashion needs, hassle-free. Buy
              with a peace of mind.
            </h4>
          </div>
          <div className="button_buynow">
            <Button>
              <p>buy now</p>
            </Button>
          </div>
        </div>
        <div className="rectangle1">
          <div className="peace">
            <h2>Buy 2 Get 1 Free</h2>
          </div>
          <div className="peace1">
            <h4>
              End of season sale. Buy any 2 items of your choice and get 1 free.
            </h4>
          </div>
          <div className="button_buynow">
            <Button>
              <p>buy now</p>
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2>Top Sellers</h2>
        </div>
        <div>
          <h4>Browse our top-selling products</h4>
        </div>
      </div>
      <div
        className="home_contenttt"
        // onClick={() => handleOpenCart(true)}
        // aria-hidden="true"
      >
        {images.map((item: { id: any }) => (
          <ImagesCartHome
            img=""
            title=""
            price={0}
            quantity={0}
            item={undefined}
            key={item.id}
            {...item}
          />
        ))}
      </div>
      <div className="shopnow">
        <Button>SHOP NOW</Button>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
