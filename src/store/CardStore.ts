import { create } from "zustand";

const initialItems: Item[] = [
    { id: "1", name: "Camisa Azul", price: 29.99 },
    { id: "2", name: "Calças Jeans", price: 49.99 },
    { id: "3", name: "Ténis Branco", price: 79.99 },
    { id: "4", name: "Casaco de Inverno", price: 119.99 },
    { id: "5", name: "Óculos de Sol", price: 19.99 },
];


type Item = {
    id: string
    name: string
    price: number
}

type CartStore = {
    availableItems: Item[],
    cart: Item[],
    addToCart: (item: Item) => void
    removeFromCart: (index: number) => void
}

export const useCartStore = create<CartStore>((set) => {
    return {
        availableItems: initialItems,
        cart: [],
        addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
        removeFromCart: (index) =>
            set((state) => ({ cart: state.cart.filter((_, idx) => idx !== index) })),
    }
})