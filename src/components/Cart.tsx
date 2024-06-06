import format from '../Utils/Formatter'
import { useCartStore } from '../store/CardStore'
import "./Style.css"
import { Total } from './Total'

export const Cart = () => {
    const [items, del] = useCartStore(state => [
        state.cart,
        state.removeFromCart
    ])

    return (
        <div className='internalContainer'>
            <h2 className='title'>Cart a product</h2>
            {items.length > 0 && (
                <>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index} className='cart'>
                                <div className='texts'>
                                    <span>{item.name}</span>
                                    <span>{format(item.price)}</span>
                                </div>
                                <button onClick={() => { del(index) }}> - </button>
                            </li>
                        ))}
                    </ul>
                    <Total />
                </>
            )}
        </div>
    )
}


