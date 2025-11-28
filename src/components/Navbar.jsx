import logo from '../assets/logoLlave.png';

function Navbar() {
    return (
        <>
            <div style={{backgroundColor: 'rgba(24, 41, 61)', width:'100%', height: '80px', padding:'0px'}}>
                <img
                    src={logo}
                    style={{ width: '130px', marginLeft: '15px' }} // ⬅️ ¡CORRECCIÓN AQUÍ!
                    alt="Logo de llave"
                />
            </div>
        </>
    )
}

export default Navbar;