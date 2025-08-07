# Markdown Components

This directory contains ReactMarkdown components for rendering markdown content with enhanced styling and syntax highlighting.

## Components

### MarkdownRenderer
A light theme markdown renderer with beautiful styling and syntax highlighting.

**Usage:**
```jsx
import MarkdownRenderer from './MarkdownRenderer';

<MarkdownRenderer content={markdownContent} className="custom-class" />
```

**Features:**
- Syntax highlighting for code blocks
- GitHub Flavored Markdown support
- Responsive design
- Custom styling with Tailwind CSS
- Table support
- Task lists
- Blockquotes

### DarkMarkdownRenderer
A dark theme markdown renderer specifically designed for dark backgrounds.

**Usage:**
```jsx
import DarkMarkdownRenderer from './DarkMarkdownRenderer';

<DarkMarkdownRenderer content={markdownContent} />
```

**Features:**
- Dark theme optimized colors
- Purple accent colors matching the site theme
- Syntax highlighting with dark theme
- All GitHub Flavored Markdown features

## Dependencies

The components use the following packages:
- `react-markdown` - Core markdown rendering
- `rehype-highlight` - Syntax highlighting
- `remark-gfm` - GitHub Flavored Markdown
- `remark-breaks` - Line break support
- `highlight.js` - Syntax highlighting styles

## Styling

Both components use Tailwind CSS for styling and are fully responsive. The dark theme version uses:
- Purple accents (`text-purple-200`, `text-purple-400`)
- Gray backgrounds (`bg-gray-800`, `bg-gray-900`)
- Dark borders (`border-gray-600`, `border-gray-700`)

## Usage Examples

### Blog Posts
```jsx
import DarkMarkdownRenderer from '../components/DarkMarkdownRenderer';

<DarkMarkdownRenderer content={blog.content} />
```

### Job Requirements
```jsx
import DarkMarkdownRenderer from '../components/DarkMarkdownRenderer';

<DarkMarkdownRenderer content={career.requirements} />
```

### Documentation
```jsx
import MarkdownRenderer from '../components/MarkdownRenderer';

<MarkdownRenderer content={documentation} />
```

## Markdown Features Supported

- **Headers**: `# H1`, `## H2`, etc.
- **Bold/Italic**: `**bold**`, `*italic*`
- **Lists**: `- item`, `1. item`
- **Code**: `` `inline` ``, ````javascript` blocks
- **Links**: `[text](url)`
- **Images**: `![alt](url)`
- **Tables**: GitHub-style tables
- **Task Lists**: `- [x] done`, `- [ ] todo`
- **Blockquotes**: `> quote`
- **Strikethrough**: `~~text~~`
