export type ProjectCategory = "Backend" | "Full-Stack" | "Mobile";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  techStack: string[];
  featured: boolean; // We keep this so the code doesn't break, but set them all to false
  githubUrl?: string;
  liveUrl?: string;
  images: string[]; 
  features: string[];
}

export const projects: Project[] = [
  // 1. Loan Management (From CV)
  {
    id: "loan-management",
    title: "Loan Management System",
    description: "A loan management application with role-based access control, customer loan applications, approval workflows, interest and EMI calculations, loan disbursement and repayment tracking.",
    category: "Full-Stack",
    techStack: ["Java", "Spring Boot", "Spring Security", "MySQL", "jQuery", "AJAX", "Bootstrap"],
    featured: false,
    githubUrl: "https://github.com/Kaweesha7Anuhas", 
    images: [
      "Loan-Management-System/lms1.png", 
      "Loan-Management-System/lms2.png", 
      "Loan-Management-System/lms3.png", 
      "Loan-Management-System/lms4.png", 
      "Loan-Management-System/lms5.png"
    ],
    features: [
      "Role-based access control",
      "Approval workflows",
      "Interest and EMI calculations",
      "Repayment tracking",
    ],
  },
  // 2. Financial Transaction (From CV)
  {
    id: "financial-transaction",
    title: "Financial Transaction Management System",
    description: "A financial transaction management application supporting customer accounts, deposits, withdrawals, balance management, transaction history and financial reporting, with secure role-based access control.",
    category: "Full-Stack",
    techStack: ["Java", "Spring Boot", "Spring Security", "MySQL", "jQuery", "AJAX", "Bootstrap"],
    featured: false,
    githubUrl: "https://github.com/Kaweesha7Anuhas", 
    images: [
      "Financial-Transaction-Management-System/ftm1.png", 
      "Financial-Transaction-Management-System/ftm2.png", 
      "Financial-Transaction-Management-System/ftm3.png", 
      "Financial-Transaction-Management-System/ftm4.png", 
      "Financial-Transaction-Management-System/ftm5.png"
    ],
    features: [
      "Deposits and withdrawals",
      "Balance management",
      "Transaction history",
      "Financial reporting",
    ],
  },
  // 3. Employee Management (From CV)
  {
    id: "employee-management",
    title: "Employee Management System",
    description: "A web-based employee management application with employee registration, profile management, CRUD operations, search functionality and a responsive user interface using REST APIs.",
    category: "Full-Stack",
    techStack: ["Java", "Spring Boot", "MySQL", "jQuery", "AJAX", "Bootstrap"],
    featured: false,
    githubUrl: "https://github.com/Kaweesha7Anuhas", 
    images: ["Employee-Management-System/1.png"],
    features: [
      "Employee registration",
      "Profile management",
      "CRUD operations",
      "Search functionality",
    ],
  },
  // 4. Customer Management (From CV)
  {
    id: "customer-management",
    title: "Customer Management System",
    description: "A customer management application featuring customer profiles, contact information management, customer search, filtering and database integration through RESTful APIs.",
    category: "Full-Stack",
    techStack: ["Java", "Spring Boot", "MySQL", "jQuery", "AJAX", "Bootstrap"],
    featured: false,
    githubUrl: "https://github.com/Kaweesha7Anuhas", 
    images: ["Customer-Management-System/1.png"],
    features: [
      "Customer profiles",
      "Contact management",
      "Search and filtering",
      "RESTful API integration",
    ],
  },
  // 5. RideLink (From CV)
  {
    id: "ridelink",
    title: "RideLink – Microservices-Based Ride-Sharing Platform",
    description: "A Spring Boot microservices-based ride-sharing platform with Account, Driver & Vehicle, Ride Management, and Fare & Payment services, communicating through REST APIs.",
    category: "Backend",
    techStack: ["Java", "Spring Boot", "MongoDB", "H2", "MySQL", "JWT", "Swagger"],
    featured: false,
    githubUrl: "https://github.com/Kaweesha7Anuhas", 
    images: ["ridelink/1.png", "ridelink/2.png", "ridelink/3.png", "ridelink/4.png", "ridelink/5.png"],
    features: [
      "Microservices architecture",
      "Account and Driver management",
      "Ride Management and Fare calculation",
      "REST API communication",
      "JWT Authentication",
    ],
  },
  // 6. Sadareka Bakery POS (From CV)
  {
    id: "sadareka-pos",
    title: "Sadareka Bakery POS System",
    description: "A full-stack bakery POS system featuring product management, sales, payments, reporting, PDF receipts, and thermal printer integration.",
    category: "Full-Stack",
    techStack: ["Java", "Spring Boot", "MySQL", "React", "React Native"],
    featured: false,
    githubUrl: "https://github.com/Kaweesha7Anuhas", 
    images: ["sadareka/1.png", "sadareka/2.png", "sadareka/3.png"],
    features: [
      "Product management",
      "Sales and payments tracking",
      "Reporting dashboard",
      "PDF receipt generation",
      "Thermal printer integration",
    ],
  },
];