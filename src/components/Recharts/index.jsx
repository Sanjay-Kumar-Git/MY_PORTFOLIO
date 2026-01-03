import React, { useState, useEffect } from "react"
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis,
  RadialBarChart, RadialBar,
  ResponsiveContainer, Cell
} from "recharts"

const skillsData = [
  { skill: "JavaScript", value: 9, level: "Expert", desc: "ES6+, Async, DOM" },
  { skill: "React", value: 9, level: "Advanced", desc: "Hooks, Context, Redux" },
  { skill: "HTML", value: 9, level: "Expert", desc: "Semantic, SEO, A11y" },
  { skill: "CSS", value: 8, level: "Advanced", desc: "Flex, Grid, Animations" },
  { skill: "Python", value: 7, level: "Intermediate", desc: "Scripting, Django" },
  { skill: "Node.js", value: 7, level: "Intermediate", desc: "Express, REST APIs" },
  { skill: "MongoDB", value: 6, level: "Intermediate", desc: "NoSQL, Aggregation" },
  { skill: "SQL", value: 7, level: "Intermediate", desc: "PostgreSQL, Joins" },
]

const tabs = [
  { key: "bars", label: "Skill Bars", info: "Comparison view" },
  { key: "radar", label: "Radar View", info: "Knowledge distribution" },
  { key: "circles", label: "Skill Circles", info: "Individual focus" },
]

const CustomTooltip = ({ active, payload, dark }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div style={styles.tooltip(dark)}>
        <p style={{ margin: 0, fontWeight: 700, color: dark? '#9cff57' : '#09f26aff' }}>{data.skill}</p>
        <p style={{ margin: "4px 0", fontSize: "0.85rem" }}>Level: <b>{data.level}</b> ({data.value}/10)</p>
        <p style={{ margin: 0, fontSize: "0.75rem", opacity: 0.7 }}>{data.desc}</p>
      </div>
    );
  }
  return null;
};


const SkillsPage = ({ dark = true }) => {
  const [activeTab, setActiveTab] = useState("bars")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check();
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return (
    <section style={styles.section(dark)}>
      <h2 style={{ ...styles.title, color: dark ? "#fff" : "#111" }}>
        Technical <span style={{ color: dark? '#9cff57' : '#09f26aff' }}>Proficiency</span>
      </h2>
      <p style={styles.subtitle}>
        A visual breakdown of my technical stack and expertise levels
      </p>

      <div style={styles.tabsContainer}>
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={styles.tabButton(activeTab === tab.key, dark)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={styles.contentBox(dark, isMobile)}>
        {activeTab === "bars" && <SkillBars dark={dark} isMobile={isMobile} />}
        {activeTab === "radar" && <SkillRadar dark={dark} />}
        {activeTab === "circles" && <SkillCircles dark={dark} />}
      </div>

      <p style={styles.disclaimer}>
        *Click on bars or circles to see specific sub-skill details.
      </p>
    </section>
  )
}


const SkillBars = ({ dark, isMobile }) => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={skillsData} layout="vertical" margin={{ left: isMobile ? -20 : 20, right: 30 }}>
      <XAxis type="number" domain={[0, 10]} hide />
      <YAxis
        dataKey="skill"
        type="category"
        width={isMobile ? 80 : 100}
        tick={{ fill: dark ? "#ccc" : "#444", fontSize: isMobile ? 11 : 13, fontWeight: 500 }}
        axisLine={false}
        tickLine={false}
      />
      <Tooltip content={<CustomTooltip dark={dark} />} cursor={{ fill: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)" }} />
      <Bar dataKey="value" fill={dark? '#9cff57' : '#09f26aff'} barSize={isMobile ? 18 : 24} radius={[0, 10, 10, 0]} animationDuration={1000}>
        {skillsData.map((entry, index) => (
          <Cell key={`cell-${index}`} fillOpacity={0.8 + (entry.value / 10) * 0.2} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
)

const SkillRadar = ({ dark }) => (
  <ResponsiveContainer width="100%" height={400}>
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
      <PolarGrid stroke={dark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"} />
      <PolarAngleAxis dataKey="skill" tick={{ fill: dark ? "#bbb" : "#555", fontSize: 12, fontWeight: 600 }} />
      <PolarRadiusAxis domain={[0, 10]} tick={false} axisLine={false} />
      <Radar
        name="Skills"
        dataKey="value"
        stroke={dark? '#9cff57' : '#09f26aff'}
        fill={dark? '#9cff57' : '#09f26aff'}
        fillOpacity={0.6}
        animationDuration={1200}
      />
      <Tooltip content={<CustomTooltip dark={dark} />} />
    </RadarChart>
  </ResponsiveContainer>
)

const SkillCircles = ({ dark }) => (
  <div style={styles.circleGrid}>
    {skillsData.map(skill => (
      <div key={skill.skill} style={{ textAlign: "center", transition: "transform 0.3s ease" }}>
        <div style={{ width: 110, height: 110, margin: "0 auto", position: "relative" }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart innerRadius="85%" outerRadius="100%" data={[{ value: skill.value }]} startAngle={90} endAngle={-270}>
              <RadialBar dataKey="value" fill={dark? '#9cff57' : '#09f26aff'} background={{ fill: dark ? "rgba(255,255,255,0.05)" : "#eee" }} cornerRadius={10} />
            </RadialBarChart>
          </ResponsiveContainer>
          <div style={styles.circleValue}>{skill.value * 10}%</div>
        </div>
        <p style={styles.circleLabel}>{skill.skill}</p>
        <span style={styles.circleSubtext}>{skill.level}</span>
      </div>
    ))}
  </div>
)


const styles = {
  section: dark => ({
    padding: "80px 5vw",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
    color: dark ? "#fff" : "#111",
    fontFamily: "'Inter', sans-serif",
  }),
  title: { fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, marginBottom: "12px" },
  subtitle: { opacity: 0.6, fontSize: "1.05rem", marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px" },
  tabsContainer: { display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "40px" },
  tabButton: (active, dark) => ({
    padding: "10px 20px",
    borderRadius: "12px",
    border: "none",
    background: active ? "#2dbf64" : dark ? "rgba(255,255,255,0.08)" : "#f0f0f0",
    color: active ? "#fff" : dark ? "#aaa" : "#666",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxShadow: active ? "0 4px 15px rgba(45,191,100,0.4)" : "none",
  }),
  contentBox: (dark, isMobile) => ({
    minHeight: isMobile ? "auto" : "500px",
    padding: isMobile ? "20px 10px" : "40px",
    borderRadius: "24px",
    background: dark ? "#141414" : "#fff",
    border: dark ? "1px solid #222" : "1px solid #eaeaea",
    boxShadow: dark ? "0 30px 60px rgba(0,0,0,0.4)" : "0 20px 50px rgba(0,0,0,0.05)",
    display: "flex",
    alignItems: "center",
  }),
  tooltip: dark => ({
    background: dark ? "#222" : "#fff",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #333",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    textAlign: "left"
  }),
  circleGrid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
    gap: "25px",
  },
  circleValue: {
    position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
    fontSize: "1rem", fontWeight: 800, color: "#2dbf64"
  },
  circleLabel: { marginTop: "10px", fontSize: "0.9rem", fontWeight: 700, marginBottom: "2px" },
  circleSubtext: { fontSize: "0.7rem", opacity: 0.5, textTransform: "uppercase", letterSpacing: "1px" },
  disclaimer: { marginTop: "30px", fontSize: "0.8rem", opacity: 0.4 }
}

export default SkillsPage