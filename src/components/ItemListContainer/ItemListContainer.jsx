function ItemListContainer({ text }) {
    return (
        <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#f4f4f4', minHeight: '80vh' }}>
            <h2 style={{ color: '#18293d', fontSize: '2rem' }}>
                {text}
            </h2>
        </div>
    );
}

export default ItemListContainer;