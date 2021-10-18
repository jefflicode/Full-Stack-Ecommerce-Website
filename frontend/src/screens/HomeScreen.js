import React, { useState, useEffect } from 'react'
// using useEffect to make request to the backend
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

// originally storing json file in frontend, removed since we want to fetch data from backend
// import products from '../products'

const HomeScreen = () => {
    const [products, setProducts] = useState([])

    // as soon as the screen loads, whatever is inside is useEffect will get fired off right away
    // that's when we should make request to the backend and get the products data
    // if you would put console.log('hello') in it, you will it hello gets printed on the console
    // as soon as the web page (the component) loads
    useEffect(() => {
        // console.log('hello')
        const fetchProducts = async () => {
            /* We set up a proxy in the json file to connect to back end and avoid cors error */
            const { data } = await axios.get('/api/products') 

            setProducts(data)
        }

        fetchProducts()
    }, [] )

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
