import { BiCart } from "react-icons/bi";
import styles from './CartWidget.module.css';

function CartWidget() {
    return (
        <div className={styles.container}>
            <BiCart className={styles.icon} />
            <span className={styles.bubble}> 2 </span>
        </div>
    );
}

export default CartWidget;