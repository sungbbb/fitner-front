import React from "react";
import { LayoutWithFullContentHeight } from "../Marketing/Layouts/LayoutWithFullContentHeight/App";
import { WithImageBackground } from "../Marketing/Heroes/Hero3";
import { LogoGridWithTitle } from "../Marketing/LogoGrid/LogoGridWithTitle/App";
import { Image, Container, Box, Flex, Stack } from "@chakra-ui/react";
import { TestimonialWithRating } from "../Marketing/Testimonials/TestimonialWithRating/App";
import { StatsWithDivider } from "../Marketing/Stats/StatsWithDivider/App";
import { HeroWithImage, HeroWithImageReverse } from "../Marketing/Heroes/Hero5";
import { Features } from "../Marketing/Features/App";
import { HeroWithImageTop } from "../Marketing/Heroes/Hero6";
import { HeroWithCropedImage } from "../Marketing/Heroes/Hero1";
import { CheckboxCardGroupContainer } from "../Application/FormElements/CheckboxCardGroup/App";
import { CTA1 } from "../Marketing/CallToActions/CTA1";
import { BlogWithThreeColumns } from "../Marketing/Blog/BlogWithThreeColumns/App";
import { PopupWithImage } from "../E-Commerce/ShopPopup.js/PopupWithImage/App";
import { Navbar } from "../Marketing/Layouts/LayoutWithFullContentHeight/Navbar";

function Landing(props) {
  const [popupOpen, setPopupOpen] = React.useState(false);
  return (
    <LayoutWithFullContentHeight>
      <Navbar onClick={() => setPopupOpen(true)} />
      <WithImageBackground onClick={() => setPopupOpen(true)} />
      <LogoGridWithTitle />
      <HeroWithImageTop />
      <TestimonialWithRating />
      <StatsWithDivider onClick={() => setPopupOpen(true)} />

      <Box bgColor="gray.100">
        <HeroWithImageReverse onClick={() => setPopupOpen(true)} />
        <HeroWithImage onClick={() => setPopupOpen(true)} />
      </Box>
      <HeroWithCropedImage onClick={() => setPopupOpen(true)} />
      <BlogWithThreeColumns onClick={() => setPopupOpen(true)} />
      <Features />
      <CTA1 onClick={() => setPopupOpen(true)} />
      <PopupWithImage isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </LayoutWithFullContentHeight>
  );
}

export default Landing;
