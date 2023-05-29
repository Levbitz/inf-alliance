import React, { useState } from "react";

import "./BottomTabs.css";
import Automative from "../MarketingTabs/Automative/Automative";
import Mdeical from "../MarketingTabs/Medical/Mdeical";

const BottomTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  const AgricTab = () => {
    // update the state to tab2
    setActiveTab("tab3");
  };
  const FoodTab = () => {
    // update the state to tab2
    setActiveTab("tab4");
  };
  const WaterTab = () => {
    // update the state to tab2
    setActiveTab("tab5");
  };
  const SolarTab = () => {
    // update the state to tab2
    setActiveTab("tab6");
  };
  return (
    <div className="levbitz_container hide-on-med-and-down">

    <h4>Market-specific Solutions</h4>
      <div className="Tabs">
        <ul className="tab_header row">
        
          <li
            className={activeTab === "tab1" ? "active" : "col l2"}
            onClick={handleTab1}
          >
          AUTOMOTIVE AFTERMARKET SUPPLIES
          </li>
          <li
            className={activeTab === "tab2" ? "active" : ""}
            onClick={handleTab2}
          >
          MEDICAL SUPPLIES
          </li>
          <li
            className={activeTab === "tab3" ? "active" : ""}
            onClick={AgricTab}
          >
          TECHNOLOGY SUPPLIES
          </li>
          <li
            className={activeTab === "tab4" ? "active" : ""}
            onClick={FoodTab}
          >
          FOOD & BEVERAGE DISTRIBUTIONS
          </li>
          <li
            className={activeTab === "tab5" ? "active" : ""}
            onClick={WaterTab}
          >
          WATER & SANITATION SERVICES
          </li>
          <li
            className={activeTab === "tab6" ? "active" : ""}
            onClick={SolarTab}
          >
          SOLAR
          </li>
        </ul>

        <div className="outlet">
          {
            // render the appropriate tab based on the state
            activeTab === "tab1" ? (
              <Automative/>
            ) : activeTab === "tab2" ? (
              <Mdeical/>
            ) : (
              <Agriculture />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default BottomTabs;

const FirstTab = () => {
  return (
    <div className="FirstTab">
      <div className="levbitz_container">
        <div className="row">
          <SingleColTab
            title={"car"}
            dbCategory={"vehicles"}
            dbSubCategory={"cars"}
          />

          <SingleColTab
            dbCategory={"vehicles"}
            dbSubCategory={"trucks"}
            title={"Trucks"}
          />
          <SingleColTab
            dbCategory={"vehicles"}
            title={"Vans & Taxis"}
            dbSubCategory={"vans_and_taxis"}
          />
          <SingleColTab
            dbCategory={"vehicles"}
            title={"Pickups"}
            dbSubCategory={"pickups"}
          />
          <SingleColTab
            dbCategory={"vehicles"}
            title={"Tractors"}
            dbSubCategory={"tractors"}
          />
          <SingleColTab
            dbCategory={"vehicle_parts_and_accessories"}
            dbSubCategory={"car_parts"}
            title={"Vehicle Parts & Accessories"}
          />
        </div>
      </div>
    </div>
  );
};

const Properties = () => {
  return (
    <div className="Comments">
      <div className="levbitz_container">
        <div className="row">
          <SingleColTab
            title={"Houses For Sale"}
            dbCategory={"properties"}
            dbSubCategory={"houses_for_sale"}
          />

          <SingleColTab
            dbCategory={"vehicles"}
            dbSubCategory={"trucks"}
            title={"Houses For Rent"}
          />
          <SingleColTab
            dbCategory={"vehicles"}
            title={"Land And Plots For Sale"}
            dbSubCategory={"vans_and_taxis"}
          />
          <SingleColTab
            dbCategory={"vehicles"}
            title={"Apartments For Sale"}
            dbSubCategory={"pickups"}
          />
          <SingleColTab
            dbCategory={"vehicles"}
            title={"Apartments For Rent"}
            dbSubCategory={"tractors"}
          />
          <SingleColTab
            dbCategory={"vehicle_parts_and_accessories"}
            dbSubCategory={"car_parts"}
            title={"Land And Plots For Rent"}
          />
        </div>
      </div>
    </div>
  );
};
const Agriculture = () => {
  return (
    <div className="Comments">
      <h5>Agric</h5>
      {/*<div className="levbitz_container">
        <div className="row">
          <SingleColTab
            title={"Houses For Sale"}
            dbCategory={"properties"}
            dbSubCategory={"houses_for_sale"}
          />

          <SingleColTab
            dbCategory={"vehicles"}
            dbSubCategory={"trucks"}
            title={"Houses For Rent"}
          />
          <SingleColTab
            dbCategory={"vehicles"}
            title={"Land And Plots For Sale"}
            dbSubCategory={"vans_and_taxis"}
          />
          <SingleColTab
            dbCategory={"vehicles"}
            title={"Apartments For Sale"}
            dbSubCategory={"pickups"}
          />
          <SingleColTab
            dbCategory={"vehicles"}
            title={"Apartments For Rent"}
            dbSubCategory={"tractors"}
          />
          <SingleColTab
            dbCategory={"vehicle_parts_and_accessories"}
            dbSubCategory={"car_parts"}
            title={"Land And Plots For Rent"}
          />
        </div>
  </div>*/}
    </div>
  );
};

const SingleColTab = ({ title, dbCategory, dbSubCategory }) => {
  return (
    <>
      <p>kjdfjkfkjdfkj</p>
    </>
  );
};
