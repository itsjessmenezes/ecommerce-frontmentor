import './style.css';
import '../../style/style.css';

import product1 from '../../images/image-product-1.jpg';

export function ImageOptions({ products, productSelected, setProductSelected }) {
  
  function handleClickImage(src) {
    console.log('click')
    const product = products.filter(prodSrc => prodSrc.product === src);
    setProductSelected(product);
  }

  return (
    <div className="image-options">
      {products.map(product => (
        <img
          key={product.id}
          className={
            productSelected[0].product === product.product.includes(product1)
              ? 'product-selected'
              : productSelected[0].product === product.product
              ? 'product-selected'
              : ''
          }
          src={product.product}
          alt="Image of Sneakers"
          onClick={() => handleClickImage(product.product)}
        />
      ))}
    </div>
  );
}
