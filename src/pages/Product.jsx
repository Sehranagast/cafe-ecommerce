import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../store/cart'
import { formatARS } from '../utils/currency'

export default function Product() {
    const { id } = useParams()
    const add = useCart((s) => s.add)
    const p = products.find((x) => x.id === id)

    if (!p) return <main className='container'><p>Producto no encontrado</p></main> 

    return (
        <main className='container' style={{ paddingTop: '1.1rem' }}>
            <div className='grid' style={{ gridTemplateColumns: '1fr', gap: '1,2rem'}}>
            <img src={p.image} alt={p.title} style={{ width: '100%', maxHeight: 420, objectFit: 'cover', borderRadius: 14 }} />
<div className="card">
<h1>{p.title}</h1>
<p style={{ color: 'var(--muted)' }}>{p.description}</p>
<p><strong>{formatARS(p.price)}</strong></p>
<button className="btn" onClick={() => add(p, 1)}>Agregar al carrito</button>
</div>
</div>
</main>
)
}