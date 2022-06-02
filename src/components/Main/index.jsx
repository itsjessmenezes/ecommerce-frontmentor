import { useGlobal } from '../../hooks/useGlobal';
import './style.css';
import '../../style/style.css';

import product1 from '../../images/image-product-1.jpg';
import cart from '../../images/icon-cart-white.svg';
import minus from '../../images/icon-minus.svg';
import plus from '../../images/icon-plus.svg';
import { ImageOptions } from '../ImageOptions';

export function Main({
  products,
  productSelected,
  setProductSelected,
  setOpenModal,
  productsDetail
}) {
  const { counter, setCounter, setAddCart, setQuantity } = useGlobal();

  function handleCounterMinus() {
    if (counter > 0) {
      setCounter(counter => counter - 1);
    }
  }

  function handleCounterPlus() {
    if (counter >= 0) {
      setCounter(counter => counter + 1);
    }
  }

    function handleAddCart() {
    if(counter === 0) return;
    setQuantity(counter);
    setAddCart(true);
  }

  return (
    <main>
      <div className="image-side">
        <img
          src={
            !productSelected[0]
              ? productsDetail.image
              : productSelected[0].product
          }
          alt="Image of Sneakers"
          className="img-ad"
          onClick={() => setOpenModal(true)}
        />
        <ImageOptions
          products={products}
          productSelected={productSelected}
          setProductSelected={setProductSelected}
        />
      </div>
      <div className="info-side">
        <h3>SNEAKER COMPANY</h3>
        <h2>{productsDetail.title}</h2>
        <span className="description">{productsDetail.description}</span>
        <div className="price-discount">
          <span className="price">${productsDetail.price.toFixed(2)}</span>
          <span className="discount">50%</span>
        </div>
        <span className="old-price">$250.00</span>
        <div className="buttons">
          <div className="quantity">
            <img onClick={handleCounterMinus} src={minus} alt="Minus" />
            <span>{counter}</span>
            <img onClick={handleCounterPlus} src={plus} alt="Plus" />
          </div>
          <button onClick={handleAddCart} className="btn">
            <img src={cart} alt="Cart" />
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}
