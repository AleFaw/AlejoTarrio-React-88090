import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'; // <--- IMPORTANTE: Importar el componente
import classes from './ItemDetail.module.css';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const handleOnAdd = (quantity) => {
        console.log('Cantidad agregada: ', quantity); //Pongo algo profe hasta que hagamos que sea funcional
    };

    return (
        <article className={classes.container}>
            <button onClick={handleBack} className={classes.backButton}>
                &#8592; Volver
            </button>

            <picture>
                <img src={img} alt={name} className={classes.image}/>
            </picture>

            <section className={classes.info}>
                <p className={classes.category}>Categoría: {category}</p>
                <h2 className={classes.title}>{name}</h2>
                <p className={classes.description}>{description}</p>
                <p className={classes.price}>${price}</p>
                
                <ItemCount 
                    initial={1} 
                    stock={stock} 
                    onAdd={handleOnAdd} 
                />
            </section>
        </article>
    )
}

export default ItemDetail;