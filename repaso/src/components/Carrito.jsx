import { useReducer } from "react"
import confetti from "canvas-confetti"
import { useEffect } from "react"

const initialState = {
  products: [],
  cart: []
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_CART': {
      const newItem = state.products.find(product => product.id === action.payload)
      const itemInCart = state.cart.find(item => item.id === action.payload)
      
      return itemInCart ? 
      {
        ...state,
        cart: state.cart.map(item => item.id === newItem.id ? {...item, quantity: item.quantity + 1} : item)
      }
      :
      {
        ...state,
        cart: [...state.cart, {...newItem, quantity: 1}]
      }
    }

    case 'REMOVE_ONE_PRODUCT': {
      const itemToDelete = state.cart.find(item => item.id === action.payload)
      
      return itemToDelete.quantity > 1 ? 
      {
        ...state,
        cart: state.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity - 1} : item)
      }
      :
      {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      }
    }

    case 'REMOVE_ALL_PRODUCTS': {
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      }
    }

    case 'READ_STATE':
      return {
        ...state,
        products: action.payload[0],
        cart: action.payload[1]
      }

    default:
      return state
  }
}

function Products ({data, addToCart}) {
  const {id, name, price} = data
  
  return(
    <div className="product">
      <h4>{name}</h4>
      <h5>${price}</h5>
      <button className="product_btn" onClick={() => addToCart(id)}>Agregar</button>
    </div>
  )
}

function CartItem ({data, deleteFromCart}) {
  const {id, name, price, quantity} = data
  
  return (
    <div>
      <h4>{name}</h4>
      <h5>${price} x {quantity} = ${price * quantity} </h5>
      <button className="product_btn" onClick={() => deleteFromCart(id)}>Eliminar uno</button>
      <button className="product_btn" onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
    </div>
  )
}

export default function Carrito () {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addToCart = (id) => {
    dispatch({type: 'ADD_TO_CART', payload: id})
  }
  const deleteFromCart = (id, all = false) => {
    if (all){
      dispatch({type: 'REMOVE_ALL_PRODUCTS', payload: id})
    } else {
      dispatch({type: 'REMOVE_ONE_PRODUCT', payload: id})
    }
  }
  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'})
  }

  const totalPrice = () => {
    const price = state.cart.reduce((acumulador, producto) => acumulador + (producto.price * producto.quantity), 0);
    return price
  }
  const totalQuantity = () => {
    const quantity = state.cart.reduce((acumulador, producto) => acumulador + producto.quantity, 0)
    return quantity
  }

  const updateState = async () => {
    const urlProducts = 'https://my-json-server.typicode.com/santillan234/apiCart/products'
    const urlCart = 'https://my-json-server.typicode.com/santillan234/apiCart/cart'
    const resProducts = await fetch(urlProducts)
    const resCart = await fetch(urlCart)
    const newItem = await resProducts.json()
    const newItemInCart = await resCart.json()

    dispatch({type: 'READ_STATE', payload: [newItem, newItemInCart]})
  }

  useEffect(() => {
    updateState()
  }, [])

  const alerta = () => {
    if(state.cart.length > 0){
      alert("Compra Exitosa!")
      confetti()
      updateState()
    } else {
      alert("Error: el carrito debe tener al menos un producto")
    }
  }

  return(
    <>
      <h2>PRODUCTOS</h2>
      <div className="product_div">
        {state.products.map(product => <Products key={product.id} data={product} addToCart={addToCart} />)}
      </div>

      <h2>CART</h2>
      {state.cart.length == 1 && <h4>Total: {state.cart.length} Producto</h4>}
      {state.cart.length > 1 && <h4>Total: {state.cart.length} Productos</h4>}
      {totalQuantity() == 1 && <h4>Total: {totalQuantity()} Unidad</h4>}
      {totalQuantity() > 1 && <h4>Total: {totalQuantity()} Unidades</h4>}
      {totalPrice() > 0 && <h4>Total: ${totalPrice()} </h4>}
      <button style={{backgroundColor: "#4CAF50", marginRight: "10px"}} onClick={updateState}>Limpiar carrito</button>
      <button style={{backgroundColor: "#4CAF50"}} onClick={() => {
          alerta()
        }}>Comprar
      </button>

      <div className="cart" style={{
          border: state.cart.length > 0 ? '5px dashed black' : ''
        }}>
          {state.cart.map((item, index) => <CartItem key={index} data={item} deleteFromCart={deleteFromCart} />)}
      </div>
    </>
  )
}