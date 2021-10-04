import { useEffect } from "react"
import { useState } from "react"
import {getStoredCart} from '../../LocalStorage/LocalStorage'

const useCart = (services) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        if(services.length){
            const saveCart = getStoredCart();
            const storeCart = []
            for(const id in saveCart){
                const addedService = services.find(service => service.id === id)
                if(addedService){
                    const quantity = saveCart[id]
                    addedService.quantity = quantity;
                    storeCart.push(addedService)
                }
                
            }
            setCart(storeCart)
           }
    },[services])
    return [cart, setCart]
}
export default useCart