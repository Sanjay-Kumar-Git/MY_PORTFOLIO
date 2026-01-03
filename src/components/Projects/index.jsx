import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Context from "../../Context";
import Navbar from "../Navbar";
import { PiStarFour } from "react-icons/pi";
import { FiLinkedin } from "react-icons/fi";
import { LuInstagram } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import MobileNavBar from "../MobileNavbar";
import { useNavigate } from "react-router-dom";
import {
  FooterIcon,
  FooterRight,
  FooterLeft,
  FooterContainer,
  FooterSection,
  FinalCTASection,
  FinalCTAContainer,
  AvailabilityBadge,
  FinalCTATitle,
  ViewAllButton,
} from "../../StyledComponents";

/* ======================================================
   PROJECT DATA
====================================================== */

const projects = [
  {
    id: 1,
    title: "Spotify Remix",
    category: "Frontend",
    liveUrl: "https://sanjaytunes.ccbp.tech/",
    github:
      "https://github.com/Sanjay-Kumar-Git/Spotify_Remix-Music-Streaming-App.git",
    tech: ["React.js", "CSS", "API", "Athorization"],
    description:
      "Authentication is disabled in iframe previews due to browser security. Please Open live url Link Below. Credentials: {username: raja,password:raja@2021}",
    thumbnail:
      "https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767349281/Screenshot_2026-01-02_155026_aacbgv.png",
  },
  {
    id: 2,
    title: "NXT Watch",
    category: "Frontend",
    liveUrl: "https://nxtwatchytsanju.ccbp.tech/",
    github: "https://github.com/yourname/nxt-watch",
    tech: ["React", "JWT", "API"],
    description:
      "Authentication is disabled in iframe previews due to browser security. Please Open live url Link Below. Credentials: {username: raja,password:raja@2021}",
    thumbnail:
      "https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767349685/Screenshot_2026-01-02_155715_dddskn.png",
  },
  {
    id: 3,
    title: "NXT Trendz E-Commerce",
    category: "Full Stack",
    liveUrl: "https://tsksanjay.ccbp.tech/login",
    github: "https://github.com/yourname/ecommerce",
    tech: ["React", "Node", "MongoDB"],
    description:
      "Authentication is disabled in iframe previews due to browser security. Please Open live url Link Below. Credentials: {username: raja,password:raja@2021}",
    thumbnail:
      "https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767429530/Screenshot_2026-01-03_140825_ikxnux.png",
  },
  {
    id: 4,
    title: "Deep-Learning-Framework-for-Online-Loan-Fraud-Prevention",
    category: "ML",
    liveUrl:
      "https://www.linkedin.com/in/sanjay-kumar-thadaka/details/projects/1753617631558/single-media-viewer/?profileId=ACoAAFB3gxgBbGx_cXyEHHbncbz5h-VtTHPZZ4s",
    github:
      "https://github.com/Sanjay-Kumar-Git/Deep-Learning-Framework-for-Online-Loan-Fraud-Prevention.git",
    tech: ["ML", "PYTHON"],
    description:
      "Authentication is disabled in iframe previews due to browser security. Please Open live url Link Below.",
    thumbnail:
      "https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767429855/Screenshot_2025-04-21_152431_wwh87b.png",
  },
];

const categories = ["All", "Frontend", "Full Stack", "ML"];

/* ======================================================
   MAIN COMPONENT
====================================================== */

const ProjectsSection = () => {
  const { dark } = useContext(Context);
  const navigate=useNavigate()
  
    const onClickContact=()=>{
          navigate('/contact',{replace:true})
      }

  const [activeTab, setActiveTab] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section style={styles.section(dark)}>
      <Navbar />
      <h2 style={styles.title(dark)}>
        <PiStarFour /> My Work
      </h2>

      {/* ---------- CATEGORY TABS ---------- */}
      <div style={styles.tabs}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveTab(cat);
              setActiveProject(null);
            }}
            style={styles.tab(activeTab === cat, dark)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundSize = "100% 100%";
              e.currentTarget.style.transform = "scaleY(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundSize =
                activeTab === cat ? "100% 100%" : "100% 0%";
              e.currentTarget.style.transform = "scaleY(1)";
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ---------- PROJECT GRID ---------- */}
      <motion.div layout style={styles.grid}>
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => {
                if (activeProject?.id !== project.id) {
                  setActiveProject(project);
                }
              }}
            >
              <ProjectCard
                project={project}
                active={activeProject?.id === project.id}
                dark={dark}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* ---------- PROJECT VIEWER ---------- */}
      <AnimatePresence mode="wait">
        {activeProject && (
          <ProjectViewer
            key={activeProject.id}
            project={activeProject}
            isMobile={isMobile}
            dark={dark}
          />
        )}
      </AnimatePresence>

      {!activeProject && (
        <p style={styles.placeholder(dark)}>
          **Click a project to preview it here
        </p>
      )}
      <FinalCTASection>
        <FinalCTAContainer $dark={dark}>
          <AvailabilityBadge>
            <span className="dot" />
            Available for work
          </AvailabilityBadge>

          <FinalCTATitle $dark={dark}>
            Looking For
            <br /> Good Opportunity.
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
    </section>
  );
};

export default ProjectsSection;

/* ======================================================
   PROJECT CARD
====================================================== */

const ProjectCard = ({ project, active, dark }) => (
  <div
    style={{
      ...styles.card(dark),
      border: active
        ? "2px solid #2dbf64"
        : dark
        ? "1px solid rgba(255,255,255,0.15)"
        : "1px solid rgba(0,0,0,0.15)",
    }}
  >
    <img src={project.thumbnail} alt={project.title} style={styles.image} />
    <h4>{project.title}</h4>
    <p style={{ opacity: 0.6 }}>{project.category}</p>
  </div>
);

