import { useGlobal } from '../../hooks/useGlobal';
import deleteIcon from '../../images/icon-delete.svg';
import './style.css';
import '../../style/style.css';

export function Cart({ productsDetail }) {
  const { addCart, setAddCart, counter } = useGlobal();

  return (
    <div className="cart">
      <h3>Cart</h3>
      <div className="divider"></div>
      {!addCart ? (
        <div className="empty-cart">
          <span>Your cart is empty.</span>
        </div>
      ) : (
        <div className="cart-container">
          <div className="info-cart">
            <img
              className="shoes"
              src={productsDetail.image}
              alt="Image Sneakers"
            />
            <div className="details-cart">
              <p className="details-cart-title">{productsDetail.title}</p>
              <p className="details-cart-quantity">
                <span>${productsDetail.price.toFixed(2)} x </span>
                <span>{counter} </span>
                <span className="details-cart-total">
                  ${(productsDetail.price * counter).toFixed(2)}
                </span>
              </p>
            </div>
            <img
              onClick={() => setAddCart(false)}
              src={deleteIcon}
              alt="Delete Button"
              className="delete-icon"
            />
          </div>
          <div className="checkout">
            <button className="btn">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
