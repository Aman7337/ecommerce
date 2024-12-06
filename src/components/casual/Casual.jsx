import React from "react";
import Tshirts from "../t-shirts/Tshirts";
import { LuSliders } from "react-icons/lu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Filter from "./Filter";
import { useStoreContext } from "../../context/Store";

const Casual = () => {
  const [open, setOpen] = React.useState(false);

  const { apiProductsData } = useStoreContext();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="max-w-[1300px] mx-auto px-4 md:mb-[15rem]">
      <div className="mt-[50px] ml-[5px] flex justify-between items-center">
        <p className="text-3xl font-extrabold">CASUAL</p>
        <p className="sm:hidden cursor-pointer" onClick={toggleDrawer(true)}>
          <LuSliders className="text-2xl" />
        </p>
      </div>

      <div className="flex">
        <Filter className="border-[2px] rounded-lg border-blackv hidden sm:block mt-[40px] ml-[2px] h-[80rem]" />

        <Box sx={{ width: 12 }} role="presentation">
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding></ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding></ListItem>
            ))}
          </List>
        </Box>

        <div>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {<Filter />}
          </Drawer>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mt-12">
          {apiProductsData?.map((item, index) => (
            <Tshirts
              key={index}
              className="w-[14rem]mb-6"
              image="w-full"
              type={item.name}
              img1={item.image[0]}
              price={item.price}
              id={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Casual;
