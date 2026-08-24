export type ResourceCategory = "News" | "Writing & Talks" | "Research & Policy";

export type Resource = {
  title: string;
  url: string;
  description: string;
  source: string;
  date?: string;
  category: ResourceCategory;
};

/** Section order on the resources page */
export const resourceCategories: ResourceCategory[] = [
  "News",
  "Writing & Talks",
  "Research & Policy",
];

export const resources: Resource[] = [
  {
    title: "Anaconda Acquires Enkrypt AI to Secure the Trillion-Token Enterprise",
    url: "https://www.anaconda.com/press/anaconda-acquires-enkrypt-ai",
    source: "Anaconda",
    date: "August 2026",
    category: "News",
    description: "Enkrypt AI, where I was the first hire, has been acquired by Anaconda. The model, agent, and MCP security work we built now sits inside the Anaconda platform."
  },
  {
    title: "NeurIPS 2025: Scale, Benchmarks, and the Signals We Should Be Paying Attention To",
    url: "https://www.enkryptai.com/blog/neurips-2025-scale-benchmarks-security-signals",
    source: "Enkrypt AI",
    date: "January 2026",
    category: "Writing & Talks",
    description: "My notes from NeurIPS 2025 on what a 29,000-person conference says about AI as infrastructure: sharper scrutiny of benchmarks, and a shift from chasing perfect security toward engineering reliability."
  },
  {
    title: "A Developer's Guide to AI Safety & Security",
    url: "https://www.youtube.com/watch?v=78WcJyxj0To",
    source: "G2i",
    date: "Video",
    category: "Writing & Talks",
    description: "A session I ran with G2i on real AI security failures, prompt injection as the new SQL injection, and red teaming, including a live build of a chatbot with working guardrails."
  },
  {
    title: "Protecting your intellectual property and AI models using Confidential Containers",
    url: "https://www.redhat.com/en/blog/protecting-your-intellectual-property-and-ai-models-using-confidential-containers",
    source: "Red Hat",
    date: "October 2023",
    category: "Writing & Talks",
    description: "A Red Hat engineering post I co-authored on running models inside confidential containers, so model weights and user data stay protected from the host in the public cloud."
  },
  {
    title: "Promoting Advanced Artificial Intelligence Innovation and Security",
    url: "https://www.whitehouse.gov/presidential-actions/2026/06/promoting-advanced-artificial-intelligence-innovation-and-security/",
    source: "The White House",
    date: "June 2026",
    category: "Research & Policy",
    description: "Executive Order 14409, which sets US policy on frontier model security: classified capability benchmarking, pre-release federal access to covered frontier models, and coordinated AI vulnerability discovery."
  },
  {
    title: "The LLM Mirage: Economic Interests and the Subversion of Weaponization Controls",
    url: "https://dl.acm.org/doi/epdf/10.1145/3805689.3806538",
    source: "ACM FAccT '26",
    date: "June 2026",
    category: "Research & Policy",
    description: "Our FAccT paper on why compute thresholds are a poor proxy for weaponization risk, since task-specific systems reach dangerous capability with specialized data and commodity hardware."
  },
  {
    title: "Beyond Spam Bots: The Rise of AI-Powered Disinformation Machines",
    url: "https://stratcomcoe.org/publications/beyond-spam-bots-the-rise-of-ai-powered-disinformation-machines-and-the-imperative-for-strategic-response/342",
    source: "NATO StratCom COE",
    date: "April 2026",
    category: "Research & Policy",
    description: "A NATO Strategic Communications Centre of Excellence report on AI-driven influence operations, contributed to by Enkrypt AI, showing how stripped-down open models make industrial-scale disinformation cheap to run."
  },
  {
    title: "Beyond Text: Multimodal Jailbreaking of Vision-Language and Audio Models",
    url: "https://ui.adsabs.harvard.edu/abs/arXiv:2510.20223/abstract",
    source: "Harvard ADS",
    date: "October 2025",
    category: "Research & Policy",
    description: "Our multimodal jailbreaking paper, indexed on Harvard's Astrophysics Data System: perceptually simple transformations of images and audio break safety behavior in vision-language and audio models."
  },
  {
    title: "Jamba 1.5a: Enhancing AI Safety Through Post-Post-Training Alignment",
    url: "https://www.ai21.com/research/jamba-1-5a/",
    source: "AI21 Labs",
    date: "April 2025",
    category: "Research & Policy",
    description: "AI21's safety-aligned release of Jamba, co-developed with Enkrypt AI, which cut risk while preserving core model performance."
  }
];
