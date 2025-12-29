import { useState } from 'react';
import classes from './ItemCount.module.css';

const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className={classes.counter}>
            <div className={classes.controls}>
                <button className={classes.button} onClick={decrement} disabled={count <= 1}>
                    -
                </button>
                <h4 className={classes.number}>{count}</h4>
                <button className={classes.button} onClick={increment} disabled={count >= stock}>
                    +
                </button>
            </div>
            
            <button 
                className={classes.addButton} 
                onClick={() => onAdd(count)} 
                disabled={!stock}
            >
                Agregar al Carrito
            </button>
        </div>
    );
};

export default ItemCount;