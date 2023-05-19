import React from "react";

function Category() {
  return (
    <div className="option">
      <div className="block">
        <h3>Categories</h3>
        <ul>
          <li className="item">
            <div>
              <input
                type="checkbox"
                id="catCheckbox1"
                name="checkbox"
                value="1"
              />
              <label for="catCheckbox1">Clothing (9 items)</label>
            </div>
          </li>
          <li className="item">
            <div>
              <input
                type="checkbox"
                id="catCheckbox2"
                name="checkbox"
                value="1"
              />
              <label for="catCheckbox2">Diamond Jeweller (8 items)</label>
            </div>
          </li>
          <li className="item">
            <div>
              <input
                type="checkbox"
                id="catCheckbox3"
                name="checkbox"
                value="1"
              />
              <label for="catCheckbox3">Fashion (9 items)</label>
            </div>
          </li>
          <li className="item">
            <div>
              <input
                type="checkbox"
                id="catCheckbox4"
                name="checkbox"
                value="1"
              />
              <label for="catCheckbox4">Featured (13 items)</label>
            </div>
          </li>
        </ul>
      </div>
      <div className="block">
        <h3>Shop By Vendors</h3>
        <ul>
          <li className="item">
            <div>
              <input
                type="checkbox"
                id="vendCheckbox1"
                name="checkbox"
                value="1"
              />
              <label for="vendCheckbox1">Alizey</label>
            </div>
          </li>
          <li className="item">
            <div>
              <input
                type="checkbox"
                id="vendCheckbox2"
                name="checkbox"
                value="1"
              />
              <label for="vendCheckbox2">Golda</label>
            </div>
          </li>
          <li className="item">
            <div>
              <input
                type="checkbox"
                id="vendCheckbox3"
                name="checkbox"
                value="1"
              />
              <label for="vendCheckbox3">Handa</label>
            </div>
          </li>
          <li className="item">
            <div>
              <input
                type="checkbox"
                id="vendCheckbox4"
                name="checkbox"
                value="1"
              />
              <label for="vendCheckbox4">T90</label>
            </div>
          </li>
          <li className="item">
            <div>
              <input
                type="checkbox"
                id="vendCheckbox5"
                name="checkbox"
                value="1"
              />
              <label for="vendCheckbox5">Toyoto</label>
            </div>
          </li>
        </ul>
      </div>
      <div className="block">
        <h3>prices</h3>
        <ul>
          <li className="item">
            <div>
              <input
                type="checkbox"
                id="priceCheckbox1"
                name="checkbox"
                value="1"
              />
              <label for="priceCheckbox1">0-100</label>
            </div>
          </li>
          <li className="item">
            <div>
              <input
                type="checkbox"
                id="priceCheckbox2"
                name="checkbox"
                value="1"
              />
              <label for="priceCheckbox2">0-99</label>
            </div>
          </li>
          <li className="item">
            <div>
              <input
                type="checkbox"
                id="priceCheckbox3"
                name="checkbox"
                value="1"
              />
              <label for="priceCheckbox3">100-150</label>
            </div>
          </li>
          <li className="item">
            <div>
              <input
                type="checkbox"
                id="priceCheckbox4"
                name="checkbox"
                value="1"
              />
              <label for="priceCheckbox4">200-300</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Category;
