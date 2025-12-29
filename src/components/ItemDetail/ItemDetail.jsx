import { useNavigate } from 'react-router-dom';
import classes from './ItemDetail.module.css';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
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
                
                <button style={{ 
                    padding: '12px 25px', 
                    backgroundColor: '#18293d', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px', 
                    cursor: 'pointer',
                    fontSize: '1rem',
                    alignSelf: 'start'
                }}>
                    Agregar al Carrito
                </button>
            </section>
        </article>
    )
}

export default ItemDetail;