import {
  PageWrapper,
  PageTitle,
  Grid,
  Card,
  CertificateImage,
  CardContent,
  CertTitle,
  FooterRight,
  FinalCTASection,
  FinalCTAContainer,
  AvailabilityBadge,
  FinalCTATitle,
  FooterIcon,
  CertIssuer,
  FooterLeft,
  AboutPage,
  HorizontalLine,
  FooterContainer,
  TechPill,
  TechStack,
  TechStackWrapper,
  CenterDot,
  FooterSection,
  ClockHand,
  SpinningText,
  ClockContainer,
  AboutHeroSection,
  AboutContainer,
  ProfileWrapper,
  ProfileImage,
  ContentWrapper,
  Headline,
  Description,
  ViewAllButton,
} from "../../StyledComponents";
import Navbar from "../Navbar";
import MobileNavBar from "../MobileNavbar";
import { useContext } from "react";
import Context from "../../Context";
import React, { useState, useEffect } from "react";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMongodb, SiSqlite } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { PiStarFour } from "react-icons/pi";
import Journey from "../Journey";
import SkillsPage from "../Recharts";
import { FiLinkedin } from "react-icons/fi";
import { LuInstagram } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const techStackData = [
  { name: "React", icon: FaReact, color: "#14b3e8ff" },
  { name: "Node.js", icon: IoLogoNodejs, color: "#14cd39ff" },
  { name: "MongoDB", icon: SiMongodb, color: "#055715ff" },
  { name: "SQLite", icon: SiSqlite, color: "#118cd8ff" },
  { name: "Python", icon: FaPython, color: "#e6d73de5" },
  { name: "HTML5", icon: FaHtml5, color: "#c27f0cff" },
  { name: "CSS3", icon: FaCss3Alt, color: "#4e4eeeff" },
  { name: "Git", icon: FaGitAlt, color: "#e30e0eff" },
  { name: "JavaScript", icon: RiJavascriptFill, color: "#e7eb0cff" },
];

