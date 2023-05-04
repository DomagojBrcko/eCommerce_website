import React from "react";

export default function SaleItems({ saleItem }) {
    return (
        <div>
            {saleItem.map((item) => (
                <div key={item}>{item}</div>
            ))}
        </div>
    );
}
