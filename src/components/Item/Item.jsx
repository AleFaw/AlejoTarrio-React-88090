import { Link } from 'react-router-dom';
import classes from './Item.module.css';

const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className={classes.card}>
            <header className={classes.header}>
                <h2 className={classes.title}>{name}</h2>
            </header>
            <picture className={classes.imgContainer}>
                <img src={img} alt={name} className={classes.image}/>
            </picture>
            <section className={classes.info}>
                <span className={classes.price}>${price}</span>
                <p>Stock disponible: {stock}</p>
            </section>
            <footer>
                <Link to={`/item/${id}`} className={classes.button}>Ver detalle</Link>
            </footer>
        </article>
    )
}
export default Item