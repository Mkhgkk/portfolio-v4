export type PublicationStatus = "published" | "under-review";
export type AuthorRole = "first-author" | "second-author";

export type Publication = {
  id: string;
  title: string;
  journal: string;
  date: string;
  status: PublicationStatus;
  authorRole: AuthorRole;
  url?: string;
};

export const publications: Publication[] = [
  {
    id: "fatigue-monitoring",
    title:
      "Personalized Physical Fatigue Monitoring for Construction Workers: Incorporating Body Composition Data with Physiological Data",
    journal: "Safety Science",
    date: "Under Review",
    status: "under-review",
    authorRole: "first-author",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5113431",
  },
  {
    id: "zkp-nearmiss",
    title:
      "Integrated Zero-Knowledge Proof and Blockchain System for Privacy-Preserving Near-Miss Reporting in Construction Projects",
    journal: "Automation in Construction",
    date: "Dec 2024",
    status: "published",
    authorRole: "second-author",
    url: "https://doi.org/10.1016/j.autcon.2024.105825",
  },
  {
    id: "llm-safety",
    title:
      "Extracting Information from Construction Safety Requirements Using Large Language Model",
    journal: "Journal of Information Technology in Construction",
    date: "Dec 2024",
    status: "published",
    authorRole: "second-author",
    url: "https://dx.doi.org/10.36680/j.itcon.2024.045",
  },
];
