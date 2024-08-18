import { Button, ButtonGroup } from "@mui/material";
import { useEffect } from "react";
import Footer from "pages/Footer";
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

  // const handleCloseCart = (close: boolean) => {
  //   dispatch(toggleCart(close));
  // };
  // looco ko cập nhạp dữ liệu muốn hiển thị thì pải dípatch ueff vs dipatch cai gì //
  // tìm luồng để reduxx để cappj  nhập giao diện //
  // pải xem luồng reduxx chạy ở đâu để lấy cái uffefec gọi nó ra//
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
  // return (
  //   <>
  //     <div id="shoppingcart">
  //       <div className="shopping_span">
  //         <span>
  //           <p>home /</p>
  //           <p className="shop_p">shopping cart</p>
  //         </span>
  //       </div>
  //       <div className="container_shoppingcart">
  //         <div className="header_shopp">
  //           <div className="product_1">
  //             <div>
  //               <h6>Product</h6>
  //             </div>
  //             <div>
  //               <p>Plain White Shirt</p>
  //             </div>
  //           </div>
  //           <div className="price_1">
  //             <div>
  //               <h6>Price</h6>
  //             </div>
  //             <div>
  //               <p>$59.00</p>
  //             </div>
  //           </div>
  //           <div className="quantity_1">
  //             <div>
  //               <h6>Quantity</h6>
  //             </div>
  //             <div>
  //               <p>1</p>
  //             </div>
  //           </div>
  //           <div className="total_1">
  //             <div>
  //               <h6>Total</h6>
  //             </div>
  //             <div>
  //               <p>$59.00</p>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="carttotals_h2">
  //           <h2>Cart Totals</h2>
  //         </div>
  //         <div className="cart_totals">
  //           <div className="subtotal_1">
  //             <div>
  //               <h5>Subtotal</h5>
  //             </div>
  //             <div>
  //               <p>$59.00</p>
  //             </div>
  //           </div>
  //           <div className="shipping_free">
  //             <div>
  //               <h5>Shipping Free</h5>
  //             </div>
  //             <div>
  //               <p>FREE!!!</p>
  //             </div>
  //           </div>
  //           <div className="carttotals_total">
  //             <div>
  //               <h5>Total</h5>
  //             </div>
  //             <div>
  //               <p>$59.00</p>
  //             </div>
  //           </div>
  //           <div className="carttotals_button">
  //             <ButtonGroup
  //               disableElevation
  //               variant="contained"
  //               aria-label="Disabled elevation buttons"
  //             >
  //               <Button className="cart_proceed">Proceed to Checkout</Button>
  //             </ButtonGroup>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div>
  //       <Footer />
  //     </div>
  //   </>
  // );
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isCartOpen && (
        <div id="ShoppingCart">
          <div className="cart_content">
            <div className="cart_head">
              <h2>
                Cart <small>({cartQuantity})</small>
              </h2>
              {/* <div title="Close" className="close_btn">
                <Button onClick={() => handleCloseCart(false)}>X</Button>
              </div> */}
            </div>
            <div className="Line_cart">
              <div className="Cart_Product">
                <h5>Product</h5>
              </div>
              <div className="Cart_Price">
                <h5>Price</h5>
              </div>
              <div className="Cart_Quantity">
                <h5>Quantity</h5>
              </div>
              <div className="Cart_total">
                <h5>total</h5>
              </div>
            </div>
            <div>
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
                          <div
                            title="Remove Item"
                            className="cart_items_delete"
                            onClick={() => handleRemove(id)}
                            aria-hidden="true"
                          >
                            <Button>X</Button>
                          </div>
                          <div className="container_cart">
                            <figure className="cart_items_img">
                              <img src={img} alt="product-img" />
                            </figure>
                          </div>

                          <div className="Cart">
                            <div className="cart_items_info">
                              <h2>{title}</h2>
                            </div>
                            <div>
                              <h3 className="price">
                                $ {itemTotal.toLocaleString()}
                              </h3>
                            </div>
                            <div className="cart_items_quantity">
                              <div>
                                <Button onClick={() => handleDecrement(id)}>
                                  -
                                </Button>
                                <Button>{quantity}</Button>
                                <Button onClick={() => handleIncrement(id)}>
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
                        </div>
                      );
                    },
                  )
                )}
              </div>
            </div>
            <div className="CartTotals_container">
              <div className="carttotals_h2">
                <h2>Cart Totals</h2>
              </div>
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
                  <a href="http://localhost:3000/checkout">
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
            {/* <div className="cart_foot">
              <Button
                type="button"
                className="checkout_btn"S
                disabled={cartQuantity === 0}
              >
                Checkout
              </Button>
            </div> */}
          </div>
        </div>
      )}
      <div className="Footer_total">
        <Footer />
      </div>
    </>
  );
}