/* ======================================================
   PROJECT VIEWER
====================================================== */

const ProjectViewer = ({ project, isMobile, dark }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.5 }}
    style={styles.viewer}
  >
    {" "}
    {/* ---------- LIVE PROJECT ---------- */}{" "}
    {!isMobile ? (
      <div style={styles.iframeWrapper(dark)}>
        {" "}
        <iframe
          src={project.liveUrl}
          title={project.title}
          loading="lazy"
          style={styles.iframe}
        />{" "}
      </div>
    ) : (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        style={styles.mobileLink}
      >
        {" "}
        Open Live Project{" "}
      </a>
    )}{" "}
    {/* ---------- PROJECT INFO ---------- */}{" "}
    <div style={styles.info(dark)}>
      {" "}
      <h2>{project.title}</h2> <p>{project.description}</p>{" "}
      <div style={styles.techRow}>
        {" "}
        {project.tech.map((t) => (
          <span key={t} style={styles.tech}>
            {" "}
            {t}{" "}
          </span>
        ))}{" "}
      </div>{" "}
      <div style={styles.buttons}>
        {" "}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          style={styles.liveBtn}
        >
          {" "}
          <FaExternalLinkAlt /> Live{" "}
        </a>{" "}
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          style={styles.githubBtn}
        >
          {" "}
          <FaGithub /> Code{" "}
        </a>{" "}
      </div>{" "}
    </div>{" "}
  </motion.div>
);

/* ======================================================
   STYLES (THEME AWARE)
====================================================== */

const styles = {
  section: (dark) => ({
    padding: "100px 20px",
    width: "100vw",
    margin: "0 auto",
    color: dark ? "#ffffff" : "#111111",
    backgroundColor: dark ? "#000000" : "#f9faf9",
    transition: "color 0.3s ease",
  }),

  title: (dark) => ({
    textAlign: "center",
    fontSize: "2.4rem",
    marginBottom: "30px",
    fontWeight: "600",
    color: dark ? "#9cff57" : "#09f26aff",
  }),

  tabs: {
    display: "flex",
    justifyContent: "center",
    gap: "14px",
    marginBottom: "30px",
  },

  tab: (active, dark) => ({
    padding: "10px 18px",
    borderRadius: "20px", // capsule shape
    border: "none",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",

    /* 🌊 WATER LAYER (rounded illusion) */
    backgroundImage: active
      ? "linear-gradient(#2dbf64, #9cff57)"
      : dark
      ? "linear-gradient(to top, #e39595ff 100%, rgba(45,191,100,0.0) 100%)"
      : "linear-gradient(to bottom, #2dbf64 85%, rgba(45,191,100,0.0) 100%)",

    backgroundRepeat: "no-repeat",

    /* 🌊 WATER FILL CONTROL */
    backgroundSize: active ? "100% 100%" : "100% 0%",

    /* 🌊 FILL DIRECTION */
    backgroundPosition: dark ? "bottom center" : "top center",

    /* BASE BACKGROUND */
    backgroundColor: dark ? "rgba(255,255,255,0.08)" : "#e5e5e5",

    color: active ? "#000" : dark ? "#fff" : "#000",

    /* 🧈 ELASTIC TRANSITION */
    transition: `
    background-size 0.55s cubic-bezier(0.22, 1.4, 0.36, 1),
    transform 0.3s cubic-bezier(0.22, 1.4, 0.36, 1)
  `,
  }),

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },

  card: (dark) => ({
    padding: "12px",
    borderRadius: "16px",
    minHeight: "300px",
    minWidth: "300px",
    textAlign: "center",
    cursor: "pointer",
    background: dark ? "rgba(255,255,255,0.05)" : "#ffffff",
    transition: "background 0.3s ease, border 0.3s ease",
  }),

  image: {
    width: "100%",
    borderRadius: "12px",
    marginBottom: "40px",
    minHeight: "200px",
  },

  viewer: {
    marginTop: "60px",
  },

  iframeWrapper: (dark) => ({
    height: "520px",
    borderRadius: "20px",
    overflow: "hidden",
    border: dark
      ? "1px solid rgba(255,255,255,0.15)"
      : "1px solid rgba(0,0,0,0.15)",
  }),

  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
  },

  mobileLink: {
    display: "block",
    padding: "14px",
    borderRadius: "12px",
    background: "#2dbf64",
    color: "#000",
    textAlign: "center",
    textDecoration: "none",
  },

  info: (dark) => ({
    marginTop: "24px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    borderRadius: "16px",
    background: dark ? "rgba(255,255,255,0.05)" : "#f9f9f9",
    transition: "background 0.3s ease",
  }),

  techRow: {
    margin: "12px 0",
  },

  tech: {
    padding: "6px 12px",
    borderRadius: "20px",
    background: "rgba(45,191,100,0.15)",
    marginRight: "8px",
    fontSize: "0.85rem",
  },

  buttons: {
    display: "flex",
    gap: "14px",
    marginTop: "14px",
  },

  liveBtn: {
    padding: "10px 16px",
    borderRadius: "10px",
    background: "#2dbf64",
    color: "#000",
    textDecoration: "none",
  },

  githubBtn: {
    padding: "10px 16px",
    borderRadius: "10px",
    border: "1px solid #2dbf64",
    color: "#2dbf64",
    textDecoration: "none",
  },

  placeholder: (dark) => ({
    marginTop: "40px",
    textAlign: "center",
    opacity: 0.6,
    color: dark ? "#cccccc" : "#555555",
  }),
};
