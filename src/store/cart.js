import { create } from 'zustand'
import { persist } from 'zustand/middleware'


export const useCart = create(persist((set, get) => ({
items: [], // { id, title, price, image, qty }
add(product, qty = 1) {
set((state) => {
const found = state.items.find((i) => i.id === product.id)
if (found) {
return {
items: state.items.map((i) => i.id === product.id ? { ...i, qty: i.qty + qty } : i)
}
}
const item = { id: product.id, title: product.title, price: product.price, image: product.image, qty }
return { items: [...state.items, item] }
})
},
remove(id) { set((state) => ({ items: state.items.filter((i) => i.id !== id) })) },
setQty(id, qty) { set((state) => ({ items: state.items.map((i) => i.id === id ? { ...i, qty: Math.max(1, qty) } : i) })) },
clear() { set({ items: [] }) },
total() { return get().items.reduce((acc, i) => acc + i.price * i.qty, 0) }
}), { name: 'cart-v1' }))