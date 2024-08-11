import React, { useEffect, useState } from "react";
import { LayoutWithFullContentHeight } from "../Marketing/Layouts/LayoutWithFullContentHeight/App";
import { WithImageBackground } from "../Marketing/Heroes/Hero3";
import { LogoGridWithTitle } from "../Marketing/LogoGrid/LogoGridWithTitle/App";
import { Box } from "@chakra-ui/react";
import { TestimonialWithRating } from "../Marketing/Testimonials/TestimonialWithRating/App";
import { StatsWithDivider } from "../Marketing/Stats/StatsWithDivider/App";
import { HeroWithImage } from "../Marketing/Heroes/Hero5";
import { Features } from "../Marketing/Features/App";
import { HeroWithCropedImage } from "../Marketing/Heroes/Hero1";
import { CTA1 } from "../Marketing/CallToActions/CTA1";
import { BlogWithThreeColumns } from "../Marketing/Blog/BlogWithThreeColumns/App";
import { PopupWithImage } from "../E-Commerce/ShopPopup.js/PopupWithImage/App";
import { Navbar } from "../Marketing/Layouts/LayoutWithFullContentHeight/Navbar";
import { StepwithLine } from "./StepwithLine";
import { BeforeAndAfter } from "./BeforeAndAfter";
import { Footer } from "../Marketing/Layouts/LayoutWithFullContentHeight/Footer";
import useCustomBack from "./useCustomBack";
import { useNavigate } from "react-router-dom";

function Landing(props) {
  const navigation = useNavigate();
  const [popupOpen, setPopupOpen] = React.useState(false);

  return (
    <LayoutWithFullContentHeight>
      <Navbar onClick={() => navigation("/find/0")} />
      <WithImageBackground onClick={() => navigation("/find/0")} />
      <Box
        bgImage={require("../Assets/Image/reviewbackground.png")}
        bgSize={{ base: "100% 100%", md: "cover" }}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        bgColor={"rgba(245,245,245,0.5)"}
      >
        <LogoGridWithTitle />
        <TestimonialWithRating />
      </Box>
      {/* <HeroWithImageTop /> */}
      <StatsWithDivider onClick={() => navigation("/find/0")} />
      <Box bgColor={"white"}>
        <HeroWithImage onClick={() => navigation("/find/0")} />
      </Box>
      <Box bgColor={"#f3faf8"}>
        <StepwithLine />
      </Box>
      <HeroWithCropedImage onClick={() => navigation("/find/0")} />
      <BeforeAndAfter />
      <BlogWithThreeColumns onClick={() => navigation("/find/0")} />
      <Features onClick={() => navigation("/find/0")} />
      <CTA1 onClick={() => navigation("/find/0")} />
      <Footer onClick={() => navigation("/find/0")} />
    </LayoutWithFullContentHeight>
  );
}

export default Landing;
