// 외부 라이브러리 임포트
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// 레이아웃 관련 컴포넌트 임포트
import { LayoutWithFullContentHeight } from "../Marketing/Layouts/LayoutWithFullContentHeight/App";
import { Navbar } from "../Marketing/Layouts/LayoutWithFullContentHeight/Navbar";
import { Footer } from "../Marketing/Layouts/LayoutWithFullContentHeight/Footer";

// 히어로 관련 컴포넌트 임포트
import { WithImageBackground } from "../Marketing/Heroes/Hero3";
import { HeroWithImage } from "../Marketing/Heroes/Hero5";
import { HeroWithCropedImage } from "../Marketing/Heroes/Hero1";

// 그리드 및 기타 섹션 임포트
import { LogoGridWithTitle } from "../Marketing/LogoGrid/LogoGridWithTitle/App";
import { TestimonialWithRating } from "../Marketing/Testimonials/TestimonialWithRating/App";
import { StatsWithDivider } from "../Marketing/Stats/StatsWithDivider/App";
import { Features } from "../Marketing/Features/App";
import { CTA1 } from "../Marketing/CallToActions/CTA1";
import { BlogWithThreeColumns } from "../Marketing/Blog/BlogWithThreeColumns/App";

// 추가적인 섹션 임포트
import { StepwithLine } from "./StepwithLine";
import { BeforeAndAfter } from "./BeforeAndAfter";

function Landing(props) {
  const navigation = useNavigate();

  return (
    <LayoutWithFullContentHeight>
      <Navbar onClick={() => navigation("/find/0")} />
      <WithImageBackground onClick={() => navigation("/find/0")} />
      <Box
        bgImage={{
          lg: require("../Assets/Image/reviewbackground.png"),
          base: require("../Assets/Image/reviewbackground2.png"),
        }}
        bgSize={{ base: "100% 100%", md: "cover" }}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        bgColor={"rgba(245,245,245,0.5)"}
      >
        <LogoGridWithTitle />
        <TestimonialWithRating />
      </Box>
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
