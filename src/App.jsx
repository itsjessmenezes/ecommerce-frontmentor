import './style/style.css';
import {Header} from './components/Header';
import {Main} from './components/Main';
import { Modal } from './components/Modal';
import { useGlobal } from './hooks/useGlobal';

import product1 from './images/image-product-1.jpg';
import product2 from './images/image-product-2.jpg';
import product3 from './images/image-product-3.jpg';
import product4 from './images/image-product-4.jpg';
import { Cart } from './components/Cart';

const products = [
  {
    id: 0,
    product: product1
  },
  {
    id: 1,
    product: product2
  },
  {
    id: 2,
    product: product3
  },
  {
    id: 3,
    product: product4
  },
];

const productsDetail = {
  image: product1,
  title: "Fall Limited Edition Sneakers",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: 125
}

function App() {
  const {
    productSelected,
    setProductSelected,
    openModal,
    setOpenModal,
    openCart,
  } = useGlobal();


  return (
    <div>
        {
          openModal && <Modal products={products} setOpenModal={setOpenModal} productSelected={productSelected} setProductSelected={setProductSelected} />
        }
        {
          openCart && <Cart productsDetail={productsDetail} />
        }
        <div className="container">
        <Header />
        <div className="divider"></div>
      <Main
        products={products}
        productSelected={productSelected}
        setProductSelected={setProductSelected}
        setOpenModal={setOpenModal}
        productsDetail={productsDetail}
      />
        </div>
      </div>
  )
}

export default App
