import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import LogoBorder from "./LogoBorder";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Logos = () => {
  return (
    <div className="flex gap-2 pt-[14px]">
      <LogoBorder>
        <IoLogoTwitter />
      </LogoBorder>

      <FaFacebook className="text-3xl" />

      <LogoBorder>
        <IoLogoInstagram />
      </LogoBorder>
      <LogoBorder>
        <FaGithub />
      </LogoBorder>
    </div>
  );
};

export default Logos;
