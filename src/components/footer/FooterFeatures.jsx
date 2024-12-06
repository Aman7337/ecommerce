import React from "react";

const FooterFeatures = ({ heading, item1, item2, item3, item4 }) => {
  return (
    <div className="w-[12em] p-[9px] ">
      <p className="mb-[29px] sm:ml-[10px]  font-semibold text-lg mt-[2px]">
        {heading}
      </p>
      <p className="mb-[17px] sm:ml-[10px] text-[#71757e] ">{item1}</p>
      <p className="mb-[17px] sm:ml-[10px] text-[#71757e] ">{item2}</p>
      <p className="mb-[17px] sm:ml-[10px] text-[#71757e] ">{item3}</p>
      <p className="mb-[17px] sm:ml-[10px] text-[#71757e] ">{item4}</p>
    </div>
  );
};

export default FooterFeatures;
