import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import classes from './ItemDetailContainer.module.css';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
        getProductById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [itemId]);

    return (
        <div className={classes.container}>
            {loading ? (
                <p className={classes.loading}>Cargando detalle...</p>
            ) : (
                <ItemDetail {...product} />
            )}
        </div>
    )
}

export default ItemDetailContainer;