import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Catalog() {
    return (
        <main className='container' style={{ paddingTop: '1.1rem' }}>
            <h1 style={{ marginBottom: '.6rem' }}>Catálogo</h1>
            <div className='grid cols-3'>
                {products.map((p) => <ProductCard key={p.id} p={p} />)}
            </div>
            <footer className='footer'>© {new Date().getFullYear()} Tiendita - Demo</footer>
        </main>
    )
}