export type CaseStudyMeta = {
  role: string;
  client?: string;
  employer?: string;
  areas: string;
  /** Team context: who else designed, who PM/Eng were, what you owned */
  teamScope?: string;
};

export type CaseStudySection = {
  image?: string;
  caption?: string;
  title: string;
  body: string;
  /** When present and length > 1, section uses ImageCarousel instead of single image */
  images?: string[];
  /** When present, section uses BeforeAfterImage slider with old (before) and new (after) images */
  beforeAfter?: { old: string; new: string };
  /** Optional intro line shown above the problems grid */
  intro?: string;
  /** When present, section renders as a 2x2 grid with X icons (title + body per problem) */
  problems?: { title: string; body: string }[];
  /** Optional paragraph shown after the problems grid */
  bodyTail?: string;
  /** When present, section renders as a 2x2 grid with checkmark icons (title + body per outcome) */
  outcomes?: { title: string; body: string }[];
  /** When "design-response", renders a two-column layout: text + smaller image side-by-side */
  layout?: "design-response";
  /** For design-response layout: "left" | "right" - which side the image appears on */
  imagePosition?: "left" | "right";
};

export type CaseStudyImpact = {
  outcomes?: { title: string; body: string }[];
  /** e.g. "Measured via analytics and user surveys over 6 weeks post-launch" */
  measurement?: string;
};

export type CaseStudy = {
  slug: string;
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  meta: CaseStudyMeta;
  cardImage: string;
  themeColor: string;
  sections: CaseStudySection[];
  impact?: CaseStudyImpact;
};

export type SelectedWorkItem = {
  title: string;
  client: string;
  description: string;
  year: string;
  scope: string;
  platform: string;
  href: string;
  image: string;
  themeColor: string;
  slug: string;
};

