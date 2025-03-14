import { useState, useEffect } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch('api/products');
            const products = await response.json();
            setProducts(products);
        };

        fetchProduct();
    }, []);

    return (
        <div>
            <h1>Daftar Produk</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))};
            </ul>
        </div>
    );
};

export default ProductList;