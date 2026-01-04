import Navbar from '../Navbar'
import MobileNavbar from '../MobileNavbar'
import { MainBackgroundContainer,CenterPage,
  CenterCard,
  CardImage,
  CardTitle,
  CardText,
  ViewAllButton
 } from '../../StyledComponents'
import { useContext } from 'react'
import Context from '../../Context'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
  const { dark } = useContext(Context)
  const navigate = useNavigate()

  return (
    <MainBackgroundContainer $dark={dark}>
        <Navbar/>
    <CenterPage $dark={dark}>
      <CenterCard $dark={dark}>
        <CardImage src={dark?"https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767509349/ChatGPT_Image_Jan_4_2026_12_18_43_PM_zfyyuo.png":"https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767509194/ChatGPT_Image_Jan_4_2026_12_16_08_PM_qf40ru.png"} alt="Not Found" />
        <CardTitle $dark={dark}>404</CardTitle>
        <CardText $dark={dark}>
          The page you are looking for doesn’t exist or has been moved.
        </CardText>
        <ViewAllButton $dark={dark} onClick={() => navigate("/")}>
          Go Back Home
        </ViewAllButton>
      </CenterCard>
    </CenterPage>
    <MobileNavbar/>
    </MainBackgroundContainer>
  )
}


export default Notfound