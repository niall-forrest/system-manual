export interface Project {
  slug: string;
  title: string;
  category: string;
  status: string;
  oneLiner: string;
  cardDescription: string;
  caseStudyHeading?: string;
  tags: string[];
  role: string;
  stack?: string;
  context: string;
  whatIDid: string;
  whatWasTricky?: string;
  whatChanged?: string;
  whereItLanded?: string;
  imageDirection?: string;
  confidentiality?: string;
  swatch: string;
}

export const projects: Project[] = [
  {
    slug: "ai-companion-apps",
    title: "AI Companion Apps",
    category: "AI Companion Apps",
    status: "Ongoing",
    oneLiner:
      "Designing and building AI companion products for nonprofits working in health, parenting, support, and care.",
    cardDescription:
      "AI companion products for nonprofits working in health, parenting, care, and support. Built around chat, onboarding, memory, and trusted content.",
    tags: ["AI", "Mobile", "RAG", "Nonprofit", "Health"],
    role: "Product design, AI architecture, full-stack engineering, mobile UX, retrieval systems",
    stack: "TypeScript, React Native, RAG, Postgres",
    context:
      "Nonprofits often hold deep expertise, trusted content, and strong community relationships, but their digital tools rarely match the nuance of the support they provide. These projects explore how AI can help extend that support without losing trust, safety, or human context.",
    whatIDid:
      "I work across the full product stack: shaping the user experience, designing onboarding flows, building chat interfaces, structuring knowledge retrieval, integrating memory, and thinking through analytics, consent, privacy, and App Store release requirements. Work includes products such as Ellis, built with Livestrong, Bonded by Baby, and other AI companion experiences that cannot currently be disclosed.",
    whereItLanded:
      "These products turn static support content into more personal, conversational experiences. The goal is not to replace expert guidance, but to make trusted information easier to access, understand, and return to at the moments people need it.",
    imageDirection:
      "Square mobile interface crops, chat cards, onboarding moments, calm product UI. Avoid stock healthcare imagery, blue gradients, doctors, or generic AI graphics.",
    confidentiality:
      "Some projects are public, while others remain confidential due to partner, health, or product-stage constraints.",
    swatch: "#0a0a0a",
  },
  {
    slug: "whitelabel-ai-platform",
    title: "Whitelabel AI Platform",
    category: "AI Platform",
    status: "Ongoing",
    oneLiner:
      "A whitelabel AI platform with embedded donation and membership experiences for 20+ nonprofits.",
    cardDescription:
      "An AI platform for nonprofits, combining retrieval, configurable product flows, and embedded donation and membership experiences.",
    tags: ["AI", "Platform", "Nonprofit", "Donations", "Membership"],
    role: "Product lead, systems architecture, UX design, full-stack engineering, AI workflow design",
    stack: "TypeScript, Next.js, RAG, Postgres, Stripe",
    context:
      "Many nonprofits need modern digital products, but they rarely have the budget or internal capacity to build and maintain custom software for every campaign, audience, or support journey. This platform is designed to give organisations flexible AI-powered tools that can be adapted across different missions, brands, and user needs.",
    whatIDid:
      "I work across the platform foundations: AI retrieval, configurable experiences, product flows, donation and membership journeys, analytics, content structures, and the interface patterns needed to support multiple organisations from one underlying system. This includes embedded donation flows, membership experiences, AI chat, knowledge retrieval, and tools that help organisations turn existing content into more useful digital interactions.",
    whereItLanded:
      "The platform gives nonprofits a faster way to launch useful AI and engagement products without starting from scratch each time. It also creates a more consistent foundation for experimentation, measurement, and iteration across multiple organisations.",
    imageDirection:
      "Abstract product system visuals: configurable blocks, donation cards, chat panels, source snippets, dashboard fragments, membership UI. Keep it structured and editorial rather than SaaS-dashboard-heavy.",
    confidentiality:
      "Some client names, platform details, and live deployments are not publicly disclosed.",
    swatch: "#1a1a1a",
  },
  {
    slug: "banana-block",
    title: "Banana Block",
    category: "Cultural Venue Website",
    status: "Live · Rebuild in progress",
    oneLiner:
      "Designed and developed the website for one of Belfast's leading cultural venues.",
    cardDescription:
      "A fast, events-led website for one of Belfast's leading cultural venues, built around live programming, venue hire, tenants, and mobile discovery.",
    caseStudyHeading:
      "A faster, clearer digital home for a living cultural venue.",
    tags: ["Web", "Culture", "Events", "Astro", "Sanity"],
    role: "Web design, front-end development, CMS architecture, performance, SEO, content modelling",
    stack: "Astro, Sanity, TypeScript",
    context:
      "Banana Block is a cultural venue in Belfast with a wide mix of events, tenants, markets, food, music, and community programming. The website needed to make that activity easier to discover and easier for the team to manage.",
    whatIDid:
      "I designed and developed a custom events-driven website focused on speed, accessibility, mobile usability, and simple content management. The site helped make events, spaces, tenants, and programming easier to find, while giving venue staff a more practical way to keep content up to date. I'm currently leading a full rebuild using Astro and Sanity CMS, replacing a legacy WordPress and Elementor setup with a faster, cleaner, and more maintainable architecture.",
    whatChanged:
      "The site has become a stronger digital front door for the venue. It improved visibility for event-space searches in Belfast, increased page views and interactions, and gave the team a more useful platform for live programming and venue activity.",
    imageDirection:
      "Bold square crops using venue photography, event listings, typographic blocks, programme cards, and CMS-driven event UI.",
    swatch: "#ff4f00",
  },
  {
    slug: "cronlet",
    title: "Cronlet.dev",
    category: "AI Infrastructure",
    status: "Live · In development",
    oneLiner: "Scheduling infrastructure for AI agents.",
    cardDescription:
      "Scheduling infrastructure for AI agents, giving them the ability to wait, resume, repeat, and act over time.",
    caseStudyHeading: "Giving AI agents a sense of time.",
    tags: ["AI", "Agents", "Infrastructure", "Scheduling", "Developer Tools"],
    role: "Product development, engineering, developer experience, positioning",
    stack: "TypeScript, Node, Postgres",
    context:
      "Most AI agents are built around immediate responses. They can answer, call tools, and complete tasks in the moment, but they do not naturally understand time. Cronlet explores the missing layer: scheduling infrastructure that lets agents operate across minutes, hours, days, and recurring workflows.",
    whatIDid:
      "I helped develop the product and positioning around scheduling infrastructure for AI agents: creating a developer-facing product that gives agents temporal capabilities such as reminders, delayed execution, recurring actions, and time-aware workflows.",
    whatChanged:
      "Cronlet gives agent builders a cleaner way to design AI systems that do not just respond instantly, but can return later, continue work, and behave more like persistent digital workers.",
    imageDirection:
      "Developer-focused visuals: terminal fragments, schedule timelines, agent task cards, cron-like syntax, event logs, and diagrams showing time-based agent execution.",
    swatch: "#0a0a0a",
  },
  {
    slug: "comkit",
    title: "Comkit",
    category: "Civic Health Toolkit",
    status: "Project · Toolkit",
    oneLiner:
      "An empathic communication toolkit for communities responding to heightened suicide concern.",
    cardDescription:
      "An empathic communication toolkit for families, communities, agencies, and representatives responding to heightened suicide concern.",
    caseStudyHeading:
      "Designing clearer communication for moments that need care.",
    tags: ["Health", "Civic", "UX", "Content", "Toolkit"],
    role: "Product design, UX, content structure, digital toolkit design",
    context:
      "During and after a period of heightened suicide activity, families, friends, communities, agencies, and representatives often need to communicate under intense emotional pressure. While guidance exists, it can be text-heavy, hard to navigate, and difficult to apply in the moment. That can lead to frustration, communication breakdown, unsafe messaging, and harmful memorialisation.",
    whatIDid:
      "I helped shape Comkit as an empathic communication toolkit: a clearer, more digestible way to support people in what to say, what to avoid, and how to communicate during a sensitive and high-stakes period. The work focused on making difficult guidance easier to understand, easier to access, and more useful for people who may be distressed, under pressure, or acting on behalf of others.",
    whereItLanded:
      "Comkit turns complex, emotionally sensitive guidance into a more practical support tool. It helps communities and agencies communicate with greater care, reducing the risk of confusion, unsafe messaging, and avoidable harm.",
    imageDirection:
      "Calm, structured content UI. Guidance cards, decision paths, what-to-say layouts, soft but serious typography. Avoid crisis imagery, dark visual clichés, or anything sensational.",
    swatch: "#2a2a2a",
  },
  {
    slug: "net-impact",
    title: "Net Impact",
    category: "Nonprofit Website",
    status: "Live",
    oneLiner:
      "Website redesign and development for a leading nonprofit network with 100,000+ members.",
    cardDescription:
      "A redesigned website for a 100,000+ member nonprofit network, improving structure, clarity, and digital presence.",
    caseStudyHeading: "A clearer web presence for a global impact network.",
    tags: ["Web", "Nonprofit", "UX", "CMS", "Membership"],
    role: "Web design, development, UX, content structure",
    context:
      "Net Impact is a large nonprofit network connecting people who want to use their careers for positive social and environmental impact. With a broad audience and a wide range of programmes, the website needed to communicate clearly without overwhelming visitors.",
    whatIDid:
      "I redesigned and developed key parts of the website experience, focusing on clearer structure, stronger visual hierarchy, easier navigation, and a more polished digital presence for a large membership organisation. The work balanced organisational credibility with a more accessible, action-oriented user experience for members, partners, and new visitors.",
    whatChanged:
      "The redesigned website helped present Net Impact's work with more clarity and confidence, making it easier for users to understand the organisation, explore programmes, and engage with the network.",
    imageDirection:
      "Editorial nonprofit web design: large typography, content modules, programme cards, member/community sections, and clean navigation.",
    swatch: "#ff4f00",
  },
  {
    slug: "boundary-london",
    title: "Boundary London",
    category: "Brand & Web",
    status: "Live",
    oneLiner:
      "Web design for an independent boutique model agency in London.",
    cardDescription:
      "A clean, editorial website for an independent boutique model agency, designed to keep the talent front and centre.",
    caseStudyHeading:
      "A restrained digital presence for a boutique model agency.",
    tags: ["Web", "Fashion", "Brand", "Editorial", "Design"],
    role: "Web design, visual direction, front-end development",
    context:
      "Boundary London is an independent boutique model agency representing new faces and established talent. The website needed to feel refined and editorial, while keeping the focus on the models themselves.",
    whatIDid:
      "I designed a stripped-back, image-led web experience with simple navigation, strong spacing, and a visual system that lets the talent photography carry the brand. The design avoids overworked interface details in favour of clarity, confidence, and restraint.",
    whatChanged:
      "The result is a quieter, more premium digital presence that gives the agency a clear identity while keeping the models front and centre.",
    imageDirection:
      "Use the model grid as the main visual reference: large square or portrait image crops, serif logo lockup, lots of white space, thin lines, restrained navigation.",
    swatch: "#0a0a0a",
  },
];

export const projectIndex = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return {
    current: projects[i],
    next: projects[(i + 1) % projects.length],
    prev: projects[(i - 1 + projects.length) % projects.length],
    number: String(i + 1).padStart(2, "0"),
    total: String(projects.length).padStart(2, "0"),
  };
};
