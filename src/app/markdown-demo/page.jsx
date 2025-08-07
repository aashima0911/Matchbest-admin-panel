'use client';

import MarkdownRenderer from '../components/MarkdownRenderer';

const MarkdownDemo = () => {
  const sampleMarkdown = `# Welcome to ReactMarkdown Demo

This is a demonstration of the **ReactMarkdown** component with enhanced styling and syntax highlighting.

## Features

- **Syntax Highlighting**: Code blocks are automatically highlighted
- **GitHub Flavored Markdown**: Supports tables, strikethrough, and more
- **Responsive Design**: Works great on all devices
- **Custom Styling**: Beautiful, modern styling with Tailwind CSS

### Code Example

Here's a JavaScript code block with syntax highlighting:

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}

const message = greet('World');
console.log(message); // Hello, World!
\`\`\`

### Python Example

\`\`\`python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Generate first 10 Fibonacci numbers
for i in range(10):
    print(fibonacci(i))
\`\`\`

### HTML Example

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
</body>
</html>
\`\`\`

## Lists

### Unordered List
- Item 1
- Item 2
- Item 3
  - Nested item
  - Another nested item

### Ordered List
1. First step
2. Second step
3. Third step

## Tables

| Feature | Description | Status |
|---------|-------------|--------|
| Syntax Highlighting | Automatic code highlighting | ✅ |
| GitHub Flavored Markdown | Tables, strikethrough, etc. | ✅ |
| Responsive Design | Mobile-friendly | ✅ |
| Custom Styling | Beautiful UI | ✅ |

## Blockquotes

> This is a blockquote. It can contain multiple lines and is styled with a left border.

## Links and Emphasis

- [Visit our website](https://example.com)
- *Italic text*
- **Bold text**
- ~~Strikethrough text~~

## Horizontal Rule

---

This content appears after the horizontal rule.

## Inline Code

You can use \`inline code\` within paragraphs for highlighting specific terms or commands.

## Task Lists

- [x] Install dependencies
- [x] Create MarkdownRenderer component
- [x] Add syntax highlighting
- [ ] Deploy to production
- [ ] Add more features

---

*This demo showcases the full capabilities of the ReactMarkdown component with enhanced styling and syntax highlighting.*`;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            ReactMarkdown Demo
          </h1>
          <MarkdownRenderer content={sampleMarkdown} />
        </div>
      </div>
    </div>
  );
};

export default MarkdownDemo;
