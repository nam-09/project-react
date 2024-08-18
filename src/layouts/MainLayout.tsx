import React from "react";
import { Outlet, Link } from "react-router-dom";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useAppDispatch, useAppSelector } from "reduxx";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { toggleCart } from "../reduxx/cartReducer";
import BaseLayout from "./BaseLayout";

export default function MainLayout() {
  const { cartItems } = useAppSelector((state) => state.cart);
  const cartQuantity = cartItems.length;
  const dispatch = useAppDispatch();
  const handleOpenCart = (open: boolean) => {
    dispatch(toggleCart(open));
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <BaseLayout>
      <Grid container spacing={2}>
        <div className="navbar">
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <Item>
              <a href="http://localhost:3000/">
                <div className="logo">
                  <h1>NorthStar</h1>
                </div>
              </a>
            </Item>
          </Grid>
          <Grid item xs={0} sm={0} md={6} lg={4} xl={3}>
            <Item>
              {" "}
              <div className="nav-elements">
                <Link to="/">
                  <h1>Home</h1>
                </Link>
                <Link to="/about" className="about">
                  <h1>About</h1>
                </Link>
                <Link to="/contact">
                  <h1>Contact</h1>
                </Link>
                {/* <Link to="/product">
        <h1>Product</h1>
      </Link> */}
                {/* <Link to="/shoppingcart">
              <h1>ShoppingCart</h1>
            </Link> */}
                {/* <Link to="/checkout">
        <h1>Checkout</h1>
      </Link> */}
              </div>
            </Item>
          </Grid>
          <Grid item xs={0} sm={0} md={0} lg={0} xl={3} />
          <Grid item xs={0} sm={0} md={0} lg={4} xl={3}>
            <Item>
              <div className="search-cart">
                <PersonOutlineOutlinedIcon />
                <a
                  className="link_a"
                  href="http://localhost:3000/shoppingcart"
                  onClick={() => handleOpenCart(true)}
                >
                  <LocalMallOutlinedIcon className="inconlink_a" />
                  <p>{cartQuantity}</p>
                </a>
                <MenuOutlinedIcon />
              </div>
            </Item>
          </Grid>
        </div>
        <Outlet />
      </Grid>
    </BaseLayout>
  );
}
