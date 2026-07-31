import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ui/ProductCard";

function Products() {
    const {products, loading, error} = useProducts();

        if (loading){
            return <div>Loading...</div>
        }
        if(error){
            return <div>Error: {error.message}</div>
        }

   return (
    <div>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />     
        ))}
    </div>
   )
}

export default Products;