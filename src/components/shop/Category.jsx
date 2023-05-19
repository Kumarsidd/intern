import React from "react";
import Block from "./Block.jsx";
import img1 from "../../images/collection_side.png.png";

function Category() {
  return (
    <div className="option">
      <Block
        title="Categories"
        type="catCheckbox"
        list={[
          "Clothing (9 items)",
          "Diamond Jeweller (8 items)",
          "Fashion (9 items)",
          "Featured (13 items)",
        ]}
      />

      <Block
        title="Shop By Vendors"
        type="vendCheckbox"
        list={["Alizey", "Golda", "Handa", "T90", "Toyoto"]}
      />

      <Block
        title="prices"
        type="priceCheckbox"
        list={["0-100", "0-99", "100-150", "200-300"]}
      />

      <div className="optionImg">
        <img src={img1} alt="img" />
      </div>
    </div>
  );
}

export default Category;
