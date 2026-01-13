export type BlogPost = {
    id: number;
    title: string;
    description: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
    imageAlt: string;
    readTime: string;
    url: string;
    tags?: string[]; // 添加这行

  };
  
export const blogPosts: BlogPost[] = 
[
    {
      "id": 10,
      "title": "Knit Out vs. Knit N Loop: The Ultimate Puzzle Game Comparison (Gameplay, Strategy, & Monetization)",
      "description": "A deep comparative analysis of two hit yarn puzzle games — Knit Out and Knit N Loop. This guide explores their gameplay mechanics, difficulty progression, resource systems, and monetization models to help players decide which puzzle experience suits them best.",
      "excerpt": "Compare Knit Out and Knit N Loop in this in-depth review covering gameplay, strategy, difficulty balance, and monetization. Discover which yarn puzzle offers the perfect mix of relaxation and challenge.",
      "category": "Knit Out Review",
      "date": "2025-10-07",
      "image": "/images/knitout/knit-out-vs-knit-n-loop-comparison.png",
      "imageAlt": "Side-by-side screenshot of Knit Out and Knit N Loop gameplay showing yarn puzzles and UI comparison.",
      "readTime": "10 min read",
      "url": "/blog/knit-out-vs-knit-n-loop-review"
    },
    {
      "id": 9,
      "title": "Hybrid Casual Games Market Trends 2025 (Part 2)",
      "description": "In-depth analysis of the hybrid casual games market in 2025, examining revenue growth, key trends, and top performing games.",
      "excerpt": "Explore the latest market trends, revenue models, and top performers in the 2025 hybrid casual games industry.",
      "category": "Puzzle Game Insights",
      "date": "2025-09-21",
      "image": "/images/knitout/hybrid-casual-games-market-trends-2025.png",
      "imageAlt": "Graph showcasing the growth of hybrid casual games revenue and market trends for 2025.",
      "readTime": "10 min read",
      "url": "/blog/hybrid-casual-games-market-trends-2025-part2"
    },
    {
      id: 1,
      title: "Rollic Game Strategy: Innovation, Skin-Swaps, and IP",
      description: "An in-depth analysis of Rollic's game strategy: innovation, skin-changing mechanics, and IP application in game design.",
      excerpt: "Explore Rollic's game strategy, including skin-swaps and successful titles like Color Block Jam and Barbie™ Merge Mystery.",
      category: "Game Strategies",
      date: "2025-07-20",
      image: "/images/knitout/rollic-games-gecko-rush-slither-blast-blasty-stacks-puzzle.jpeg",
      imageAlt: "Screenshot showcasing Rollic's skin-changing mechanics with a colorful game interface.",
      readTime: "8 min read",
      url: "/blog/rollic-game-strategy-innovation-skin-swaps-ip"
    },
    {
      id: 2,
      title: "Knit Out: The Unbeatable Yarn-Themed Game of 2025!",
      description: "A comprehensive and in-depth review of Knit Out, the top yarn-themed puzzle game of 2025, offering unique gameplay and strategic depth.",
      excerpt: "Knit Out blends relaxing yarn-wrapping puzzles with chess-like strategy. Discover its clean UI, engaging feedback loops, and peak challenge at level 24.",
      category: "Game Review",
      date: "2025-07-10",
      image: "/images/knitout/2025-best-yarn-themed-puzzle-game-knit-out-deep-review.jpeg",
      imageAlt: "Knit Out game screen, showcasing yarn-themed puzzle elements",
      readTime: "5 min read",
      url: "/blog/knit-out-unbeatable-yarn-themed-game-2025"
    },
    {
      id: 3,
      title: "Knit Out: Hybrid-Casual Breakdown of Gameplay, Monetization & UA",
      description: "A concise teardown of Knit Out's unscrew-style loop, ¥15 M+ monthly IAP, rewarded-ad economy, and life-element UA creatives that signal 2025's next hit.",
      excerpt: "See how Rollic turns cozy yarn-wrapping into a money-making hybrid-casual loop: design hook, scissors monetization, IQ-test ads, and why revenue spiked after May.",
      category: "Knit Out Analysis",
      date: "2025-08-08",
      image: "/images/knitout/knit-out-hybrid-casual-breakdown.jpeg",
      imageAlt: "Knit Out gameplay showing yarn rings, holding slots and cleared woven piece",
      readTime: "4 min read",
      url: "/blog/knit-out-hybrid-casual"
    },
    {
      "id": 4,
      "title": "Hybrid-Casual Monetization: Coin Sort's $1.5M/Month Blueprint",
      "description": "A deep dive into Coin Sort's hybrid-casual mechanics, including coin merging, space constraints, and flexible ad monetization, and how it achieved $1.5M/month.",
      "excerpt": "Explore how Coin Sort builds on Hexa Sort's success with relatable coin-themed mechanics, strategic monetization, and ad-IAP balance to capture $1.5M/month in revenue.",
      "category": "Knit Out Analysis",
      "date": "2025-08-15",
      "image": "/images/knitout/hexa-sort-lion-studios-core-gameplay-live-ops.jpeg",
      "imageAlt": "Hexa Sort gameplay showing stacked coins, merge button, and gameplay grid",
      "readTime": "12 min read",
      "url": "/blog/hybrid-casual-monetization-coin-sort-revenue-blueprint"
    },
    {
      "id": 5,
      "title": "Knit Out vs Knit Match Puzzle Game Comparison",
      "description": "A comprehensive comparison between Knit Out and Knit Match, two popular puzzle games with knitting themes, highlighting their differences in challenge, accessibility, ad experience, and overall gameplay flow.",
      "excerpt": "Explore how Knit Out and Knit Match differ in their approach to stress relief, accessibility, and game mechanics. This guide helps players choose between a challenging puzzle experience and a casual, relaxing game.",
      "category": "Knit Out Analysis",
      "date": "2025-08-15",
      "image": "/images/knitout/knit-out-vs-knit-match-puzzle-game-mechanics.jpeg",
      "imageAlt": "Screenshot comparing the gameplay of Knit Out and Knit Match showing their distinctive puzzle mechanics and user interfaces",
      "readTime": "10 min read",
      "url": "/blog/knit-out-vs-knit-match-comparison"
    },
    {
      "id": 6,
      "title": "Wool Craze vs Knit Out: Yarn Puzzle Game Success in 2025",
      "description": "A detailed analysis of Wool Craze and Knit Out, two leading yarn puzzle games. This article explores revenue growth, downloads, gameplay differences, monetization strategies, and the role of AI-driven advertising in their success.",
      "excerpt": "Compare Wool Craze and Knit Out to see how yarn puzzle games are shaping the casual gaming market in 2025. Discover which game excels in visual design, engagement, and monetization.",
      "category": "Knit Out Analysis",
      "date": "2025-08-31",
      "image": "/images/knitout/wool-craze-game-logo.png",
      "imageAlt": "Comparison of Wool Craze and Knit Out puzzle games showing yarn unraveling mechanics and 3D visual models",
      "readTime": "12 min read",
      "url": "/blog/wool-craze-vs-knit-out-yarn-puzzle-games-2025"
    },
    {
      "id": 7,
      "title": "Hybrid Casual Games Market Trends 2025 (Part 1)",
      "description": "In-depth analysis of hybrid casual games in 2025: revenue growth, top 10 titles, puzzle vs arcade dominance, monetization strategies, and key industry insights.",
      "excerpt": "Discover how hybrid casual games are evolving in 2025. Learn which genres lead, how Color Block Jam, Screwdom, All in Hole, and Hole People perform, and what strategies drive growth.",
      "category": "Puzzle Game Insights",
      "date": "2025-09-07",
      "image": "/images/knitout/hybrid-casual-games-market-trends-2025.png",
      "imageAlt": "Line and bar charts showing hybrid casual game revenue growth, top 10 rankings, and puzzle vs arcade genre trends in 2025",
      "readTime": "8 min read",
      "url": "/blog/hybrid-casual-games-market-trends-2025-part1"
    }
  ];