const CASE_STUDIES: Record<string, CaseStudy> = {
  coenterprise: {
    slug: "coenterprise",
    hero: {
      title: "CoEnterprise",
      subtitle: "Leading design for Syncrofy and supply chain analytics",
      description:
        "Leading product design and strategy for Syncrofy—supply chain analytics tools used daily by Fortune 500 companies. Setting product direction, defining north star metrics, and shipping features that help enterprises track goods and information.",
    },
    meta: {
      role: "Lead Designer",
      employer: "CoEnterprise",
      areas: "Product Strategy, Design, Analytics",
      teamScope: "Lead designer; setting product direction and strategy for Syncrofy. Partnered with product, engineering, and stakeholders.",
    },
    cardImage: "/images/projectimages/syncrofymain.avif",
    themeColor: "#334155",
    impact: {
      outcomes: [
        { title: "Product strategy and roadmap.", body: "Defining product direction, north star metrics, and roadmap tradeoffs for supply chain analytics." },
        { title: "Enterprise tool adoption.", body: "Designing analytics tools that Fortune 500 companies use daily to track goods and information." },
      ],
      measurement: "Track adoption and usage; full outcomes to be added as metrics become available.",
    },
    sections: [
      {
        title: "Problem framing",
        body: "CoEnterprise is the company; Syncrofy is the product. CoEnterprise builds Syncrofy—supply chain analytics tools for Fortune 500 companies. The challenge: help enterprises track goods and information across complex, multi-party supply chains—while delivering a cohesive product experience that scales with user needs.",
      },
      {
        title: "Strategy and roadmap",
        body: "As Lead Designer I set product direction and strategy: defining north star metrics, prioritizing roadmap tradeoffs, and aligning cross-functional teams. This section will be expanded with specific decisions, tradeoffs, and what shipped.",
      },
      {
        title: "What shipped",
        body: "Features and improvements to supply chain analytics tools, used daily by enterprise customers. Add specific screens, flows, and outcomes as you document this work.",
      },
      {
        title: "Reflection",
        body: "Leading design at CoEnterprise has reinforced the importance of aligning strategy with execution—and of designing for complexity while keeping the user experience clear and actionable.",
      },
    ],
  },
  clay: {
    slug: "clay",
    hero: {
      title: "Clay Home",
      subtitle: "Creating a home base for a programming and schematic design application",
      description:
        "The Clay app was developed to streamline collaborative office renovation projects for Google, integrating various disparate applications into a cohesive platform. By establishing intuitive navigation, robust search functionality, and version control capabilities inspired by Google Drive, the home feature provides a seamless experience for Project Executives, Analysts, architects, and interior designers.",
    },
    meta: {
      role: "Product Designer",
      client: "Google REWS",
      employer: "Outer Labs",
      areas: "Design, Discovery, Strategy",
      teamScope: "First designer on Clay; collaborated with product, engineering, and designers from previously disconnected applications.",
    },
    cardImage: "/images/projectimages/claymain.avif",
    themeColor: "#94a3b8",
    impact: {
      outcomes: [
        { title: "Unified navigation model.", body: "Projects and Studies structure replaced fragmented app boundaries, enabling users to move seamlessly across programming, design, and financial planning." },
        { title: "Faster study discovery.", body: "Search and metadata cues help users find the right study or project without manual browsing." },
      ],
      measurement: "Validated through user research and internal workshops with Project Executives, Analysts, and design partners.",
    },
    sections: [
      {
        image: "/images/clay_combined.png",
        caption: "Multiple apps that are being combined into Clay",
        title: "Background",
        body: "Clay is a tool developed for Google allowing Project Executives to more easily plan and develop office renovation projects in-house, and then seamlessly hand-off to their external design teams. As a sort in between spreadsheets and the drawing board of CAD or Revit, there are multiple stages a project can move through, and multiple types of studies a user can create for a project. Clay home is where a user can find metadata about these studies and access their desired work. Clay is an amalgamation of a series of previously disparate applications that are all accomplishing similar work in parallel. Clay is intended to help a variety of users (Project Executives, Project Analysts, architects, interior designers, etc) streamline their collaborative process together.",
      },
      {
        image: "/images/clay_home.gif",
        caption: "Boundaries between services, tools, and users",
        title: "Initial discovery",
        body: "The first step for the team was to understand the underlying structure and connections between different studies, and establish boundaries between them. Some of the app structure is based off of pre-existing work, and some new, so there was a lot of discovery involved in how a user should move through the different Clay experiences. I worked very closely with product and engineering in this exploration process.",
      },
      {
        image: "/images/clay_project.png",
        caption: "Project page with all of its studies shown.",
        title: "Approach",
        body: "The primary goals for this design was to provide an intuitive platform where new users could easily understand how and what they could access, and existing users could quickly find where they left off. As we got further into understanding the boundaries between different states within Clay, it became clear that Google Drive would be a very helpful precedent. Like Drive, Clay has a variety of types of work a user can accomplish. Unlike Drive, the different \"files\" are interlinked and interdependent.",
      },
      {
        image: "/images/clay_study.png",
        caption: "Study details side panel with metadata",
        title: "App structure",
        body: "As the first designer specifically on Clay, I worked to bring together the work that other designers were working on previously disconnected applications. We developed a language of Projects and Studies to organize the work, and establish boundaries between different aspects of the programming, designing, and financial planning.",
      },
      {
        image: "/images/clay_search.png",
        caption: "Searching for resources (study, user, project)",
        title: "Search",
        body: "In addition to simple navigation, the search feature is a valuable tool that allows a user to quickly find what they want to work with by searching based on a variety of parameters. Including some visual cues about metadata for search results also allows a user to more quickly key in on their desired study or project.",
      },
      {
        image: "/images/clay_versioning.gif",
        caption: "Versioning flow both in the home screen and in the tool",
        title: "Versioning",
        body: "Allowing users to see work progress and go back in time if needed gives users confidence to make changes and test different ideas. Again, I heavily referred to Google Drive (especially Docs) as a driving model. Users can flip back through to quickly see changes, and have an indication of where changes were made.",
      },
    ],
  },
  lighthouse: {
    slug: "lighthouse",
    hero: {
      title: "Lighthouse",
      subtitle: "Enhancing real estate demand modeling for Google's global office portfolio",
      description:
        "Lighthouse is a web-based application designed to model all of Google's global office space 10 years into the future. Built to meet the needs of real estate planners and analysts at Google Real Estate and Workplace Services (REWS), it transitions their workflows from a spreadsheet-based system to a more robust and user-friendly web-based platform. The result? Lighthouse enabled 50% faster report generation for the planners and forecasters.",
    },
    meta: {
      role: "Product Designer",
      client: "Google",
      employer: "Outer Labs",
      areas: "Design, Strategy",
      teamScope: "Sole designer; partnered with product and engineering. User research with Google planners informed prioritization.",
    },
    cardImage: "/images/projectimages/lhmain.avif",
    themeColor: "#64748b",
    impact: {
      measurement: "50% faster report generation measured via planner time-tracking and feedback over the first 3 months post-launch.",
    },
    sections: [
      {
        image: "/images/lh_vid.gif",
        caption: "Lighthouse application demonstration",
        title: "Overview",
        body: "Lighthouse is a web-based application designed to model all of Google's global office space 10 years into the future. Built to meet the needs of real estate planners and analysts at Google Real Estate and Workplace Services (REWS), it transitions their workflows from a spreadsheet-based system to a more robust and user-friendly web-based platform. The result? Lighthouse enabled 50% faster report generation for the planners and forecasters, transforming how Google manages hundreds of millions of square feet of office space worldwide.",
      },
      {
        image: "/images/lh_TPP.png",
        caption: "Existing tool that Google planners use (Sheets)",
        title: "Background (Spreadsheet mania)",
        body: "Currently Google models their hundreds of millions of square feet of global office space and millions of employees in a collection of Google Sheets files. The global group of planners who are modeling supply and demand scenarios to study long-term requirements of office space needed a more streamlined, consistent, and fast approach. Pain points included: infinitely configurable (no guardrails), lack of automation (tedious, manual process), no data hierarchy and minimal organization, and no filtering available.",
      },
      {
        image: "/images/lh_view.png",
        caption: "Side panel allowing users to quickly show & hide relevant data",
        title: "Approach",
        body: "With two primary goals—streamlining modeling processes and improving data visualization—I took the following approach: Mapped Existing Pain Points by conducting user research with Google planners to understand the workflow and prioritize solutions. Simplified Operations by designing a logical set of operations to enable consistent forecasting and scenario modeling. Crafted Visual Hierarchy & Feedback so interfaces highlighted data relationships, recent changes, and high-level insights at a glance.",
      },
      {
        image: "/images/lh_dataheirarchy.png",
        caption: "Clear data hierarchy",
        title: "Clear data hierarchy",
        body: "Organized structure for complex planning data.",
      },
      {
        image: "/images/lh_filtering.png",
        caption: "Global and local filtering",
        title: "Global & local filtering",
        body: "Flexible filtering and sorting at multiple levels.",
      },
      {
        image: "/images/lh_logic.png",
        caption: "Simple customization logic",
        title: "Simple & powerful logic",
        body: "Intuitive customization without complexity.",
      },
      {
        image: "/images/lh_visualcues.png",
        caption: "Visual cues for customizations",
        title: "Visual cues",
        body: "Clear indicators for customizations and changes.",
      },
      {
        image: "/images/lh_designsystem.png",
        caption: "Design system components",
        title: "Design system",
        body: "I was working within the Google Material design system, with a specific UI overlay on top of the default Material 2 library for REWS products. This system was not fully fleshed out, so throughout the course of development I had to create and manage some additional components. Because of very tight build timelines, all of the components used had to be rigorously consistent with what is available in the existing Angular and React libraries.",
      },
      {
        image: "/images/lh_initial.png",
        caption: "Prototype showing a user making a forecast growth modification",
        title: "Impact & results",
        body: "The Lighthouse application introduced several significant improvements: Automated Calculations—blended sharing ratios are now automatically calculated, saving planners up to 50% of their time preparing reports. Enhanced Data Visibility—a toggle feature allows users to easily switch views. Rule-Based Adjustment—users can apply rule-based calculations across multiple periods. Consistent UI Across Regions—a standardized UI improves usability. Upstream Data Integration—direct integration with upstream data sources eliminates manual linking.",
      },
    ],
  },
  acelab: {
    slug: "acelab",
    hero: {
      title: "Acelab",
      subtitle: "Revamping Acelab's navigation: a UX overhaul",
      description:
        "A comprehensive redesign of Acelab's navigation system to address usability issues and improve the overall user experience. The project focused on creating an intuitive navigation structure that would better serve architects and designers using the platform, resulting in 70% reduction in dead-end clicks and significantly improved user satisfaction.",
    },
    meta: {
      role: "UX Designer",
      employer: "Acelab",
      areas: "UX/UI, Navigation, Research",
      teamScope: "Led navigation redesign; collaborated with product, engineering, and internal stakeholders. Validated with power users and architects.",
    },
    cardImage: "/images/projectimages/acelabmain.avif",
    themeColor: "#475569",
    impact: {
      measurement: "70% reduction in dead-end clicks measured via analytics over 8 weeks post-launch; validated through user feedback from architects and designers.",
    },
    sections: [
      {
        image: "/images/acelab_navigation/previous_navigation.png",
        caption: "Shows the original, fragmented navigation issues",
        title: "Identifying the problem",
        body: "Through a comprehensive platform audit and user feedback, we uncovered several critical issues with Acelab's navigation system: Inconsistent navigation patterns across different sections of the platform; accessibility issues that made features difficult to find, even for internal teams; fragmented growth of navigation elements over time; unintuitive movement across the platform.",
      },
      {
        image: "/images/acelab_navigation/ui_options.png",
        caption: "UI exploration for different navigation layouts",
        title: "Defining the solution",
        body: "After mapping out the navigation issues, I advocated for a complete overhaul and proposed three potential concepts: Top Navigation Only (simple but limited space), Left Navigation Only (more scalable but required significant structural changes), Combined Left & Top Navigation (balanced usability and familiarity—final choice). The final decision was validated through internal workshops and testing with power users.",
      },
      {
        image: "/images/acelab_navigation/lofi_topNav.png",
        caption: "Top Navigation Only concept",
        title: "Navigation concepts",
        body: "Three concepts were explored: top nav only, left nav only, and combined left and top navigation.",
      },
      {
        image: "/images/acelab_navigation/home_prototype.png",
        caption: "Testing navigation within the updated home experience",
        title: "Iterating & Refining",
        body: "As the UI redesign progressed alongside navigation changes, we discovered through user testing that internal team preferences differed significantly from those of real users (architects and designers). This insight led us to pivot our approach to better align with actual user needs rather than internal assumptions. We conducted additional testing with target users to ensure our solution would address their specific pain points and workflows.",
      },
      {
        image: "/images/acelab_navigation/sidePanel.png",
        caption: "Showcases the collapsible side navigation solution",
        title: "Overcoming constraints",
        body: "A full platform redesign was infeasible due to time and resource constraints. Instead, we collaborated closely with the engineering team to integrate the new navigation system within the existing screen structures. The solution was to introduce a collapsible left navigation that could be expanded when needed and collapsed to maximize screen real estate. This approach maintained flexibility without requiring a complete overhaul of the entire UI.",
      },
      {
        image: "/images/acelab_navigation/projectSelection_Notification.png",
        caption: "Demonstrates the final navigation with project selection and notifications",
        title: "Final outcome & impact",
        body: "The redesigned navigation system delivered several key improvements: Side Navigation with Expanded/Collapsed States—improved accessibility while maintaining screen real estate. Quick Project Selector—enabled faster access to frequently used projects. Updated Notification Panel—enhanced visibility of important updates. 70% Reduction in Dead-End Clicks—significantly reduced user frustration. Overwhelmingly positive feedback from users.",
      },
      {
        image: "/images/acelab_navigation/products_prototype.png",
        caption: "Testing how navigation impacts product browsing",
        title: "Key takeaways",
        body: "Research-driven design leads to better user adoption. Balancing ambition with feasibility ensures smoother implementation. Cross-functional collaboration was crucial to delivering an intuitive navigation system that met both user needs and technical requirements.",
      },
    ],
  },
  "slab-design-system": {
    slug: "slab-design-system",
    hero: {
      title: "A Slab Design System",
      subtitle: "Building and scaling a design system",
      description: "Increasing design & engineering efficiency and leveling up the visual design at Acelab.",
    },
    meta: {
      role: "Product Designer",
      employer: "Acelab",
      areas: "Design System, Component Building",
      teamScope: "Owned design system vision; partnered with engineering to align Figma tokens with Vue, Tailwind, and CSS. Incremental rollout across product teams.",
    },
    cardImage: "/images/projectimages/acelabdsmain.avif",
    themeColor: "#71717a",
    impact: {
      outcomes: [
        { title: "Streamlined handoff.", body: "Design tokens and shared components reduced design–engineering back-and-forth and sped up implementation." },
        { title: "Consistent UI scaling.", body: "Atomic components and a clear hierarchy enabled the application to grow without visual drift." },
      ],
      measurement: "Tracked via component adoption across screens and qualitative feedback from design and engineering teams during rollout.",
    },
    sections: [
      {
        image: "/images/slabds_buttons.png",
        caption: "The variety of action buttons currently on the platform",
        title: "Building a robust design system at Acelab",
        body: "When I started at Acelab, the existing design system was minimal—essentially branding guidelines with basic button styles. As the application grew more complex, inconsistencies emerged, even within the limited design system in place. Recognizing the need for a more comprehensive approach, I advocated for the development of a robust design system to address these challenges and promote greater adherence to design standards.",
      },
      {
        image: "/images/slabds_options.png",
        caption: "Researching a variety of options",
        title: "Evaluating options for the design system",
        body: "To determine the best path forward, I considered a variety of prebuilt design systems as well as the possibility of developing our own from scratch. My criteria included: Simplicity, Figma Compatibility, and Scalability. After extensive research, I identified that many of the well-known design systems were either too complex for our needs or lacked adaptable Figma files. I ultimately chose to build upon the design system provided by Practical UI.",
      },
      {
        image: "/images/slabds_annotation.png",
        caption: "Design token architecture",
        title: "Educating and collaborating with engineering",
        body: "To ensure successful implementation, I started by educating our engineering team about the benefits of a robust design system. Design Tokens: Given our tech stack—Vue, Tailwind, and CSS—I exported Figma variables to JSON and demonstrated their practical use cases. We began rolling out components incrementally, transitioning to the new design system while addressing gaps and ensuring alignment between design and engineering.",
      },
      {
        image: "/images/slabds_sidenav.gif",
        caption: "Side navigation component in action",
        title: "Customizing and creating new components",
        body: "Aside from implementing our basic fonts and colors, I also embarked on creating some components that were unique to our platform. For example, making some enhancements to the Side Navigation and adding some additional functionality like dropdowns and selectors.",
      },
      {
        image: "/images/slabds_progressmodal.png",
        caption: "Atomic components combined into a Modal",
        title: "Early results and progress",
        body: "While the full implementation of the design system is ongoing, we have already seen significant improvements: Consistency—components across the application are becoming more uniform. Efficiency—communication between design and engineering has become more streamlined. Scalability—the system is equipped to handle our growing application needs with minimal additional effort.",
      },
      {
        image: "/images/slabds_progress.png",
        caption: "",
        title: "Reflection",
        body: "The process of establishing a robust design system has been transformative for Acelab. By aligning design and engineering through a shared framework, we are not only improving the quality of our product but also fostering a more collaborative and efficient workflow. This initiative underscores my commitment to creating scalable, user-centered design solutions that drive organizational success.",
      },
    ],
  },
  calibrator: {
    slug: "calibrator",
    hero: {
      title: "Calibrator",
      subtitle: "A historical construction costs and comparison tool",
      description: "Designing a comparison feature for a historical construction costs database.",
    },
    meta: {
      role: "Product Designer",
      client: "Google GR+D",
      employer: "Outer Labs",
      areas: "Design, Prototyping",
      teamScope: "Sole designer; collaborated with product and engineering. Addressed non-uniform cost coding and one-to-one comparison constraints.",
    },
    cardImage: "/images/projectimages/calibratormain.avif",
    themeColor: "#78716c",
    impact: {
      outcomes: [
        { title: "Granular cost comparison.", body: "Users can compare cost items at the lowest level, including cost-per-unit, across projects with non-uniform coding." },
        { title: "Reduced comparison friction.", body: "Project detail cards and expandable categories help users find relevant data without manual cross-referencing." },
      ],
      measurement: "Validated through user testing with GR+D cost analysts; adoption tracked via feature usage after launch.",
    },
    sections: [
      {
        image: "/images/calibrator_map.png",
        caption: "Landing screen for Calibrator",
        title: "Background",
        body: "Calibrator is a database tool categorizing all cost data of Google's built projects (the data is still being input from a variety of disparate sources). This feature allowed for direct cost-comparison at a very granular level. Previously projects could only be compared across higher levels of data, but users requested a more fine-grained ability to really get in the weeds.",
      },
      {
        image: "/images/calibrator_table.png",
        caption: "Side by side comparison of big buckets of data",
        title: "Challenges of construction cost coding",
        body: "The cost data for construction projects is organized into a series of buckets. Google uses a proprietary system that does not categorize the lowest level items uniformly. This means that users need to compare cost items that may not have a one-to-one relationship. Additionally, at the individual cost item level, users are interested in not just the overall cost of an item but also the cost per unit, and how much each unit costs.",
      },
      {
        image: "/images/calibrator_selection.png",
        caption: "Project selection options",
        title: "Selecting projects",
        body: "The first step in a comparison across projects is to help a user select the right project. The list of projects is long, and names of projects are not always helpful in deciphering which one is which. A robust project search feature was de-prioritized for the launch of this feature, so instead I designed a project detail card that allowed a user to see relevant data about the selection that they made.",
      },
      {
        image: "/images/calibrator_initial.png",
        caption: "Fine grained data comparison",
        title: "Comparison table",
        body: "The comparison table is relatively straightforward, with the exception of the lowest level items. A card allows for more data to be displayed for each items, without becoming too dense. Users are able to expand and contract categories as well as filter data to find the relevant information.",
      },
    ],
  },
  syncrofy: {
    slug: "syncrofy",
    hero: {
      title: "Syncrofy File Transfer",
      subtitle: "Designing a Scalable Filtering System for Syncrofy FT",
      description:
        "Designing a scalable filtering system for Syncrofy FT, handling 200,000+ enterprise data transfers per hour. Reduced cognitive overload via progressive disclosure while maintaining 100% feature parity.",
    },
    meta: {
      role: "Lead Product Designer (sole designer)",
      employer: "CoEnterprise",
      areas: "Full platform UI redesign, Transfer List, Dashboards",
      teamScope: "Sole designer; partnered with CEO, Director of Product, PM, and Engineering. 4-month single-release timeline.",
    },
    cardImage: "/images/projectimages/syncrofymain.avif",
    themeColor: "#526070",
    sections: [
      {
        image: "/images/syncrofyimages/FT Transfers.jpg",
        caption: "Transfer list and visibility into enterprise data exchange",
        title: "Context",
        body: "Enterprise data exchange is often invisible until something breaks. Syncrofy FT exists to act as a GPS for digital mail, giving business and technical users real-time visibility into every transfer across systems.\n\nThe project was driven by a CEO-led vision for a single, massive release. This meant no room for iterative research or incremental analytics. Furthermore, the CEO mandated 100% feature parity, meaning no filters could be removed, regardless of how rarely they were used. Timeline: 4 months, single-release redesign. Partners: CEO, Director of Product, PM, Engineering.",
        images: [
          "/images/syncrofyimages/hero1.avif",
          "/images/syncrofyimages/hero-2.avif",
          "/images/syncrofyimages/hero-3.avif",
          "/images/syncrofyimages/hero-4.avif",
        ],
      },
      {
        image: "/images/syncrofyimages/failedtransferlist.avif",
        caption: "",
        title: "Why it mattered",
        body: "Syncrofy File Transfer (FT) handles 200,000+ enterprise data transfers per hour. My goal was to turn an opaque \"black box\" of activity into a system users could quickly search, understand, and trust.",
      },
      {
        image: "/images/syncrofyimages/old-filters.avif",
        caption: "Legacy platform exposed 50+ filter options on the transfer list",
        title: "The Problem: When Flexibility Becomes Friction",
        body: "Syncrofy's legacy platform exposed 50+ filter options on the transfer list. This approach maximized theoretical flexibility, allowing power users to slice data by nearly every available facet. It also has the potential to be overly complex.\n\nNew and non-technical users were overwhelmed by the sheer number of options. Even experienced users had to scroll through long lists to perform simple tasks. Instead of empowering users, the interface increased cognitive load and slowed down workflows.\n\nThe underlying assumption was clear: More options equal more power. But that assumption hadn't been re-examined in years.",
      },
      {
        image: "/images/syncrofyimages/old-filters-2.avif",
        caption: "Core problems from legacy audits and stakeholder alignment",
        title: "The Core Problems",
        body: "",
        intro:
          "Through legacy audits and stakeholder alignment, four core problems emerged:",
        problems: [
          {
            title: "Cognitive overload.",
            body: "Users faced a flat list of 50+ filters, creating a \"wall of choice\" that slowed even simple workflows.",
          },
          {
            title: "No safe path for advanced users.",
            body: "Leadership required 100% feature parity, meaning no filters could be removed — even rarely used ones.",
          },
          {
            title: "Loss of spatial awareness.",
            body: "Active filters were hidden inside menus, causing users to lose track of how they arrived at a dataset.",
          },
          {
            title: "Inconsistent dashboard filtering logic.",
            body: "Filters behaved differently across tiles and dashboards, were temporary, and couldn't be reliably saved.",
          },
        ],
        bodyTail:
          "These issues were especially risky given the constraints: a CEO-driven vision, minimal research opportunity, and a single \"Big Bang\" release.",
      },
      {
        title: "Insight: Designing for Reality, Not Possibility",
        body:
          "To ground decisions, I conducted a forensic audit of legacy usage data. The result reframed the entire problem:\n\n**99% of all filter interactions were concentrated in just 8 filters.**\n\nThe issue wasn’t lack of capability — it was how that capability was presented. The design challenge became one of risk management: How do we dramatically reduce complexity for most users without removing power or violating leadership constraints?",
      },
      {
        title: "The Solution: A focused default experience that also works for power users",
        body: "",
      },
      {
        image: "/images/syncrofyimages/progdisclusure.avif",
        caption: "Default filter set focused on the Top 8 use cases",
        title: "Progressive Disclosure to Reduce Overload",
        body: "A usage audit revealed that 99% of filter interactions came from just 8 facets. I surfaced these as the default filter set and moved the remaining options behind an expandable, searchable drawer. This dramatically reduced visual complexity without removing capability.\n\nPreserving Power Without Sacrificing Clarity — To support expert workflows, all filters remained accessible via grouped categories and type-ahead search. This respected leadership concerns while creating a structured mental model for advanced use cases.",
        layout: "design-response",
        imagePosition: "right",
      },
      {
        image: "/images/syncrofyimages/typeahead.avif",
        caption: "All legacy filters accessible through progressive disclosure",
        title: "Preserving Power",
        body: "All filters remained accessible via grouped categories and type-ahead search. This respected the 100% parity mandate while creating a structured mental model for advanced use cases.",
        layout: "design-response",
        imagePosition: "left",
      },
      {
        image: "/images/syncrofyimages/filterchips.avif",
        caption: "Filter chips surface active filters directly in the workspace",
        title: "Making State Explicit",
        body: "I introduced filter chips that surface active filters directly in the workspace. These act as visual breadcrumbs, preserving orientation and control. A \"Clear All\" affordance provides a fast return to baseline.",
        layout: "design-response",
        imagePosition: "right",
      },
      {
        image: "/images/syncrofyimages/crossfilter.avif",
        caption: "Dashboard global filters highlight when in conflict with local filters.",
        title: "Establishing a Hierarchy of Truth for Dashboards",
        body: "I redesigned dashboards to support explicit global filters, supported by a clear precedence model between global, tile-level, and temporary filters. This eliminated ambiguity and made dashboard state predictable and saveable.",
        layout: "design-response",
        imagePosition: "left",
      },
      {
        image: "/images/syncrofyimages/Filter Data.jpg",
        beforeAfter: {
          old: "/images/syncrofyimages/old.avif",
          new: "/images/syncrofyimages/new.avif",
        },
        caption: "The overall redesign showing the improved filter list.",
        title: "Outcomes",
        body: "",
        outcomes: [
          {
            title: "Reduced cognitive overload.",
            body: "Default filtering focuses on the Top 8 use cases, cutting visible filter clutter by 84%.",
          },
          {
            title: "Maintained enterprise flexibility.",
            body: "All legacy filters remain accessible through progressive disclosure, meeting the 100% parity mandate.",
          },
          {
            title: "Improved user orientation.",
            body: "Filter chips and explicit state reduce confusion and improve trust in the data being shown.",
          },
          {
            title: "Stabilized dashboard behavior.",
            body: "A clear filtering hierarchy transformed dashboards into reliable operational tools rather than exploratory experiments.",
          },
        ],
      },
      {
        title: "Reflection",
        body: "This project reinforced that enterprise design success often comes down to sequencing complexity, not eliminating it. When research and iteration are constrained, principled decisions grounded in usage data and system logic can dramatically reduce risk while setting a foundation for future validation.",
      },
    ],
    impact: {
      measurement: "Outcomes grounded in forensic audit of legacy usage data (99% of filter interactions in 8 facets). Validated through stakeholder alignment and post-launch feedback.",
    },
  },
};

