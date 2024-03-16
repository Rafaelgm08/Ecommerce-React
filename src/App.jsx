import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ItemListContainer } from "./components/ItemListContainer"
import { Navbar } from "./components/Navbar"
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import { Cart } from "./components/Cart"
import { CartContextProvider } from "./context/CartContext"



export const App = () => {
  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </>
  )
}


export default App
