import React from 'react';
import { Link } from 'react-router-dom';
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from '../../dummyData';

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">

                    <button className="productAddButton">Create</button>

                </Link>

            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.unsplash.com/photo-1607203391514-b001be773a22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                            alt=""
                            className="productInfoImg"
                        />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfokey">id</span>
                            <span className="productInfoValue">123</span>

                        </div>

                        <div className="productInfoItem">
                            <span className="productInfokey">Sales</span>
                            <span className="productInfoValue">$123</span>

                        </div>

                        <div className="productInfoItem">
                            <span className="productInfokey">active</span>
                            <span className="productInfoValue">yes</span>

                        </div>


                        <div className="productInfoItem">
                            <span className="productInfokey">in stock:</span>
                            <span className="productInfoValue">no</span>

                        </div>
                    </div>
                </div>

            </div>
            <div className="productBottom"></div>
            
        </div>
    )
}
