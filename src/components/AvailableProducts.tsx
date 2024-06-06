import format from '../Utils/Formatter'
import { useCartStore } from '../store/CardStore'
import "./Style.css"

export const AvailableProducts = () => {
    const [items, add] = useCartStore(state => [
        state.availableItems,
        state.addToCart
    ])

    return (
        <div className='internalContainer'>
            <h2 className='title'>Choose a product</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id} className='available'>
                        <div className='texts'>
                            <span>{item.name}</span>
                            <span>{format(item.price)}</span>
                        </div>
                        <button onClick={() => { add(item) }}>                           +                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}


