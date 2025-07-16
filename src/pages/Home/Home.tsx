import React from 'react';
import Header from "../../components/Header/Header";
import Carousel from '../../components/Carousel/Carousel';
import ProductGrid from '../../components/ProductGrid/ProductGrid';

export default function Home() {
    return (
        <>
            <Header/>
            <Carousel/>
            <ProductGrid/>
        </>
    )
}