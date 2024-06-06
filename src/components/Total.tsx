import format from '../Utils/Formatter'
import { useCartStore } from '../store/CardStore'
import "./Style.css"

export const Total = () => {
    const items = useCartStore(state => state.cart)

    const sum = items.reduce((acc, item) => acc + item.price, 0)

    return (
        <h2 className='total'>
            <div className='total'>
                <span>Total </span>
                <span>{format(sum)}</span>
            </div>
        </h2>
    )
}


