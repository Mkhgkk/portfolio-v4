export type ExperienceEntry = {
  company: string;
  role: string;
  period: { start: string; end: string | "present" };
  location: string;
  website?: string;
  highlights: string[];
  tech: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "ConTi Lab",
    role: "Software Engineer",
    period: { start: "Sep 2025", end: "present" },
    location: "Seoul, Korea",
    highlights: [
      "Led system architecture design for a worker safety monitoring platform using computer vision",
      "Developed real-time object detection pipeline with DNN and TensorRT (GPU accelerated)",
      "Built React-based monitoring dashboard with WebRTC/MSE streaming supporting 10+ violation types",
      "Built auto-PTZ tracking feature to dynamically adjust camera angles based on detected objects",
      "Built intrusion area tracking for PTZ cameras to maintain security perimeters automatically",
      "Implemented REST API using Flask and built streaming server using for WebRTC/MSE real-time video streaming",
      "Designed microservices architecture with Docker for scalable deployment on NVIDIA GPU infrastructure",
    ],
    tech: [
      "Python",
      "React",
      "TypeScript",
      "Flask",
      "TensorRT",
      "YOLOv11",
      "WebRTC",
      "GStreamer",
      "Docker",
      "MediaMTX",
      "SocketIO",
    ],
  },
  {
    company: "Chung-Ang University",
    role: "Research Assistant",
    period: { start: "Aug 2023", end: "Aug 2025" },
    location: "Seoul, Korea",
    highlights: [
      "Conducted research on construction worker safety and fatigue monitoring systems",
      "Published 3 papers in Automation in Construction and Journal of IT in Construction",
      "Developed blockchain-based ZKP anonymous near-miss reporting system",
    ],
    tech: ["Python", "Blockchain", "Solidity", "ZoKrates", "Web3"],
  },
  {
    company: "Bugi Lab",
    role: "Founder & Technical Lead",
    period: { start: "Jul 2022", end: "Jul 2023" },
    location: "Remote",
    website: "https://bugilabs.com",
    highlights: [
      "Founded and led technical development of mobility solutions for the African market",
      "Led system architecture design and conducted market research to assess product-market fit",
      "Built Node.js backend with UDP server for real-time GPS device communication",
      "Implemented real-time communication via WebSockets; built Android client app",
    ],
    tech: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Mapbox",
      "Kotlin",
      "ML Kit",
      "Nginx",
      "SocketIO",
    ],
  },
  {
    company: "Thoughtworks China",
    role: "Graduate Training Bootcamp",
    period: { start: "Jan 2022", end: "Apr 2022" },
    location: "China",
    highlights: [
      "Completed intensive engineering bootcamp on agile practices and test-driven development",
      "Job offer extended upon completion",
    ],
    tech: ["Java", "TDD", "Agile", "React", "SQL"],
  },
];
