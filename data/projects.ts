export type ProjectCategory = "Backend" | "Full-Stack" | "Mobile";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  techStack: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  imagePlaceholder: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: "ridelink",
    title: "RideLink – Microservices-Based Ride-Sharing Platform",
    description: "A Spring Boot microservices-based ride-sharing platform with Account, Driver & Vehicle, Ride Management, and Fare & Payment services, communicating through REST APIs.",
    category: "Backend",
    techStack: ["Java", "Spring Boot", "MongoDB", "H2", "MySQL", "JWT", "Swagger"],
    featured: true,
    githubUrl: "https://github.com/kaweesha-anuhas", // Placeholder
    imagePlaceholder: "ridelink.png",
    features: [
      "Microservices architecture",
      "Account and Driver management",
      "Ride Management and Fare calculation",
      "REST API communication",
      "JWT Authentication",
    ],
  },
  {
    id: "sadareka-pos",
    title: "Sadareka Bakery POS System",
    description: "A full-stack bakery POS system featuring product management, sales, payments, reporting, PDF receipts, and thermal printer integration.",
    category: "Full-Stack",
    techStack: ["Java", "Spring Boot", "MySQL", "React", "React Native"],
    featured: true,
    githubUrl: "https://github.com/kaweesha-anuhas", // Placeholder
    imagePlaceholder: "sadareka.png",
    features: [
      "Product management",
      "Sales and payments tracking",
      "Reporting dashboard",
      "PDF receipt generation",
      "Thermal printer integration",
    ],
  },
  {
    id: "loan-management",
    title: "Loan Management System",
    description: "A loan management application with role-based access control, customer loan applications, approval workflows, interest and EMI calculations, loan disbursement and repayment tracking.",
    category: "Full-Stack",
    techStack: ["Java", "Spring Boot", "Spring Security", "MySQL", "jQuery", "AJAX", "Bootstrap"],
    featured: false,
    githubUrl: "https://github.com/kaweesha-anuhas", // Placeholder
    imagePlaceholder: "loan.png",
    features: [
      "Role-based access control",
      "Approval workflows",
      "Interest and EMI calculations",
      "Repayment tracking",
    ],
  },
  {
    id: "financial-transaction",
    title: "Financial Transaction Management System",
    description: "A financial transaction management application supporting customer accounts, deposits, withdrawals, balance management, transaction history and financial reporting, with secure role-based access control.",
    category: "Full-Stack",
    techStack: ["Java", "Spring Boot", "Spring Security", "MySQL", "jQuery", "AJAX", "Bootstrap"],
    featured: false,
    githubUrl: "https://github.com/kaweesha-anuhas", // Placeholder
    imagePlaceholder: "finance.png",
    features: [
      "Deposits and withdrawals",
      "Balance management",
      "Transaction history",
      "Financial reporting",
    ],
  },
  {
    id: "employee-management",
    title: "Employee Management System",
    description: "A web-based employee management application with employee registration, profile management, CRUD operations, search functionality and a responsive user interface using REST APIs.",
    category: "Full-Stack",
    techStack: ["Java", "Spring Boot", "MySQL", "jQuery", "AJAX", "Bootstrap"],
    featured: false,
    githubUrl: "https://github.com/kaweesha-anuhas", // Placeholder
    imagePlaceholder: "employee.png",
    features: [
      "Employee registration",
      "Profile management",
      "CRUD operations",
      "Search functionality",
    ],
  },
  {
    id: "customer-management",
    title: "Customer Management System",
    description: "A customer management application featuring customer profiles, contact information management, customer search, filtering and database integration through RESTful APIs.",
    category: "Full-Stack",
    techStack: ["Java", "Spring Boot", "MySQL", "jQuery", "AJAX", "Bootstrap"],
    featured: false,
    githubUrl: "https://github.com/kaweesha-anuhas", // Placeholder
    imagePlaceholder: "customer.png",
    features: [
      "Customer profiles",
      "Contact management",
      "Search and filtering",
      "RESTful API integration",
    ],
  },
];