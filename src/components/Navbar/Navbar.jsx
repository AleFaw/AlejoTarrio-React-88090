import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/logoLlave.png';
import Estilos from './Navbar.module.css';
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
    return (
        <header className={Estilos.navbar}>
            <Link to='/' className={Estilos.brandContainer}>
                <img src={Logo} className={Estilos.logo} alt="Logo de Luz & Arcanos"/>
            </Link>

            <nav className={Estilos.navLinks}>
                <NavLink to='/category/amuletos' className={({isActive}) => isActive ? Estilos.activeOption : Estilos.option}>Amuletos</NavLink>
                <NavLink to='/category/cristales' className={({isActive}) => isActive ? Estilos.activeOption : Estilos.option}>Cristales</NavLink>
                <NavLink to='/category/tarot' className={({isActive}) => isActive ? Estilos.activeOption : Estilos.option}>Tarot</NavLink>
                <NavLink to='/category/velas' className={({isActive}) => isActive ? Estilos.activeOption : Estilos.option}>Velas</NavLink>
            </nav>

            <CartWidget />
        </header>
    );
}

export default Navbar;