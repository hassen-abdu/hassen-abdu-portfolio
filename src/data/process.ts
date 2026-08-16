import { ProcessStep } from "../types";

export const processStepsData: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description: "I meet with you to understand your business goals, target audience, required features, and technical scope.",
    deliverable: "Clear functional requirements & project scope outline"
  },
  {
    step: "02",
    title: "Planning",
    description: "Structuring system architecture, database schemas, user roles, navigation flow, and selecting optimal technologies.",
    deliverable: "System architecture plan & technical strategy"
  },
  {
    step: "03",
    title: "Design",
    description: "Crafting modern, accessible, and responsive visual interfaces aligned with your brand identity.",
    deliverable: "Interactive design direction & layout component structure"
  },
  {
    step: "04",
    title: "Development",
    description: "Writing clean frontend UI components, integrating cloud backend services, auth flows, and custom admin control panels.",
    deliverable: "Functional frontend and connected backend codebase"
  },
  {
    step: "05",
    title: "Security & Testing",
    description: "Validating user permissions, testing database security rules, cross-device responsiveness, and form inputs.",
    deliverable: "Tested application with verified auth and database protection"
  },
  {
    step: "06",
    title: "Deployment",
    description: "Deploying the complete web application to cloud hosting, configuring custom domains, and delivering final handover docs.",
    deliverable: "Live web system & post-launch support"
  }
];
