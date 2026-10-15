export type Book = { title: string; author: string };
export type FPhase = {
  n: number;
  title: string;
  aspects: string[];
  why: string;
  lessons: string[];
  ai: { automate: string; measure: string; keepHuman: string };
  books: Book[];
};

export const foundersRoadmap: FPhase[] = [
  {
    n: 1,
    title: "Validate Before You Build",
    aspects: ["Business Idea Validation"],
    why: "AI makes building cheap, so building the wrong thing is now the most expensive mistake you can make.",
    lessons: [
      "Talk to customers about their past behavior, not your idea",
      "Write your riskiest assumption down and test it first",
      "A demo isn't evidence. A payment or a repeated use is.",
    ],
    ai: {
      automate: "Interview transcription, theme clustering, competitor scans",
      measure: "Problem frequency × willingness to pay",
      keepHuman: "The customer conversations themselves",
    },
    books: [
      { title: "Running Lean", author: "Ash Maurya" },
      { title: "The Four Steps to the Epiphany", author: "Steve Blank" },
      { title: "The Lean Startup", author: "Eric Ries" },
      { title: "The Mom Test", author: "Rob Fitzpatrick" },
    ],
  },
  {
    n: 2,
    title: "Strategy & Planning",
    aspects: ["Business Strategy & Planning"],
    why: "Strategy is choosing what not to do. Without it, AI just helps you do more of the wrong things faster.",
    lessons: [
      "Diagnose the real problem before you pick a policy",
      "Look for uncontested space, not a better-funded fight",
      "Set objectives you can measure (OKRs) and review them every quarter",
      "Think in systems: feedback loops beat one-off fixes",
    ],
    ai: {
      automate: "Market sizing drafts, scenario modeling, OKR tracking",
      measure: "Leading indicators tied to each objective",
      keepHuman: "The trade-offs: what you will not do",
    },
    books: [
      { title: "Good Strategy Bad Strategy", author: "Richard Rumelt" },
      { title: "Blue Ocean Strategy", author: "W. Chan Kim & Renée Mauborgne" },
      { title: "Measure What Matters", author: "John Doerr" },
      { title: "Thinking in Systems", author: "Donella Meadows" },
      { title: "The Art of Strategy", author: "Avinash Dixit & Barry Nalebuff" },
      { title: "Entrepreneurship: Theory, Process, Practice", author: "Donald F. Kuratko" },
    ],
  },
  {
    n: 3,
    title: "Get Customers",
    aspects: ["Marketing & Branding", "Business Development"],
    why: "Everyone can now generate content. Positioning, story and a repeatable sales process are what still differentiate you.",
    lessons: [
      "Pick the smallest viable audience and serve it obsessively",
      "Make the customer the hero of your story, not your product",
      "Turn sales into a process you can measure: hire, train, generate demand",
      "Separate prospecting from closing (predictable revenue)",
    ],
    ai: {
      automate: "First drafts, segmentation, lead scoring, campaign analysis",
      measure: "CAC, conversion per stage, payback period",
      keepHuman: "Brand voice, positioning and key relationships",
    },
    books: [
      { title: "This Is Marketing", author: "Seth Godin" },
      { title: "Building a StoryBrand", author: "Donald Miller" },
      { title: "The AI Marketing Canvas", author: "Raj Venkatesan & Jim Lecinski" },
      { title: "Principles of Marketing", author: "Philip Kotler & Gary Armstrong" },
      { title: "Everybody Writes", author: "Ann Handley" },
      { title: "The Copywriter's Handbook", author: "Robert Bly" },
      { title: "The Sales Acceleration Formula", author: "Mark Roberge" },
      { title: "Predictable Revenue", author: "Aaron Ross & Marylou Tyler" },
      { title: "Business Development: A Market-Oriented Perspective", author: "Hans Eibe Sørensen" },
    ],
  },
  {
    n: 4,
    title: "Understand the Money",
    aspects: ["Finance & Funding", "Investment"],
    why: "AI products carry a new kind of cost: inference scales with usage. A founder who can't read the P&L can't price an AI feature.",
    lessons: [
      "Profit is an estimate; cash is a fact",
      "Know your unit economics, including model cost per task",
      "Term sheets: control terms matter as much as valuation",
      "Margin of safety applies to plans as much as stocks",
    ],
    ai: {
      automate: "Bookkeeping categorization, forecasting, variance reports",
      measure: "Gross margin after inference cost, runway",
      keepHuman: "Fundraising decisions and capital allocation",
    },
    books: [
      { title: "Financial Intelligence for Entrepreneurs", author: "Karen Berman & Joe Knight" },
      { title: "Venture Deals", author: "Brad Feld & Jason Mendelson" },
      { title: "The Intelligent Investor", author: "Benjamin Graham" },
      { title: "A Random Walk Down Wall Street", author: "Burton Malkiel" },
    ],
  },
  {
    n: 5,
    title: "Lead People",
    aspects: ["Leadership & Growth Mindset", "Soft Skills", "HR"],
    why: "As AI takes over tasks, what's left for humans is judgment, trust and growth. That's leadership work.",
    lessons: [
      "Emotional intelligence is a leadership skill, not a soft extra",
      "Hire for talent, then manage to strengths",
      "Hard conversations early beat crises later",
      "Redesign work around outcomes, not hours or locations",
    ],
    ai: {
      automate: "Screening logistics, onboarding, policy Q&A, scheduling",
      measure: "Time-to-hire, retention, engagement",
      keepHuman: "Hiring decisions, feedback, culture",
    },
    books: [
      { title: "Primal Leadership", author: "Daniel Goleman, Richard Boyatzis & Annie McKee" },
      { title: "Leadership: The Power of Emotional Intelligence", author: "Daniel Goleman" },
      { title: "Leaders Eat Last", author: "Simon Sinek" },
      { title: "Mindset", author: "Carol Dweck" },
      { title: "Grit", author: "Angela Duckworth" },
      { title: "The 21 Irrefutable Laws of Leadership", author: "John C. Maxwell" },
      { title: "Emotional Intelligence 2.0", author: "Travis Bradberry & Jean Greaves" },
      { title: "Emotional Agility", author: "Susan David" },
      { title: "Crucial Conversations", author: "Kerry Patterson et al." },
      { title: "HR Transformation", author: "Dave Ulrich et al." },
      { title: "Redesigning Work", author: "Lynda Gratton" },
      { title: "First, Break All the Rules", author: "Marcus Buckingham & Curt Coffman" },
      { title: "Work Rules!", author: "Laszlo Bock" },
    ],
  },
  {
    n: 6,
    title: "Execute & Network",
    aspects: ["Project Management", "Productivity & Efficiency", "Networking & Collaboration"],
    why: "Ideas are cheap and execution compounds. So does your network.",
    lessons: [
      "Short sprints with a demo at the end beat long plans",
      "Protect deep-work time; batch the shallow work",
      "Find your one thing. Small habits compound.",
      "Give before you ask; build alliances, not contact lists",
    ],
    ai: {
      automate: "Status reports, meeting notes, task triage, follow-ups",
      measure: "Cycle time, on-time delivery",
      keepHuman: "Priorities and relationships",
    },
    books: [
      { title: "Scrum: The Art of Doing Twice the Work in Half the Time", author: "Jeff Sutherland" },
      { title: "PMBOK Guide (7th ed.)", author: "PMI" },
      { title: "Project Management: A Systems Approach", author: "Harold Kerzner" },
      { title: "Deep Work", author: "Cal Newport" },
      { title: "Getting Things Done", author: "David Allen" },
      { title: "Atomic Habits", author: "James Clear" },
      { title: "The ONE Thing", author: "Gary Keller & Jay Papasan" },
      { title: "The Start-up of You", author: "Reid Hoffman & Ben Casnocha" },
      { title: "Never Eat Alone", author: "Keith Ferrazzi" },
      { title: "Strategic Connections", author: "Anne Baber et al." },
      { title: "The Starfish and the Spider", author: "Ori Brafman & Rod Beckstrom" },
    ],
  },
  {
    n: 7,
    title: "Scale Responsibly",
    aspects: ["Scaling Your Startup", "Sustainability, Green Economy & CSR"],
    why: "Scaling breaks whatever you didn't systematize. Sustainability is fast becoming a procurement requirement, especially in the Gulf.",
    lessons: [
      "Scale people, strategy, execution and cash together",
      "Blitzscale only when speed truly decides the market",
      "Sustainability can create value, not just cost",
      "Measure and report it, or it doesn't count",
    ],
    ai: {
      automate: "Process documentation, KPI dashboards, ESG data collection",
      measure: "Revenue per employee, ESG metrics",
      keepHuman: "Values, and when to say no to growth",
    },
    books: [
      { title: "Scaling Up", author: "Verne Harnish" },
      { title: "Blitzscaling", author: "Reid Hoffman & Chris Yeh" },
      { title: "Green to Gold", author: "Daniel Esty & Andrew Winston" },
      { title: "Integrated Management", author: "Robert Sroufe" },
      { title: "Corporate Sustainability", author: "Paolo Tenuta & Domenico Rocco Cambrea" },
      { title: "Doughnut Economics", author: "Kate Raworth" },
      { title: "Let My People Go Surfing", author: "Yvon Chouinard" },
      { title: "The Ecology of Commerce", author: "Paul Hawken" },
    ],
  },
];
