import Context from "../../Context";
import {
  FooterIcon,
  FooterRight,
  FooterLeft,
  FooterContainer,
  FooterSection,
  FinalCTATitle,
  AvailabilityBadge,
  FinalCTAContainer,
  FinalCTASection,
  TechStackWrapper,
  ExpertiseInner,
  ExpertiseText,
  ExpertiseContent,
  ExpertiseItemWrapper,
  TechPill,
  TechStack,
  ExpertiseImage,
  ExpertiseRight,
  ExpertiseItem,
  ExpertiseLeft,
  ExpertiseContainer,
  ExpertiseSection,
  ProjectTitle,
  ProjectInfo,
  ProjectMeta,
  ViewAllButton,
  ProjectImage,
  ProjectMedia,
  ProjectCard,
  ProjectsGrid,
  SectionTitle,
  ProjectsHeader,
  ProjectsContainer,
  ProjectsSection,
  AboutSection,
  RevealWrapper,
  ScrollRevealText,
  HorizontalLine,
  AboutContent,
  SectionLabel,
  MainBackgroundContainer,
  SmoothScrollWrapper,
  HeroSection,
  HeroGrid,
  LeftHero,
  Greeting,
  HeroTitle,
  SocialLinks,
  RightHero,
  HeroDescription,
  HeroCTA,
  WavingHand,
  MarqueeSection,
  MarqueeWrapper,
  MarqueeTrack,
  MarqueeText,
} from "../../StyledComponents";
import Navbar from "../Navbar";
import { useContext } from "react";
import {
  FaLinkedin,
  FaInstagramSquare,
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { useEffect, useState, useRef } from "react";
import { RiArrowDropDownLine, RiJavascriptFill } from "react-icons/ri";
import { GoDash } from "react-icons/go";
import { IoLogoNodejs, IoMailOutline } from "react-icons/io5";
import { SiMongodb, SiSqlite } from "react-icons/si";
import { PiStarFour } from "react-icons/pi";
import { FiLinkedin } from "react-icons/fi";
import { LuInstagram } from "react-icons/lu";
import MobileNavBar from "../MobileNavbar";
import { useNavigate } from "react-router-dom";

const useOnScreen = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
};

const ExpertiseAccordion = ({ title, content, dark }) => {
  const [open, setOpen] = useState(false);

  return (
    <ExpertiseItemWrapper>
      <ExpertiseItem $dark={dark} onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span>
          {open ? <GoDash size={25} /> : <RiArrowDropDownLine size={25} />}
        </span>
      </ExpertiseItem>

      <ExpertiseContent $open={open}>
        <ExpertiseInner $open={open}>
          <ExpertiseText $dark={dark}>{content}</ExpertiseText>
        </ExpertiseInner>
      </ExpertiseContent>
    </ExpertiseItemWrapper>
  );
};

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

