import React from "react";
import ProductsCardHome from "pages/ProductCart/ProductCartHome";
import productHome from "pages/Data/ProductHome/ProductHome";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HelpIcon from "@mui/icons-material/Help";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Footer from "pages/Footer";
// import { useAppSelector } from "reduxx/index";
// import { toggleCart } from "reduxx/cartReducer";
import { Button } from "@mui/material";
import images from "pages/Data/ProductHome/ImagesHome";
import ImagesCartHome from "pages/ProductCart/ImagesCartHome";
import img from "./img_1.png";

export default function Home(this: any) {
  // const { cartItems } = useAppSelector((state) => state.cart);
  // const dispatch = useAppDispatch();
  // const cartQuantity = cartItems.length;
  // const handleOpenCart = (open: boolean) => {
  //   dispatch(toggleCart(open));
  // };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div id="home">
      <div className="image">
        <Grid xs={12}>
          <Item>
            <img src={img} alt="ảnh" />
          </Item>
        </Grid>
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
      {/* <div className="img">
        <div className="img1">
          <img src={img1} alt="ảnh" />
          <h4>Carson Shoulder</h4>
          <p>$29.00</p>
        </div>
        <div className="img2">
          <img src={img2} alt="ảnh" />
          <h4>Denim Jacket </h4>
          <p>$69.00</p>
        </div>
        <div className="img3">
          <img src={img3} alt="ảnh" />
          <h4>Black Polo Shirt</h4>
          <p>$49.00</p>
        </div>
        <div className="img4">
          {" "}
          <img src={img4} alt="ảnh" />
          <h4>Blue Sweatshirt</h4>
          <p>$79.00</p>
        </div>
        <div className="img5">
          <img src={img5} alt="ảnh" />
          <h4>Blue Plain Shirt</h4>
          <p>$49.00</p>
        </div>
        <div className="img6">
          <img src={img6} alt="ảnh" />
          <h4>Dark Blue Shirt</h4>
          <p>$89.00</p>
        </div>
        <div className="img7">
          <img src={img7} alt="ảnh" />
          <h4>Outcast T Shirt</h4>
          <p>$19.00</p>
        </div>
        <div className="img8">
          <img src={img8} alt="ảnh" />
          <h4>Polo Plain Shirt</h4>
          <p>$29.00</p>
        </div>
      </div> */}
      <div
        className="home_contenttt"
        // onClick={() => handleOpenCart(true)}
        // aria-hidden="true"
      >
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
      <div>
        {/* <div className="img">
          <div className="img10">
            <img src={img9} alt="ảnh" />
            <h4>Carson Shoulder</h4>
            <p>$49.00</p>
          </div>
          <div className="img11">
            <img src={img10} alt="ảnh" />
            <h4>Red Shirt</h4>
            <p>$69.00</p>
          </div>
          <div className="img12">
            <img src={img11} alt="ảnh" />
            <h4>Polo White Shirt</h4>
            <p>$29.00</p>
          </div>
          <div className="img13">
            <img src={img12} alt="ảnh" />
            <h4>Pink Casual Shirt</h4>
            <p>$39.00</p>
          </div>
        </div> */}
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
