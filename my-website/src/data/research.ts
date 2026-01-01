export type ResearchPaper = {
  title: string;
  authors: string[];
  year: number;
  month?: number;
  link: string;
  citations?: number;
  blurb?: string;
};

export const researchPapers: ResearchPaper[] = [
  {
    title: "Sage-rt: Synthetic alignment data generation for safety evaluation and red teaming",
    authors: ["A Kumar", "D Kumar", "J Loya", "NA Birur", "T Baswa", "S Agarwal", "P Harshangi"],
    year: 2024,
    month: 11,
    link: "https://arxiv.org/abs/2408.11851",
    citations: 11,
    blurb: "We present SAGE-RT, a scalable synthetic pipeline that generates over 51,000 high-fidelity adversarial prompt and response pairs across 1,500 risk domains. Our work demonstrates how controlled synthetic variation exposes hidden vulnerabilities in frontier models, enabling deeper and more systematic AI safety evaluation."
  },
  {
    title: "No Free Lunch with Guardrails",
    authors: ["D Kumar", "NA Birur", "T Baswa", "S Agarwal", "P Harshangi"],
    year: 2025,
    month: 3,
    link: "https://arxiv.org/abs/2504.00441",
    citations: 3,
    blurb: "We challenge the assumption that safety guardrails can eliminate risk without consequence. Through extensive evaluation, we show that stronger safeguards inevitably affect usability, while weaker controls elevate risk. Our framework highlights the unavoidable trade space between security and utility and guides practical guardrail design."
  },
  {
    title: "Vera: Validation and enhancement for retrieval augmented systems",
    authors: ["NA Birur", "T Baswa", "D Kumar", "J Loya", "S Agarwal", "P Harshangi"],
    year: 2024,
    month: 2,
    link: "https://arxiv.org/abs/2409.15364",
    citations: 2,
    blurb: "We introduce VERA, a structured validation framework for Retrieval Augmented Generation systems. By auditing retrieved context and evaluating responses both pre and post retrieval, we significantly reduce hallucinations and enhance factual grounding, resulting in materially more reliable RAG pipelines."
  },
  {
    title: "Beyond Western Politics: Cross-Cultural Benchmarks for Evaluating Partisan Associations in LLMs",
    authors: ["D Kumar", "I Gupta", "NA Birur", "T Baswa", "S Agarwal", "P Harshangi"],
    year: 2025,
    month: 1,
    link: "https://arxiv.org/abs/2509.22711",
    citations: 1,
    blurb: "We extend political bias evaluation beyond Western contexts. By benchmarking models across both US and Indian political landscapes, we uncover culturally asymmetric partisan associations that existing evaluations miss. Our work underscores the need for globally aware bias testing."
  },
  {
    title: "Quantifying CBRN Risk in Frontier Models",
    authors: ["D Kumar", "NA Birur", "T Baswa", "S Agarwal", "P Harshangi"],
    year: 2025,
    link: "https://arxiv.org/abs/2510.21133",
    blurb: "We evaluate how modern language models respond to Chemical, Biological, Radiological, and Nuclear risk-related prompts, including obfuscated and indirect queries. Our findings reveal substantial variance in model resilience and demonstrate how subtle prompt modifications can bypass safeguards, motivating stronger standardized risk assessments."
  },
  {
    title: "Beyond Text: Multimodal Jailbreaking of Vision-Language and Audio Models through Perceptually Simple Transformations",
    authors: ["D Kumar", "S Jena", "NA Birur", "T Baswa", "S Agarwal", "P Harshangi"],
    year: 2025,
    link: "https://arxiv.org/abs/2510.20223",
    blurb: "We show that simple perceptual transformations in images and audio can induce high-confidence safety failures in multimodal models. Through thousands of adversarial evaluations, we highlight structural blind spots in current multimodal defenses and call for safety mechanisms that reason across modalities more holistically."
  },
  {
    title: "VERA: Validation and Enhancement for Retrieval Augmented systems",
    authors: ["N Aravind Birur", "T Baswa", "D Kumar", "J Loya", "S Agarwal", "P Harshangi"],
    year: 2024,
    link: "https://arxiv.org/abs/2409.15364",
    blurb: "We introduce VERA, a structured validation framework for Retrieval Augmented Generation systems. By auditing retrieved context and evaluating responses both pre and post retrieval, we significantly reduce hallucinations and enhance factual grounding, resulting in materially more reliable RAG pipelines."
  },
  {
    title: "Efficacy of the SAGE-RT Dataset for Model Safety Alignment: A Comparative Study",
    authors: ["T Baswa", "NA Birur", "D Kumar", "J Loya", "A Kumar", "P Harshangi", "S Agarwal"],
    year: 2024,
    link: "https://openreview.net/pdf?id=wl2vBu8jX4",
    blurb: "We empirically evaluate SAGE-RT as an alignment dataset and show that models fine-tuned on SAGE exhibit significantly improved safety performance while requiring less training data. Our results demonstrate the strength of synthetic red teaming data as a scalable pathway for safer model development."
  }
];