const Home = () => {
  const navigate = useNavigate();
  const { dark } = useContext(Context);
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [projectRef, projectsVisible] = useOnScreen({ threshold: 0.1 });
  const onClickKnowMore = () => {
    navigate("/about", { replace: true });
  };
  const onClickProjects = () => {
    navigate("/projects", { replace: true });
  };
  const onClickContact = () => {
    navigate("/contact", { replace: true });
  };
  const repeatedStack = Array(5).fill(techStackData).flat();

  return (
    <MainBackgroundContainer $dark={dark}>
      <Navbar />
      <SmoothScrollWrapper>
        <HeroSection>
          <HeroGrid>
            <LeftHero>
              <Greeting>
                <WavingHand $dark={dark} /> Hey! It's me Sanju...
              </Greeting>
              <HeroTitle $dark={dark}>
                Crafting <span>thoughtful interfaces</span> and scalable
                solutions for the modern web
              </HeroTitle>
              <SocialLinks>
                <FooterIcon
                  href="https://www.linkedin.com/in/sanjay-kumar-thadaka/"
                  target="_blank"
                >
                  <FaLinkedin size={30} color={dark ? "#0A66C2" : "#0A66C2"} />
                </FooterIcon>
                <FooterIcon
                  href="https://github.com/Sanjay-Kumar-Git"
                  target="_blank"
                >
                  <FaGithub size={30} color={dark ? "#ffffff" : "#181717"} />
                </FooterIcon>
                <FooterIcon
                  href="https://www.instagram.com/mr.sanju.xt/?hl=en"
                  target="_blank"
                >
                  <FaInstagramSquare size={30} color="#E1306C" />
                </FooterIcon>
              </SocialLinks>
            </LeftHero>
            <RightHero>
              <HeroDescription>
                I’m a full-stack-oriented developer with a strong focus on
                frontend engineering. I build responsive, accessible, and
                performance-driven web applications using React, JavaScript, and
                modern tooling. I enjoy solving real-world problems through
                clean architecture and scalable solutions.
              </HeroDescription>
              <HeroCTA onClick={onClickKnowMore} $dark={dark}>
                KNOW MORE
              </HeroCTA>
            </RightHero>
          </HeroGrid>
        </HeroSection>
        <MarqueeSection>
          <MarqueeWrapper>
            <HorizontalLine $dark={dark} />
            <MarqueeTrack>
              <MarqueeText $dark={dark}>
                Development <PiStarFour size={50} /> Mentor{" "}
                <PiStarFour size={50} /> Websites <PiStarFour size={50} />{" "}
                Designing
              </MarqueeText>
              <MarqueeText $dark={dark}>
                Development <PiStarFour size={50} /> Mentor{" "}
                <PiStarFour size={50} /> Websites <PiStarFour size={50} />{" "}
                Designing
              </MarqueeText>
            </MarqueeTrack>
            <HorizontalLine $dark={dark} />
          </MarqueeWrapper>
        </MarqueeSection>
        <AboutSection ref={ref}>
          <AboutContent>
            <SectionLabel $dark={dark}>
              <PiStarFour size={20} /> About Me
            </SectionLabel>

            <RevealWrapper>
              <ScrollRevealText
                $isVisible={isVisible}
                $dark={dark}
                $delay="0.1s"
              >
                I’m Sanjay, a Computer Science graduate with hands-on experience
                in building modern web applications. I focus on creating
                high-quality, impactful digital experiences and enjoy turning
                ideas into clean, scalable solutions.
              </ScrollRevealText>
            </RevealWrapper>
          </AboutContent>
        </AboutSection>
        <ProjectsSection>
          <ProjectsContainer>
            <ProjectsHeader>
              <SectionLabel $dark={dark}>
                <PiStarFour size={20} /> My Work
              </SectionLabel>
              <SectionTitle $dark={dark}>Selected Projects</SectionTitle>
            </ProjectsHeader>
            <ProjectsGrid ref={projectRef}>
              <ProjectCard $isVisible={projectsVisible}>
                <ProjectMedia $bg="#fff3c4">
                  <ProjectImage
                    src="https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767349490/Screenshot_2026-01-02_154056_fizy7j.png"
                    alt="Aora Project"
                  />
                </ProjectMedia>
                <ProjectInfo>
                  <ProjectTitle $dark={dark}>Spotify Remix</ProjectTitle>
                  <ProjectMeta $dark={dark}>2025</ProjectMeta>
                </ProjectInfo>
              </ProjectCard>

              <ProjectCard $isVisible={projectsVisible}>
                <ProjectMedia $bg="#ffd6ea">
                  <ProjectImage
                    src="https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767349685/Screenshot_2026-01-02_155715_dddskn.png"
                    alt="Code Screenshot"
                  />
                </ProjectMedia>
                <ProjectInfo>
                  <ProjectTitle $dark={dark}>NXT Watch</ProjectTitle>
                  <ProjectMeta $dark={dark}>2025</ProjectMeta>
                </ProjectInfo>
              </ProjectCard>
            </ProjectsGrid>
            <ViewAllButton onClick={onClickProjects} $dark={dark}>
              View All Projects
            </ViewAllButton>
          </ProjectsContainer>
        </ProjectsSection>
        <ExpertiseSection>
          <ExpertiseContainer>
            <ExpertiseLeft>
              <SectionLabel $dark={dark}>
                <PiStarFour size={20} /> Speciality
              </SectionLabel>
              <SectionTitle $dark={dark}>Areas of Expertise</SectionTitle>

              <ExpertiseAccordion
                dark={dark}
                title="Development"
                content="I build scalable, performance-focused web applications using React, JavaScript, and modern frontend architectures."
              />

              <ExpertiseAccordion
                dark={dark}
                title="UI / UX Design"
                content="I design clean, accessible interfaces with a strong focus on usability, consistency, and interaction design."
              />
            </ExpertiseLeft>

            <ExpertiseRight>
              <ExpertiseImage
                src="https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767367833/Gemini_Generated_Image_6srfyl6srfyl6srf_gsohz0.png"
                alt="Workspace"
              />
            </ExpertiseRight>
          </ExpertiseContainer>
          <TechStackWrapper>
            <TechStack>
              {repeatedStack.map(
                ({ name, icon: IconComponent, color }, index) => (
                  <TechPill key={index} $dark={dark}>
                    <IconComponent size={20} color={color} />
                    {name}
                  </TechPill>
                )
              )}
            </TechStack>
          </TechStackWrapper>
        </ExpertiseSection>
        <FinalCTASection>
          <FinalCTAContainer $dark={dark}>
            <AvailabilityBadge>
              <span className="dot" />
              Available for work
            </AvailabilityBadge>

            <FinalCTATitle $dark={dark}>
              Let&apos;s create your
              <br /> big idea.
            </FinalCTATitle>

            <ViewAllButton onClick={onClickContact} $dark={dark}>
              Contact Me
            </ViewAllButton>
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
                target="_blank"
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
      </SmoothScrollWrapper>
    </MainBackgroundContainer>
  );
};

export default Home;
