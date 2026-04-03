export const blogs = [
  {
    id: "1",
    title: "Mastering React Hooks: A Complete Guide",
    description: "Dive deep into React's hook system — from useState and useEffect to creating your own custom hooks for reusable logic.",
    category: "React",
    author: "Sarah Chen",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    date: "March 28, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    tags: ["React", "Hooks", "JavaScript"],
    content: `
## Introduction

React Hooks revolutionized how we write React components. Before hooks, stateful logic could only be used in class components. Now, with hooks, we can use state and other React features in functional components.

## useState Hook

The \`useState\` hook is the most fundamental hook in React. It allows you to add state to functional components.

\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

Every time you call \`setCount\`, React re-renders the component with the new state value.

## useEffect Hook

\`useEffect\` lets you perform side effects in functional components. It serves the same purpose as \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\` combined.

\`\`\`jsx
useEffect(() => {
  document.title = \`Count: \${count}\`;
  return () => {
    document.title = 'DevLearn';
  };
}, [count]);
\`\`\`

## Custom Hooks

Custom hooks let you extract component logic into reusable functions. A custom hook is a JavaScript function whose name starts with "use".

\`\`\`jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
\`\`\`

## Conclusion

Hooks have made React components more composable, reusable, and easier to test. Embrace them fully in your React journey!
    `
  },
  {
    id: "2",
    title: "JavaScript ES2024: New Features You Need to Know",
    description: "Explore the latest JavaScript features including the new Array methods, Object.groupBy, and the exciting temporal API.",
    category: "JavaScript",
    author: "Marcus Roy",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    date: "March 22, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&q=80",
    tags: ["JavaScript", "ES2024", "Web Dev"],
    content: `
## What's New in ES2024

JavaScript continues to evolve rapidly. ES2024 brings several powerful additions to the language.

## Array Grouping

One of the most requested features: \`Object.groupBy()\` and \`Map.groupBy()\`

\`\`\`js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas",  type: "fruit", quantity: 0 },
  { name: "cherries", type: "fruit", quantity: 200 },
];

const result = Object.groupBy(inventory, ({ type }) => type);
// { vegetables: [...], fruit: [...] }
\`\`\`

## Promise.withResolvers()

A clean way to create promises with exposed resolve/reject:

\`\`\`js
const { promise, resolve, reject } = Promise.withResolvers();
setTimeout(resolve, 1000, 'done!');
const result = await promise; // 'done!'
\`\`\`

## Temporal API (Stage 3)

The long-awaited replacement for the Date object:

\`\`\`js
const now = Temporal.Now.plainDateTimeISO();
console.log(now.toString()); // 2024-03-15T10:30:00
\`\`\`

These features make modern JavaScript development more expressive and less error-prone.
    `
  },
  {
    id: "3",
    title: "Dynamic Programming Patterns: Master the Art",
    description: "Learn the core dynamic programming patterns like memoization, tabulation, and interval DP with hand-picked LeetCode problems.",
    category: "DSA",
    author: "Priya Sharma",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    date: "March 18, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
    tags: ["DSA", "DP", "Algorithms"],
    content: `
## Understanding Dynamic Programming

Dynamic Programming (DP) is an algorithmic technique for solving optimization problems by breaking them down into simpler subproblems.

## Core Patterns

### 1. Fibonacci Pattern
The classic example of memoization:

\`\`\`python
def fib(n, memo={}):
    if n in memo: return memo[n]
    if n <= 1: return n
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
\`\`\`

### 2. 0/1 Knapsack Pattern

\`\`\`python
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i-1][w], values[i-1] + dp[i-1][w-weights[i-1]])
            else:
                dp[i][w] = dp[i-1][w]
    
    return dp[n][capacity]
\`\`\`

Mastering these patterns will help you solve 80% of DP problems on LeetCode!
    `
  },
  {
    id: "4",
    title: "Building Accessible Web Apps: WCAG 2.2 Guide",
    description: "A practical guide to making your web applications accessible to everyone, following the latest WCAG 2.2 guidelines.",
    category: "Web Development",
    author: "Alex Turner",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    date: "March 12, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    tags: ["Accessibility", "Web Dev", "HTML"],
    content: `
## Why Accessibility Matters

Web accessibility ensures that websites and applications are usable by people with disabilities. It's not just the right thing to do — it's also the law in many countries.

## Key WCAG 2.2 Principles

### Perceivable
All UI components must be presentable to users in ways they can perceive.

\`\`\`html
<!-- Bad -->
<img src="logo.png">

<!-- Good -->
<img src="logo.png" alt="DevLearn company logo">
\`\`\`

### Operable
Users must be able to operate the interface using keyboard navigation.

\`\`\`css
/* Always show focus indicators */
:focus-visible {
  outline: 2px solid #7C3AED;
  outline-offset: 2px;
}
\`\`\`

### Understandable
Content must be readable and understandable.

Start implementing these practices today for a more inclusive web!
    `
  },
  {
    id: "5",
    title: "Introduction to LLMs: How AI Thinks",
    description: "Demystify Large Language Models — understand transformers, attention mechanisms, and how to build AI-powered apps.",
    category: "AI",
    author: "Zara Ahmed",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zara",
    date: "March 5, 2025",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    tags: ["AI", "LLM", "Machine Learning"],
    content: `
## What Are Large Language Models?

Large Language Models (LLMs) are AI systems trained on vast amounts of text data to understand and generate human-like text. Models like GPT-4, Claude, and Gemini have revolutionized how we interact with computers.

## How Transformers Work

The transformer architecture, introduced in 2017, uses self-attention mechanisms to process sequences of data.

### Self-Attention
Self-attention allows the model to weigh the importance of different words in a sentence when encoding a particular word.

\`\`\`python
# Simplified attention mechanism
def attention(Q, K, V):
    d_k = Q.shape[-1]
    scores = np.matmul(Q, K.T) / np.sqrt(d_k)
    weights = softmax(scores)
    return np.matmul(weights, V)
\`\`\`

## Building AI Apps

With APIs like OpenAI and Anthropic, you can easily integrate LLMs:

\`\`\`python
from openai import OpenAI

client = OpenAI()
response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Explain recursion"}]
)
\`\`\`

The future of development involves AI assistance at every level!
    `
  },
  {
    id: "6",
    title: "Next.js 14 App Router: Complete Migration Guide",
    description: "Everything you need to migrate from Next.js Pages Router to the new App Router with React Server Components.",
    category: "React",
    author: "James Wilson",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    date: "February 28, 2025",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80",
    tags: ["Next.js", "React", "App Router"],
    content: `
## App Router vs Pages Router

Next.js 14 brings the stable App Router with React Server Components. This is a fundamental shift in how Next.js applications are structured.

## Key Differences

| Feature | Pages Router | App Router |
|---------|-------------|------------|
| Data Fetching | getServerSideProps | async/await in components |
| Layouts | _app.js | layout.js |
| Loading States | Manual | loading.js |

## Server Components

\`\`\`tsx
// This component runs on the server
async function BlogList() {
  const blogs = await fetch('/api/blogs').then(r => r.json());
  
  return (
    <ul>
      {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
    </ul>
  );
}
\`\`\`

The App Router is the future of Next.js development. Start migrating today!
    `
  },
  {
    id: "7",
    title: "CSS Grid Mastery: From Beginner to Advanced",
    description: "Master CSS Grid layout with practical examples, from basic concepts to complex responsive layouts and subgrid.",
    category: "Web Development",
    author: "Luna Park",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna",
    date: "February 20, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    tags: ["CSS", "Grid", "Layout"],
    content: `
## CSS Grid Foundation

CSS Grid is a two-dimensional layout system that allows you to create complex layouts with ease.

## Basic Grid Setup

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
\`\`\`

## Subgrid (Modern CSS)

Subgrid allows nested grids to align with their parent:

\`\`\`css
.card {
  display: grid;
  grid-row: span 3;
  grid-template-rows: subgrid;
}
\`\`\`

CSS Grid, combined with Flexbox, gives you every layout tool you'll ever need!
    `
  },
  {
    id: "8",
    title: "Binary Search Tree Operations Explained",
    description: "Understand BST insertion, deletion, traversal, and balancing through clear visualizations and Python code.",
    category: "DSA",
    author: "Rahul Kumar",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    date: "February 15, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    tags: ["DSA", "Trees", "Algorithms"],
    content: `
## What is a Binary Search Tree?

A BST is a node-based binary tree where each node's left subtree contains only nodes with values less than the node's key, and the right subtree contains only nodes with values greater than the key.

## BST Implementation

\`\`\`python
class TreeNode:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None

def insert(root, val):
    if not root:
        return TreeNode(val)
    if val < root.val:
        root.left = insert(root.left, val)
    else:
        root.right = insert(root.right, val)
    return root

def inorder(root):
    if root:
        inorder(root.left)
        print(root.val, end=' ')
        inorder(root.right)
\`\`\`

BSTs are the foundation for many advanced data structures like AVL trees and Red-Black trees!
    `
  },
];

export const blogCategories = ["All", "React", "JavaScript", "DSA", "Web Development", "AI"];
