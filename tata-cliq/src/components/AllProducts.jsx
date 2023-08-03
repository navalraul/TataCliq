
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import './MensMulti.css'

const AllProducts = () => {

    const [isProductsExist, setIsProductsExist] = useState(false);
    const [products, setProducts] = useState();

    const router = useNavigate();

    console.log(products)

    useEffect(() => {
        const productsFromDb = JSON.parse(localStorage.getItem("Products"));
        if (productsFromDb) {
            setIsProductsExist(true);
            setProducts(productsFromDb)
        } else {
            setIsProductsExist(false)
        }
    }, [])

    const redirect=(id)=> {
        router(`/single/${id}`)
    }


    return (
        <div id='multi-main'>
            <div className='head'>
                <h3>Men's winter wear</h3>
                <p>110446 Products</p>
            </div>
            <div className='sort'>
                <div className='sort-all'>
                    <p>Sort by :</p>
                    <select>
                        <option>Popularity</option>
                        <option>Price Low to High</option>
                        <option>Price High to Low</option>
                        <option>New Arrivals</option>
                        <option>Discounts</option>
                    </select>
                    <img src='https://www.tatacliq.com/src/general/components/img/sortIcon.svg' />
                </div>
                <div className='sort-img'>
                    <img src='https://www.tatacliq.com/src/plp/components/img/list.svg' />
                </div>
            </div>
            <div className='main'>
                <div className="main-left">
                    <div className='filter'>
                        <h5>Filters</h5>
                        <p>Clear All</p>
                    </div>
                    <div className='dep'>
                        <p>Department</p>
                        <span>Men's Clothing</span>
                    </div>
                    <div className='cate'>
                        <p>Category</p>
                        <span>Casual Wear</span>
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                    <div className='same'>
                        <p>Product Type</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div className='same'>
                        <p>Brand</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div className='same'>
                        <p>Size</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div className='same'>
                        <p>Type</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div className='same'>
                        <p>Colour</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div className='same'>
                        <p>Price</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div className='same'>
                        <p>Fit</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div className='same'>
                        <p>Dicount</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div className='same'>
                        <p>Fabric Family</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div className='same'>
                        <p>Sleeve</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div className='same'>
                        <p>Collor</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div className='same'>
                        <p>Pattern</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div className='same'>
                        <p>Occasion</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div className='same'>
                        <p>All Discount</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <div className='same'>
                        <p>Availabilty</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
                <div className='main-right'>
                    {!isProductsExist ? <div>No Products</div>
                        :
                        <div className='pro' >
                            {products && products.map((pro) => (
                                <div onClick={() => router(pro.id)} className='prod' key={pro.name}>
                                    <div className='prod-img'>
                                        <img src={pro.image} />
                                    </div>
                                    <div className='prod-info'>
                                        <h5>{pro.name}</h5>
                                        <p>{pro.category}</p>
                                        <span>{pro.price}$</span>
                                        <p>3.3 <i class="fa-solid fa-star"></i></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default AllProducts;
