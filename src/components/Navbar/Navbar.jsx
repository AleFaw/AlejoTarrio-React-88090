import Logo from '../../assets/logoLlave.png';
import Estilos from './Navbar.module.css';
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
    return (
        <header className={Estilos.navbar}>
            
            <div className={Estilos.brandContainer}>
                <img src={Logo} className={Estilos.logo} alt="Logo de Luz & Arcanos"/>
            </div>

            <nav className={Estilos.navLinks}>
                <a href="#">Amuletos</a>
                <a href="#">Cristales</a>
                <a href="#">Cursos</a>
                <a href="#">Lecturas</a>
                <a href="#">Sahumerios</a>
                <a href="#">Tarot</a>
                <a href="#">Velas</a>
            </nav>

            <CartWidget />
            
        </header>
    );
}

export default Navbar;