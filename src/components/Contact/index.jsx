import { useContext, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Context from "../../Context";
import Navbar from "../Navbar";
import { PiStarFour } from "react-icons/pi";
import MobileNavBar from "../MobileNavbar";
import { FiLinkedin } from "react-icons/fi";
import { LuInstagram } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import {FooterSection,FooterContainer,FooterLeft,FooterRight,FooterIcon} from '../../StyledComponents'

const ContactSection = () => {
  const { dark } = useContext(Context);

  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_owyo5co",
        "template_ptsbboq",
        formRef.current,
        "XE_3x3jo4dmJo02IV"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setStatus("Failed to send message. Try again.");
          console.error(error);
        }
      );
  };


  return (
    <div style={styles.wrapper(dark)}>
      <Navbar dark={dark} />

      <section style={styles.section(dark)} id="contact">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.title(dark)}>
            <PiStarFour color={dark ? "#9cff57" : "#09f26aff"} /> Get In{" "}
            <span style={{ color: dark ? "#9cff57" : "#09f26aff" }}>Touch</span>
          </h2>
          <p style={styles.subtitle(dark)}>
            Feel free to reach out for opportunities, collaborations, or
            questions.
          </p>
        </motion.div>

        <div style={styles.container}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={styles.infoBox(dark)}
          >
            <div style={styles.imageContainer}>
              <img
                src="https://res.cloudinary.com/dvf7rhe2l/image/upload/v1767432705/Gemini_Generated_Image_denol6denol6deno_dpdzyo.png"
                alt="Sanjay Kumar"
                style={styles.profileImage(dark)}
              />
            </div>
            <h3
              style={{
                fontSize: "1.8rem",
                marginBottom: "15px",
                color: dark ? "#fff" : "#111",
              }}
            >
              Let’s Connect
            </h3>

            <p style={styles.infoLink(dark)}>
              <FaEnvelope style={styles.brandIcon} /> sanjaythadaka614@gmail.com
            </p>
            <p style={styles.infoLink(dark)}>
              <FaPhoneAlt style={styles.brandIcon} /> +91 72878 54839
            </p>

            <div style={styles.socials}>
              <a
                href="https://github.com/Sanjay-Kumar-Git"
                target="_blank"
                rel="noreferrer"
                style={styles.iconCircle(dark)}
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sanjay-kumar-thadaka/"
                target="_blank"
                rel="noreferrer"
                style={styles.iconCircle(dark)}
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={styles.form(dark)}
            onSubmit={sendEmail}
          >
            <div style={styles.inputGroup}>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                style={styles.input(dark)}
              />
            </div>

            <div style={styles.inputGroup}>
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                style={styles.input(dark)}
              />
            </div>

            <div style={styles.inputGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                style={styles.textarea(dark)}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              style={styles.button(dark, false)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundSize = "100% 100%";
                e.currentTarget.style.transform = "scaleY(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundSize = "100% 0%";
                e.currentTarget.style.transform = "scaleY(1)";
              }}
            >
              Send Message <FaPaperPlane style={{ marginLeft: "8px" }} />
            </motion.button>

            {status && <p style={{ marginTop: "10px" }}>{status}</p>}
          </motion.form>
        </div>
      </section>
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
    </div>
  );
};

const styles = {
  wrapper: (dark) => ({
    backgroundColor: dark ? "#0a0a0a" : "#ffffff",
    transition: "background-color 0.4s ease",
    minHeight: "100vh",
  }),

  section: (dark) => ({
    padding: "clamp(60px, 10vw, 100px) 20px",
    maxWidth: "1100px",
    margin: "0 auto",
    color: dark ? "#ffffff" : "#111111",
    transition: "color 0.4s ease",
  }),

  title: (dark) => ({
    textAlign: "center",
    fontSize: "clamp(2rem, 5vw, 2.8rem)",
    marginBottom: "10px",
    fontWeight: "800",
    color: dark ? "#ffffff" : "#111111",
  }),

  subtitle: (dark) => ({
    textAlign: "center",
    opacity: 0.7,
    fontSize: "1.1rem",
    maxWidth: "600px",
    margin: "0 auto 50px",
    color: dark ? "#cccccc" : "#555555",
  }),

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
  },

  imageContainer: {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "flex-start",
  },

  profileImage: (dark) => ({
    width: "80px",
    height: "80px",
    borderRadius: "20px",
    objectFit: "cover",
    border: dark ? "3px solid #2dbf64" : "3px solid #ffffff",
    boxShadow: dark
      ? "0 0 15px rgba(45, 191, 100, 0.3)"
      : "0 10px 20px rgba(0,0,0,0.1)",
    transition: "all 0.4s ease",
  }),

  infoBox: (dark) => ({
    padding: "40px",
    borderRadius: "24px",
    background: dark ? "rgba(255,255,255,0.05)" : "#f8f9fa",
    border: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid #eee",
    boxShadow: dark ? "none" : "0 10px 30px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.4s ease",
  }),

  infoLink: (dark) => ({
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "20px",
    fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
    color: dark ? "#eeeeee" : "#333333",
  }),

  brandIcon: {
    color: "#2dbf64",
    fontSize: "1.2rem",
  },

  socials: {
    display: "flex",
    gap: "16px",
    marginTop: "20px",
  },

  iconCircle: (dark) => ({
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    background: dark ? "rgba(255,255,255,0.1)" : "#e9ecef",
    color: dark ? "#ffffff" : "#111111",
    textDecoration: "none",
    transition: "0.3s all ease",
  }),

  form: (dark) => ({
    padding: "40px",
    borderRadius: "24px",
    background: dark ? "rgba(255,255,255,0.03)" : "#ffffff",
    border: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid #eee",
    boxShadow: dark ? "none" : "0 10px 30px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  }),

  inputGroup: { width: "100%" },

  input: (dark) => ({
    width: "100%",
    padding: "15px 18px",
    borderRadius: "12px",
    border: dark ? "1px solid #333" : "1px solid #ddd",
    outline: "none",
    background: dark ? "#1a1a1a" : "#fafafa",
    color: dark ? "#ffffff" : "#111111",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    boxSizing: "border-box",
  }),

  textarea: (dark) => ({
    width: "100%",
    padding: "15px 18px",
    borderRadius: "12px",
    border: dark ? "1px solid #333" : "1px solid #ddd",
    outline: "none",
    resize: "none",
    background: dark ? "#1a1a1a" : "#fafafa",
    color: dark ? "#ffffff" : "#111111",
    fontSize: "1rem",
    fontFamily: "inherit",
    transition: "all 0.3s ease",
    boxSizing: "border-box",
  }),

  button: (dark, active = false) => ({
    padding: "16px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
    position: "relative",
    overflow: "hidden",
    backgroundImage: active
      ? dark
        ? "linear-gradient(#ffffff, #ffffff)"
        : "linear-gradient(#2dbf64, #2dbf64)"
      : dark
      ? "linear-gradient(to top, #e81f1fff 100%, rgba(31, 203, 97, 0) 100%)"
      : "linear-gradient(to top, #2dbf64 100%, rgba(45,191,100,0) 100%)",
    backgroundSize: active ? "100% 100%" : "100% 0%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom center",
    backgroundColor: dark ? "#0f0f0f" : "#e5e5e5",
    color: active ? "#000" : dark ? "#ffffff" : "#000000",
    transition: `
      background-size 0.6s cubic-bezier(0.22, 1.4, 0.36, 1),
      transform 0.3s cubic-bezier(0.22, 1.4, 0.36, 1)
    `,
  }),
};

export default ContactSection;
