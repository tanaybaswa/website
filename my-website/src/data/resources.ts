export type Resource = {
  title: string;
  url: string;
  description: string;
};


export const resources: Resource[] = [
  {
    title: "AI Red Teaming with Azure PyRIT",
    url: "https://azure.github.io/PyRIT/index.html",
    description: "An open source python package for red teaming AI systems from Microsoft"
  },
  {
    title: "Google AI Red Teaming",
    url: "https://blog.google/technology/safety-security/googles-ai-red-team-the-ethical-hackers-making-ai-safer/",
    description: "Google's Approach to AI Red Teaming"
  },
  {
    title: "Google Safe AI Framework",
    url: "https://blog.google/technology/safety-security/introducing-googles-secure-ai-framework/",
    description: "Google's Safe AI Framework"
  },
  {
    title: "Understanding AI Harms",
    url: "https://cset.georgetown.edu/article/understanding-ai-harms-an-overview/",
    description: "An overview of AI harms from the Center for Security and Emerging Technology"
  },
  {
    title: "How to Red Team Generative AI",
    url: "https://hbr.org/2024/01/how-to-red-team-a-gen-ai-model",
    description: "A Harvard Business Review article on how to red team Gen AI and its importance"
  }
]; 