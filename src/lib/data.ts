export type CaseStudy = {
    slug: string;
    title: string;
    category: string;
    description: string;
    image: string;
    year: string;
    role: string;
    challenge: string;
    solution: string;
    impact: string;
};

export const caseStudies: CaseStudy[] = [
    {
        slug: "fintech-dashboard",
        title: "Fintech Dashboard Redesign",
        category: "SaaS • Fintech",
        description: "Redesigning a legacy financial platform to improve usability and data visualization for enterprise clients.",
        image: "/images/fintech.jpg",
        year: "2024",
        role: "Lead Product Designer",
        challenge: "The existing dashboard was cluttered, slow, and difficult for users to navigate, leading to high support ticket volume and low user satisfaction scores.",
        solution: "We implemented a modular widget-based system, simplified the navigation architecture, and introduced dark mode for data-heavy views. The new design focused on glanceability and actionability.",
        impact: "Reduced average time-to-task by 40% and decreased support tickets related to navigation by 65% within the first 3 months."
    },
    {
        slug: "ecommerce-app",
        title: "Fashion E-commerce App",
        category: "Mobile • Commerce",
        description: "Creating a seamless mobile shopping experience for a high-end fashion retailer with a focus on personalization.",
        image: "/images/ecommerce.jpg",
        year: "2023",
        role: "Senior UI/UX Designer",
        challenge: "The brand struggled with low mobile conversation rates and high cart abandonment due to a friction-heavy checkout process.",
        solution: "I introduced a one-click checkout flow, personalized product feeds based on browsing history, and an augmented reality 'Try On' feature.",
        impact: "Mobile conversion rate increased by 25% and average order value grew by 15%."
    },
    {
        slug: "healthcare-portal",
        title: "Patient Care Portal",
        category: "Healthcare • Web App",
        description: "Digital transformation of a patient intake and management system for a regional hospital network.",
        image: "/images/health.jpg",
        year: "2023",
        role: "Product Designer",
        challenge: "Patients were overwhelmed by complex forms and unclear status updates, while staff struggled with inefficient data entry.",
        solution: "We designed a step-by-step wizard for intake forms, a clear status timeline for patients, and a streamlined dashboard for staff.",
        impact: "Patient intake time reduced by 50% and administrative errors dropped by 30%."
    }
];
