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

function Landing(props) {
  const preventGoBack = () => {
    window.history.pushState(null, "", window.location.href);
  };

  // 브라우저에 렌더링 시 한 번만 실행하는 코드
  useEffect(() => {
    (() => {
      window.history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", preventGoBack);
    })();

    return () => {
      window.removeEventListener("popstate", preventGoBack);
    };
  }, []);

  // 새로고침 막기 변수
  const preventClose = (e) => {
    console.log("preventClose");
    e.preventDefault();
    e.returnValue = ""; // chrome에서는 설정이 필요해서 넣은 코드
  };

  // 브라우저에 렌더링 시 한 번만 실행하는 코드
  useEffect(() => {
    (() => {
      window.addEventListener("beforeunload", preventClose);
    })();

    return () => {
      window.removeEventListener("beforeunload", preventClose);
    };
  }, []);

  const [popupOpen, setPopupOpen] = React.useState(false);
  return (
    <LayoutWithFullContentHeight>
      <Navbar onClick={() => setPopupOpen(true)} />
      <WithImageBackground onClick={() => setPopupOpen(true)} />
      <Box
        bgImage={require("../Assets/Image/reviewbackground.png")}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        bgColor={"rgba(245,245,245,0.5)"}
      >
        <LogoGridWithTitle />
        <TestimonialWithRating />
      </Box>
      {/* <HeroWithImageTop /> */}
      <StatsWithDivider onClick={() => setPopupOpen(true)} />
      <Box bgColor={"white"}>
        <HeroWithImage onClick={() => setPopupOpen(true)} />
      </Box>
      <Box bgColor={"#f3faf8"}>
        <StepwithLine />
      </Box>
      <HeroWithCropedImage onClick={() => setPopupOpen(true)} />
      <BeforeAndAfter />
      <BlogWithThreeColumns onClick={() => setPopupOpen(true)} />
      <Features onClick={() => setPopupOpen(true)} />
      <CTA1 onClick={() => setPopupOpen(true)} />
      <PopupWithImage isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
      <Footer onClick={() => setPopupOpen(true)} />
    </LayoutWithFullContentHeight>
  );
}

export default Landing;
