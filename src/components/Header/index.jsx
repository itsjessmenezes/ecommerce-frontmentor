import logo from '../../images/logo.svg';
import avatar from '../../images/image-avatar.png';
import cart from '../../images/icon-cart.svg';
import {useGlobal} from '../../hooks/useGlobal';
import './style.css';
import '../../style/style.css';

export function Header() {
  const {addCart, openCart, setOpenCart, quantity} = useGlobal();

  return(
    <header>
        <nav>
          <ul>
            <img src={logo} alt="Logo" />
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="user">
          <div className="user-cart">
            {
              addCart
                ? <span className="cart-quantities">{quantity}</span>
                : ''
            }
          <img onClick={() => setOpenCart(!openCart)} src={cart} alt="Cart" className="cart-icon" />
          </div>
          <img src={avatar} alt="Avatar" className="avatar" />
        </div>
      </header>
  );
}