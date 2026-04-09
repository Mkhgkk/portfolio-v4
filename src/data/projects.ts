export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  highlight?: string;
  /** Path relative to /public, e.g. "/assets/projects/isafe-guard.png" */
  image?: string;
};

export const projects: Project[] = [
  {
    id: "isafe-guard",
    title: "iSafe-guard",
    description:
      "Worker safety monitoring platform using computer vision for job-sites. Real-time object detection pipeline with DNN, WebRTC/MSE streaming dashboard, and auto-PTZ camera tracking.",
    tech: [
      "Flask",
      "React",
      "MongoDB",
      "TensorRT",
      "SocketIO",
      "Python",
      "TypeScript",
      "FFmpeg",
      "GStreamer",
      "Docker",
      "WebRTC",
    ],
    featured: true,
    // image: "/assets/projects/isafe-guard.png",
  },
  {
    id: "isafe-nearmiss",
    title: "iSafe NearMiss",
    description:
      "Blockchain-based near-miss reporting system for construction workers using Zero-Knowledge Proofs for enhanced anonymity. Includes ZKP-based Chrome extension for secure authentication.",
    tech: ["React", "Web3", "ZoKrates", "Solidity"],
    featured: true,
  },
  {
    id: "bugitrack",
    title: "Bugitrack",
    description:
      "Real-time vehicle tracking platform designed for the African logistics market. GPS device integration via UDP, real-time WebSocket updates, and a React Native mobile client.",
    tech: ["React Native", "Mapbox", "SocketIO", "MongoDB", "Node.js", "Nginx"],
    liveUrl: "https://bugitrack.bugilabs.com",
    featured: true,
  },
  {
    id: "bugi-vocha",
    title: "Bugi Vocha",
    description:
      "Android app that uses ML Kit to automatically recognize and input voucher numbers from photos. Proven usefulness with 27,000+ downloads on the Google Play Store.",
    tech: ["Android SDK", "Kotlin", "ML Kit"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.emmachalz.bugivocha",
    highlight: "27K+ downloads",
    featured: true,
  },
];
