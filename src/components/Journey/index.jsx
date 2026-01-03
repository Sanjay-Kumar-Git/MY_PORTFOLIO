import { Chrono } from "react-chrono";
import { useContext } from "react";
import Context from "../../Context";
import { JourneySection, PageTitle } from "../../StyledComponents";
import { PiStarFour } from "react-icons/pi";
import { color } from "framer-motion";

const journeyItems = [
  {
    title: "2019",
    cardTitle: "SECONDARY SCHOOL EDUCATION",
    cardSubtitle: "ZPHS PEDDAKODEPAKA",
    cardDetailedText:
      "Completed secondary education with a CGPA of 8.7, building strong academic fundamentals and problem-solving skills.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767417078/ChatGPT_Image_Jan_3_2026_10_40_24_AM_id2t0b.png",
      },
    },
  },
  {
    title: "2021",
    cardTitle: "INTERMEDIATE • MPC",
    cardSubtitle: "SHIVANI JUNIOR COLLEGE",
    cardDetailedText:
      "Passed Intermediate with 89.8% (898/1000), reflecting consistent academic excellence and subject proficiency.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767418150/ChatGPT_Image_Jan_3_2026_10_58_16_AM_g6zx27.png",
      },
    },
  },
  {
    title: "2025",
    cardTitle: "B-TECH • COMPUTER SCIENCE AND ENGINEERING",
    cardSubtitle: "VAAGDEVI COLLEGE OF ENGINEERING",
    cardDetailedText:
      "Completed B.Tech with a CGPA of 7.43, gaining strong foundations in computer science, programming, and practical problem-solving through coursework and projects.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwe9disQWMvgoDU3HULeeufFB3YIsidotK0h_xxpNLhZ5ApnKZOA3GQyxYA5I74hHHHKm3W7qEvekSpUNP6cQlkbdfsw2M2y1y5KM9OCm1APkf7GoELRwzVLdTlSDOJB1n_dvalXA=s1360-w1360-h1020-rw",
      },
    },
  },
  {
    title: "2025",
    cardTitle: "MERN FULL STACK",
    cardSubtitle: "NxtWave | CCBP 4.0",
    cardDetailedText:
      "Completed comprehensive full stack development training at NxtWave with a perfect CGPA of 10. The program emphasized real-world projects, coding challenges, and modern web technologies, strengthening my frontend, backend, and problem-solving capabilities.",
    media: {
      type: "IMAGE",
      source: {
        url: "data:image/png;base64,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",
      },
    },
  },
];

const Journey = () => {
  const { dark } = useContext(Context);

  return (
    <JourneySection $dark={dark}>
      <PageTitle $dark={dark}>
        <span>
          <PiStarFour /> Journey
        </span>
      </PageTitle>

      <div className="chrono-container">
        <Chrono
          $dark={dark}
          items={journeyItems}
          mode="VERTICAL_ALTERNATING"
          hideControls
          cardHeight={150}
          cardWidth={300}
          mediaSettings={{ align: "center", fit: "cover" }}
          theme={{
            primary: dark ? "#9cff57" : "#09f26aff",
            secondary: dark ? "#9cff57" : "#09f26aff",
            cardBgColor: dark ? "#101010ff" : "#ffffff",
            cardForeColor: "#101010ff",
            titleColor: dark ? "#9cff57" : "#09f26aff",
            titleColorActive: dark ? "#101010ff" : "#f2f7f4ff",
          }}
        />
      </div>
    </JourneySection>
  );
};

export default Journey;
