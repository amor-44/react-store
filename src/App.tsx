import Navbar from "./components/layout/Navbar/Navbar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

const App = () => {
    return (
        <main>
            <Navbar />
            <Products />
            <Cart />
        </main>
    )
}

export default App;