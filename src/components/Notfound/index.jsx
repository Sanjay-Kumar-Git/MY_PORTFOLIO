import Navbar from "../Navbar"
import MobileNavbar from "../MobileNavbar"
import {
  MainBackgroundContainer,
  CenterPage,
  CenterCard,
  CardImage,
  CardTitle,
  CardText,
  ViewAllButton,
  FooterSection,
  FooterContainer,
  FooterLeft,
  FooterRight,
  FooterIcon
} from "../../StyledComponents"

import { LuInstagram } from "react-icons/lu"
import { IoMailOutline } from "react-icons/io5"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import { useContext } from "react"
import Context from "../../Context"
import { useNavigate } from "react-router-dom"

const Notfound = () => {
  const { dark } = useContext(Context)
  const navigate = useNavigate()

  return (
    <MainBackgroundContainer $dark={dark}>
      <Navbar />

      <CenterPage $dark={dark}>
        <CenterCard $dark={dark}>
          <CardImage
            src={
              dark
                ? "https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767509349/ChatGPT_Image_Jan_4_2026_12_18_43_PM_zfyyuo.png"
                : "https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767509194/ChatGPT_Image_Jan_4_2026_12_16_08_PM_qf40ru.png"
            }
            alt="Not Found"
          />

          <CardTitle>404</CardTitle>

          <CardText>
            The page you are looking for doesn’t exist or has been moved.
          </CardText>

          <ViewAllButton $dark={dark} onClick={() => navigate("/")}>
            Go Back Home
          </ViewAllButton>
        </CenterCard>
      </CenterPage>

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
              <FaLinkedin size={30} />
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

      <MobileNavbar />
    </MainBackgroundContainer>
  )
}

export default Notfound
