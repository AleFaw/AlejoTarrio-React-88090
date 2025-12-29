import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import classes from './ItemListContainer.module.css';

function ItemListContainer({ text }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        const asyncFunc = categoryId ? getProductsByCategory : getProducts;

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [categoryId]);

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>
                {text} {categoryId && `: ${categoryId}`}
            </h2>
            
            {loading ? (
                <p className={classes.loading}>Cargando productos...</p> 
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
}

export default ItemListContainer;