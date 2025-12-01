import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer text="Bienvenido a la tienda mística" />
    </div>
  );
}

export default App;