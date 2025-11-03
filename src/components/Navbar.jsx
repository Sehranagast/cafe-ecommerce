import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../store/cart'

export default function Navbar() {
    const count = useCart((s) => s.items.reduce((acc, i) => acc + i.qty, 0))

    return (
        <header className='header'>
            <div className='container nav'>
                <Link to='/' className='brand'>☕ Tiendita</Link>
                <nav className='actions'>
                    <NavLink to='/' end>Catálogo</NavLink>
                    <NavLink to='/cart' style={{ marginLeft: '.9rem' }}>
                    🛒 Carrito ({count})
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}