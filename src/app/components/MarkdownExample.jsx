'use client';

import MarkdownRenderer from './MarkdownRenderer';

const MarkdownExample = () => {
  // Example markdown content that could come from a CMS, API, or file
  const blogContent = `# Getting Started with ReactMarkdown

ReactMarkdown is a powerful library that converts markdown to properly formatted HTML with styling.

## Key Benefits

- **Easy to use**: Simple API with React components
- **Customizable**: Full control over styling and behavior
- **Secure**: Sanitizes HTML by default
- **Extensible**: Plugin system for additional features

## Installation

\`\`\`bash
npm install react-markdown rehype-highlight remark-gfm remark-breaks
\`\`\`

## Basic Usage

\`\`\`jsx
import ReactMarkdown from 'react-markdown';

function MyComponent() {
  const markdown = "# Hello World\\n\\nThis is **bold** text.";
  
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
}
\`\`\`

## Features

- ✅ Syntax highlighting for code blocks
- ✅ GitHub Flavored Markdown support
- ✅ Responsive design
- ✅ Custom styling with Tailwind CSS
- ✅ Table support
- ✅ Task lists
- ✅ Blockquotes

> **Note**: This component is ready to use in your blog posts, documentation, or any content that needs markdown rendering.

---

*Built with ❤️ using React and Next.js*`;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <MarkdownRenderer content={blogContent} />
    </div>
  );
};

export default MarkdownExample;