export const CASE_STUDY_SLUGS = [
  "coenterprise",
  "syncrofy",
  "lighthouse",
  "slab-design-system",
  "acelab",
  "clay",
  "calibrator",
] as const;

/** Curated "Start here" slugs for home page: strongest enterprise UX and measurable impact */
export const FEATURED_SLUGS = [
  "coenterprise",
  "syncrofy",
  "lighthouse",
  "acelab",
] as const;

export type CaseStudySlug = (typeof CASE_STUDY_SLUGS)[number];

export function getCaseStudy(slug: string): CaseStudy | null {
  return CASE_STUDIES[slug] ?? null;
}

function workItemsForSlugs(slugs: readonly string[]): SelectedWorkItem[] {
  return slugs.map((slug) => {
    const study = CASE_STUDIES[slug];
    const clientLine = [study.meta.client, study.meta.employer]
      .filter(Boolean)
      .join(" / ");
    return {
      slug,
      title: study.hero.title,
      client: clientLine || study.hero.subtitle,
      description: study.hero.description,
      year: "2024",
      scope: study.meta.areas.split(",")[0]?.trim() ?? "Product Design",
      platform: "Web",
      href: `/work/${slug}`,
      image: study.cardImage,
      themeColor: study.themeColor,
    };
  });
}

export function getSelectedWork(): SelectedWorkItem[] {
  return workItemsForSlugs(CASE_STUDY_SLUGS);
}

export function getFeaturedWork(): SelectedWorkItem[] {
  return workItemsForSlugs(FEATURED_SLUGS);
}
