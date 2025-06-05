import React, { useState, useContext } from 'react';
import ProductTableView from './ProductTableView';
import ProductCardView from './ProductCardView';
import CartProvider from './CartProvider';
import CartContext from './CartContext';
import ProductCart from './ProductCart';
import phone from './images/phone.jpg'

const ProductCatalogContent = () => {
    const [tableView, setTableView] = useState(true);
    const { cart } = useContext(CartContext);

    const productData = [
        {
            "id": "1",
            "name": "Smartphone",
            "price": 699.99,
            "available": true,
            "des": "A high-performance smartphone with ample storage and a great camera.",
            "img": require("./images/phone.jpg"),
            "inventory": 6
        },
        {
            "id": "2",
            "name": "Wireless Earbuds",
            "price": 149.99,
            "available": true,
            "des": "Compact earbuds with noise cancellation and long battery life.",
            "img": require("./images/earbuds.jpg"),
            "inventory": 5
        },
        {
            "id": "3",
            "name": "Air Purifier",
            "price": 199.99,
            "available": false,
            "des": "Removes allergens and pollutants from the air for healthier breathing.",
            "img": require("./images/airPurifier.jpg"),
            "inventory": 10
        },
        {
            "id": "4",
            "name": "Laptop",
            "price": 999.99,
            "available": true,
            "des": "Lightweight laptop with powerful performance for work and play.",
            "img": require("./images/laptop.jpg"),
            "inventory": 12
        },
        {
            "id": "5",
            "name": "Bluetooth Speaker",
            "price": 59.99,
            "available": false,
            "des": "Portable speaker with clear sound and deep bass.",
            "img": require("./images/bluetoothSpeaker.jpg"),
            "inventory": 4
        },
        {
            "id": "1",
            "name": "Smartphone",
            "price": 699.99,
            "available": true,
            "des": "A high-performance smartphone with ample storage and a great camera.",
            "img": require("./images/phone.jpg"),
            "inventory": 4
        },
        {
            "id": "2",
            "name": "Wireless Earbuds",
            "price": 149.99,
            "available": false,
            "des": "Compact earbuds with noise cancellation and long battery life.",
            "img": require("./images/earbuds.jpg"),
            "inventory": 15
        },
        {
            "id": "3",
            "name": "Air Purifier",
            "price": 199.99,
            "available": true,
            "des": "Removes allergens and pollutants from the air for healthier breathing.",
            "img": require("./images/airPurifier.jpg"),
            "inventory": 8
        },
        {
            "id": "4",
            "name": "Laptop",
            "price": 999.99,
            "available": true,
            "des": "Lightweight laptop with powerful performance for work and play.",
            "img": require("./images/laptop.jpg"),
            "inventory": 9
        },
        {
            "id": "5",
            "name": "Bluetooth Speaker",
            "price": 59.99,
            "available": true,
            "des": "Portable speaker with clear sound and deep bass.",
            "img": require("./images/bluetoothSpeaker.jpg"),
            "inventory": 4
        },
        {
            "id": "1",
            "name": "Smartphone",
            "price": 699.99,
            "available": false,
            "des": "A high-performance smartphone with ample storage and a great camera.",
            "img": require("./images/phone.jpg"),
            "inventory": 0
        },
        {
            "id": "2",
            "name": "Wireless Earbuds",
            "price": 149.99,
            "available": true,
            "des": "Compact earbuds with noise cancellation and long battery life.",
            "img": require("./images/earbuds.jpg"),
            "inventory": 11
        },
        {
            "id": "3",
            "name": "Air Purifier",
            "price": 199.99,
            "available": false,
            "des": "Removes allergens and pollutants from the air for healthier breathing.",
            "img": require("./images/airPurifier.jpg"),
            "inventory": 5
        },
        {
            "id": "4",
            "name": "Laptop",
            "price": 999.99,
            "available": true,
            "des": "Lightweight laptop with powerful performance for work and play.",
            "img": require("./images/laptop.jpg"),
            "inventory": 6
        },
        {
            "id": "5",
            "name": "Bluetooth Speaker",
            "price": 59.99,
            "available": true,
            "des": "Portable speaker with clear sound and deep bass.",
            "img": require("./images/bluetoothSpeaker.jpg"),
            "inventory": 7
        },
    ];

    const handleView = () => setTableView(!tableView);

    return (
        <div style={{ backgroundColor: "#f5f4fa", minHeight: "100vh" }}>
            <nav className='d-md-flex position-fixed z-2 w-100 justify-content-between align-items-center text-light px-4 py-3 shadow'
                style={{ background: "linear-gradient(90deg, #2d236d 0%, #3a2ba0 100%)" }}>
                <h1 className='fw-bold fs-3 m-0'>📦 Product Catalog</h1>
                <div className='d-flex gap-3'>
                    <button
                        className='btn btn-outline-light fw-semibold px-4'
                        onClick={handleView}
                    >
                        {tableView ? "🔲 Card View" : "📋 Table View"}
                    </button>
                    <button
                        className='btn btn-light text-dark fw-semibold px-4'
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        🛒 Cart ({cart.length})
                    </button>
                </div>
            </nav>

            <div className='container-fluid py-4'>
                {tableView
                    ? <ProductTableView products={productData} />
                    : <ProductCardView products={productData} />}
            </div>

            <ProductCart />
        </div>
    );
};

// Wrap with CartProvider once
const ProductCatalog = () => (
    <CartProvider>
        <ProductCatalogContent />
    </CartProvider>
);

export default ProductCatalog;

