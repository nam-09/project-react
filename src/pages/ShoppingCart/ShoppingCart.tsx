/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, ButtonGroup, Grid } from "@mui/material";
import { useEffect } from "react";
import Footer from "pages/Footer";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  // toggleCart,
  removeItem,
  incrementItem,
  decrementItem,
} from "../../reduxx/cartReducer";
import { useAppDispatch, useAppSelector } from "../../reduxx/index";

export default function ShoppingCart() {
  const { isCartOpen, cartItems } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();
  const handleRemove = (itemId: number) => {
    dispatch(removeItem(itemId));
  };

  const handleIncrement = (itemId: number) => {
    dispatch(incrementItem(itemId));
  };

  const handleDecrement = (itemId: number) => {
    dispatch(decrementItem(itemId));
  };
  useEffect(() => {
    const docBody = document.body;
    if (isCartOpen) {
      docBody.classList.add("overflow_hide");
    } else {
      docBody.classList.remove("overflow_hide");
    }
  }, [isCartOpen]);

  const cartQuantity = cartItems.length;

  const cartTotal = cartItems
    .map(
      (item: { price: number; quantity: number }) => item.price * item.quantity,
    )
    .reduce((prevValue: any, currValue: any) => prevValue + currValue, 0);
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <div>
        {isCartOpen && (
          <div id="ShoppingCart">
            <div className="cart_content">
              <div className="cart_head">
                <h2>
                  Cart <small>({cartQuantity})</small>
                </h2>
              </div>
              <div className="Line_cart">
                <Grid container spacing={2} columns={12}>
                  <Grid xs={3} md={3} xl={3}>
                    <Item>
                      <div className="Cart_Product">
                        <h5>Product</h5>
                      </div>
                    </Item>
                  </Grid>
                  <Grid xs={3} md={3} xl={3}>
                    <Item>
                      <div className="Cart_Price">
                        <h5>Price</h5>
                      </div>
                    </Item>
                  </Grid>
                  <Grid xs={3} md={3} xl={3}>
                    <Item>
                      <div className="Cart_Quantity">
                        <h5>Quantity</h5>
                      </div>
                    </Item>
                  </Grid>

                  <Grid xs={3} md={3} xl={3}>
                    <Item>
                      <div className="Cart_total">
                        <h5>total</h5>
                      </div>
                    </Item>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid container spacing={2} columns={12}>
                  <div className="cart_body">
                    {cartQuantity === 0 ? (
                      <h2>Cart is empty</h2>
                    ) : (
                      cartItems.map(
                        (item: {
                          id: number;
                          img: any;
                          title: string;
                          price: number;
                          quantity: number;
                        }) => {
                          const { id, img, title, price, quantity } = item;
                          const itemTotal = price * quantity;

                          return (
                            <div className="cart_items" key={id}>
                              <Grid container spacing={2} columns={12}>
                                <Grid item xs={1} md={1} xl={1}>
                                  <Item>
                                    <div
                                      title="Remove Item"
                                      className="cart_items_delete"
                                      onClick={() => handleRemove(id)}
                                      aria-hidden="true"
                                    >
                                      <Button>X</Button>
                                    </div>
                                  </Item>
                                </Grid>
                                <Grid item xs={1} md={1} xl={1}>
                                  <Item>
                                    <div className="container_cart">
                                      <figure className="cart_items_img">
                                        <img src={img} alt="product-img" />
                                      </figure>
                                    </div>
                                  </Item>
                                </Grid>

                                <Grid item xs={10} md={10} xl={10}>
                                  <Item>
                                    {" "}
                                    <div className="Cart">
                                      <div className="cart_items_info">
                                        <h2>{title}</h2>
                                      </div>
                                      <div className="price_info_h3">
                                        <h3 className="price">
                                          $ {itemTotal.toLocaleString()}
                                        </h3>
                                      </div>
                                      <div className="cart_items_quantity">
                                        <div className="carrrt">
                                          <Button
                                            onClick={() => handleDecrement(id)}
                                          >
                                            -
                                          </Button>
                                          <Button>{quantity}</Button>
                                          <Button
                                            onClick={() => handleIncrement(id)}
                                          >
                                            +
                                          </Button>
                                        </div>
                                      </div>
                                      <div>
                                        <h3 className="price_2">
                                          $ {itemTotal.toLocaleString()}
                                        </h3>
                                      </div>
                                    </div>
                                  </Item>
                                </Grid>
                              </Grid>
                            </div>
                          );
                        },
                      )
                    )}
                  </div>
                </Grid>
              </div>
              <div className="CartTotals_container">
                <Grid container spacing={2} columns={12}>
                  <Grid xs={2} md={2} xl={2}>
                    <Item>
                      <div className="carttotals_h2">
                        <h2>Cart Totals</h2>
                      </div>
                    </Item>
                  </Grid>
                </Grid>
                <div>
                  <div className="cart_totals">
                    <div>
                      <div className="carttotals_subtotal">
                        <div>
                          <h5>Subtotal</h5>
                          <h1>{}</h1>
                        </div>
                        <div className="carttotals_subtotal_b">
                          <h3>
                            <b>$ {cartTotal.toLocaleString()}</b>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="shipping_free">
                      <div>
                        <h5>Shipping Free</h5>
                      </div>

                      <div className="shipping_p">
                        <p>FREE!!!</p>
                      </div>
                    </div>
                    <div className="carttotals_total">
                      <div>
                        <h5>Total</h5>
                      </div>

                      <div className="carttotals_b">
                        <b>$ {cartTotal.toLocaleString()}</b>
                      </div>
                    </div>
                    <div className="carttotals_button">
                      <a href="#">
                        <ButtonGroup
                          disableElevation
                          variant="contained"
                          aria-label="Disabled elevation buttons"
                        >
                          <Button className="cart_proceed">
                            Proceed to Checkout
                          </Button>
                        </ButtonGroup>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="ShoppingCart_Footer">
        <Footer />
      </div>
    </div>
  );
}
