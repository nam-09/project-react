import Footer from "pages/Footer";
import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Button } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import imgg from "pages/Single_Product/img_1.1.png";

export default function Product() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div id="product">
        <div className="container_product">
          <div className="imgga">
            <img src={imgg} alt="" />
          </div>
          <div className="plain">
            <div className="shop_women">
              <span>
                <p>home / shop / women/</p>
                <p className="p"> shop</p>
              </span>
            </div>
            <div className="plain_h3">
              <h3>Plain White Shirt</h3>
            </div>
            <div className="stack">
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </Stack>
            </div>
            <div className="price">
              <span className="price_1">
                <p>$69.00</p>
              </span>
              <span className="price_2">
                <p>$59.00</p>
              </span>
            </div>
            <div className="classic_h6">
              <h6>
                A classic t-shirt never goes out of style. This is our most
                premium collection of shirt. This plain white shirt is made up
                of pure cotton and has a premium finish.
              </h6>
            </div>
            <div className="select">
              <FormControl sx={{ m: 1, minWidth: 210 }} size="small">
                <InputLabel id="demo-select-small-label">Size</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>M</MenuItem>
                  <MenuItem value={20}>L</MenuItem>
                  <MenuItem value={30}>XL</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
              >
                <Button>ADD TO CART</Button>
              </ButtonGroup>
            </div>
            <div className="category">
              <h5>
                Category: Women, Polo, Casual <br />
                Tags: Modern, Design, cotton
              </h5>
            </div>
            <div className="incon">
              <AlternateEmailIcon />
              <FacebookIcon />
              <GoogleIcon />
              <TwitterIcon />
              <LinkedInIcon />
            </div>
          </div>
        </div>
        <div className="description">
          <div className="description_h4">
            <h4>Description</h4>
          </div>
          <div className="reviews_h4">
            <h4>Reviews(0)</h4>
          </div>
        </div>
        <div className="span_1">
          <span>
            <p>
              A key objective is engaging digital marketing customers and
              allowing them to interact with the brand through servicing and
              delivery of digital media. Information is easy to access at a fast
              rate through the use of digital communications. Users with access
              to the Internet can use many digital mediums, such as Facebook,
              YouTube, Forums, and Email etc. Through Digital communications it
              creates a Multi-communication channel where information can be
              quickly exchanged around the world by anyone without any regard to
              whom they are.[28] Social segregation plays no part through social
              mediums due to lack of face to face communication and information
              being wide spread instead to a selective audience.{" "}
            </p>
          </span>
        </div>
      </div>
      <div>
        <Footer />.
      </div>
    </>
  );
}