const certifications = [
  {
    title: "Node.js",
    issuer: "NxtWave CCBP 4.0",
    year: "2025",
    image:
      "https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767375171/Node_JS.pdf_kmabil.png",
  },
  {
    title: "React.js",
    issuer: "NxtWave CCBP 4.0",
    year: "2025",
    image:
      "https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767374645/React_JS.pdf_virlwn.jpg",
  },
  {
    title: "Python Programming",
    issuer: "NxtWave CCBP 4.0",
    year: "2025",
    image:
      "https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767374871/Programming_Foundations.pdf_grtzni.png",
  },
  {
    title: "JAVASCRIPT ESSENTIALS",
    issuer: "NxtWave CCBP 4.0",
    year: "2025",
    image:
      "https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767376431/JavaScript_Essentials.pdf_hzsmxx.png",
  },
  {
    title: "INTRODUCTION TO DATABASES",
    issuer: "NxtWave CCBP 4.0",
    year: "2025",
    image:
      "https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767376508/Introduction_to_Databases.pdf_cxs0oc.png",
  },
  {
    title: "DEVELOPER FOUNDATIONS",
    issuer: "NxtWave CCBP 4.0",
    year: "2025",
    image:
      "https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767376683/Developer_Foundations.pdf_oqon9j.png",
  },
  {
    title: "Build Your Own Dynamic Web Application",
    issuer: "NxtWave CCBP 4.0",
    year: "2025",
    image:
      "https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767376810/Build_Your_Own_Dynamic_Web_Application.pdf_in6xqa.png",
  },
  {
    title: "Responsive Web Desig Flexbox",
    issuer: "NxtWave CCBP 4.0",
    year: "2025",
    image:
      "https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767376950/Responsive_Web_Design_using_Flexbox.pdf_cq8saf.png",
  },
  {
    title: "Build Your Own Responsive Website",
    issuer: "NxtWave CCBP 4.0",
    year: "2025",
    image:
      "https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767377127/Build_Your_Own_Responsive_Website.pdf_skz4sn.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Certifications = ({ $dark }) => {
  return (
    <PageWrapper>
      <PageTitle $dark={$dark}>
        <span>
          <PiStarFour size={40} /> Certifications
        </span>
      </PageTitle>

      <Grid>
        {certifications.map((cert, index) => (
          <Card
            $dark={$dark}
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              y: -10,
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
            }}
          >
            <CertificateImage src={cert.image} alt={cert.title} />

            <CardContent>
              <CertTitle>{cert.title}</CertTitle>
              <CertIssuer>
                {cert.issuer} • {cert.year}
              </CertIssuer>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </PageWrapper>
  );
};

const AnalogClock = ({ dark }) => {
  
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds() * 6;
  const minutes = time.getMinutes() * 6;
  const hours = (time.getHours() % 12) * 30 + minutes / 12;

  const text = "";

  return (
    <ClockContainer $dark={dark}>
      <SpinningText $dark={dark}>
        {text.split("").map((char, i) => (
          <span key={i} style={{ "--index": i }}>
            {char}
          </span>
        ))}
      </SpinningText>
      <ClockHand
        $type="hour"
        $degrees={hours}
        $dark={dark}
        $color={dark ? "#ffffff" : "#111111"}
      />
      <ClockHand
        $type="minute"
        $degrees={minutes}
        $dark={dark}
        $color={dark ? "#bbbbbb" : "#666666"}
      />
      <ClockHand $type="second" $degrees={seconds} />
      <CenterDot />
    </ClockContainer>
  );
};

const About = () => {
  const navigate=useNavigate()

  const onClickContact=()=>{
        navigate('/contact',{replace:true})
    }
  const { dark } = useContext(Context);
  const repeatedStack = Array(5).fill(techStackData).flat();

  return (
    <AboutPage $dark={dark}>
      <Navbar />
      <AboutHeroSection $dark={dark}>
        <AboutContainer $dark={dark}>
          <ProfileWrapper>
            <ProfileImage
              $dark={dark}
              src="https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767441723/ChatGPT_Image_Jan_3_2026_05_28_22_PM_svjlrz.png"
              alt="Profile"
            />
            <AnalogClock $dark={dark} />
          </ProfileWrapper>

          <ContentWrapper>
            <Headline $dark={dark}>
              Crafting <span>Thoughtful Digital</span>
              <br />
              Experiences
            </Headline>

            <Description $dark={dark}>
              I design and build user-centric web experiences that balance
              aesthetics, usability, and performance. With a strong focus on
              frontend engineering, I enjoy crafting interfaces that feel
              intuitive, scalable, and purpose-driven. My work blends clean
              design principles with modern development practices to deliver
              meaningful digital solutions.
            </Description>

            <ViewAllButton
              $dark={dark}
              onClick={() =>
                window.open("/THADAKA_SANJAY_KUMAR_RESUME.pdf", "_blank")
              }
            >
              My Resume
            </ViewAllButton>
          </ContentWrapper>
        </AboutContainer>
      </AboutHeroSection>
      <HorizontalLine
        style={{ marginBottom: "0px", paddingBottom: "0px" }}
        $dark={dark}
      />
      <TechStackWrapper $dark={dark}>
        <TechStack>
          {repeatedStack.map(({ name, icon: IconComponent, color }, index) => (
            <TechPill key={index} $dark={dark}>
              <IconComponent size={20} color={color} />
              {name}
            </TechPill>
          ))}
        </TechStack>
      </TechStackWrapper>
      <HorizontalLine style={{ marginTop: "50px" }} $dark={dark} />
      <Journey />
      <Certifications $dark={dark} />
      <SkillsPage dark={dark} />
      <FinalCTASection>
        <FinalCTAContainer $dark={dark}>
          <AvailabilityBadge>
            <span className="dot" />
            Available for work
          </AvailabilityBadge>

          <FinalCTATitle $dark={dark}>
            Reach Out Me For
            <br /> More Details.
          </FinalCTATitle>

          <ViewAllButton onClick={onClickContact} $dark={dark}>Contact Me</ViewAllButton>
        </FinalCTAContainer>
      </FinalCTASection>
      <FooterSection>
        <FooterContainer $dark={dark}>
          <FooterLeft>
            © {new Date().getFullYear()} Sanjay. All rights reserved.
          </FooterLeft>

          <FooterRight>
            <FooterIcon
              $dark={dark}
              href="https://www.linkedin.com/in/sanjay-kumar-thadaka/"
              target="_blank"
            >
              <FiLinkedin size={30} />
            </FooterIcon>
            <FooterIcon
              $dark={dark}
              href="https://github.com/Sanjay-Kumar-Git"
              target="_blank"
            >
              <FaGithub size={30} />
            </FooterIcon>
            <FooterIcon
              $dark={dark}
              href="https://www.instagram.com/mr.sanju.xt/?hl=en"
            >
              <LuInstagram size={30} />
            </FooterIcon>
            <FooterIcon
              $dark={dark}
              href="mailto:sanjaythadaka614@gmail.com"
              target="_blank"
            >
              <IoMailOutline size={30} />
            </FooterIcon>
          </FooterRight>
        </FooterContainer>
      </FooterSection>
      <MobileNavBar />
    </AboutPage>
  );
};
export default About;
