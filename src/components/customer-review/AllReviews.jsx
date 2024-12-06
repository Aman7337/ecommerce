import React, { useState } from "react";
import ReviewHeading from "./ReviewHeading";
import Comments from "./Comments";
import YouMghtLikeCarousal from "../Carousal/YouMghtLikeCarousal ";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const AllReviews = () => {

  const [activeTab, setActiveTab] = useState("ratings");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
    <div className="max-w-[1300px] px-[10px] mx-auto">
      <Box className="flex flex-wrap justify-center my-[4rem] w-full">
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          className="sm:w-full"
          textColor="inherit"
          aria-label="secondary tabs example"
          TabIndicatorProps={{ sx: { backgroundColor: "black" } }} // Change indicator color to black
          variant="fullWidth"
          sx={{
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
            },
          }}
        >
          <Tab
            label="Product Details"
            className="cursor-pointer lg:w-full text-[#765c5c]"
            onClick={() => handleTabClick("productDetails")}
          />
          <Tab
            label="Ratings & Review"
            className="cursor-pointer lg:w-full text-[#765c5c]"
            onClick={() => handleTabClick("ratings")}
          />
          <Tab
            label="FAQs"
            className="cursor-pointer lg:w-full text-[#765c5c]"
            onClick={() => handleTabClick("faqs")}
          />
        </Tabs>
      </Box>

      {activeTab === "ratings" && (
        <div>
          <ReviewHeading />
          <Comments />
        </div>
      )}
      <div className="mb-[10rem]">
        <div className="flex justify-center">
          <p className="text-4xl font-extrabold">You Might Also Like</p>
        </div>
        <YouMghtLikeCarousal />
      </div>
    </div>
  );
};

export default AllReviews;
