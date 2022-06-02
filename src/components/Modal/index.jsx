import './style.css';
import '../../style/style.css';

import { ImageOptions } from '../ImageOptions';

export function Modal({products, productSelected, setOpenModal, setProductSelected}) {

  function handleCloseBtn(e) {
    e.preventDefault();
    setOpenModal(false);
  }
  
  function handlePrevious(src){
    const index = src.split('').find(s => Number(s));
    if(index == 1) return;

    const source = products.find(prod => prod.product.includes(Number(index - 1)));
    setProductSelected([source]);
    
  }

    function handleNext(src){
      const index = src.split('').find(s => Number(s));
      if(index == 4) return;
      
      const source = products.find(prod => prod.product.includes(Number(index) + 1));
      setProductSelected([source]);
  }

  return (
    <div className="modal" onClick={handleCloseBtn}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button onClick={handleCloseBtn} className="close"></button>
      <div className="img-modal">
        <button onClick={() => handlePrevious(productSelected[0].product)} className='previous'></button>
        <img className='img-product' src={productSelected[0].product} alt="Image of Sneakers" />
        <button onClick={() => handleNext(productSelected[0].product)} className='next' ></button>
      </div>
      <div className="img-opt">
      <ImageOptions
        products={products}
        productSelected={productSelected}
        setProductSelected={setProductSelected}
      />
      </div>
      </div>
    </div>
  );
}