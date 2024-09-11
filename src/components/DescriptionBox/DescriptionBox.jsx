import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade" >Review (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerce website is an online platform that facilitate buying and selling of products or services over the internet serves as a virtual marketplace where business and individual showcase their products, interact with customers, and conductors transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their conveniant accessiblity, and the global reach they offer.</p>
                <p>
                    E-commerce website typically display products or service a detailed descriptions, images, prices, and any available variety (e.g, sizes, colors). Each products usually has its own dedication with relevant information.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox