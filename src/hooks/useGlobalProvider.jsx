import { useState } from "react";
import product1 from '../images/image-product-1.jpg';

export default function useGlobalProvider() {
    const [productSelected, setProductSelected] = useState([{id: 0, product: product1}]);
    const [openModal, setOpenModal] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [counter, setCounter] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [addCart, setAddCart] = useState(false);

    return {
      productSelected,
      setProductSelected,
      openModal,
      setOpenModal,
      openCart,
      setOpenCart,
      counter,
      setCounter,
      quantity,
      setQuantity,
      addCart,
      setAddCart
    };
}