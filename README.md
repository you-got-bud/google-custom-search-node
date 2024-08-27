# Google Custom Search for Node.js

This is a simple wrapper for the Google Custom Search API. It allows you to search the web for images, web pages, and more.

## Installation

### PNPM

```bash
pnpm install @you-got-bud/google-custom-search-node
```

### Yarn

```bash
yarn add @you-got-bud/google-custom-search-node
```

### Bun

```bash
bun add @you-got-bud/google-custom-search-node
```

### NPM

```bash
npm install @you-got-bud/google-custom-search-node
```

## Usage

```typescript
import {search, Google} from '@you-got-bud/google-custom-search-node'

const GOOGLE_CX = '<GOOGLE SEARCH ENGINE ID>'
const GOOGLE_API_KEY = '<GOOGLE API KEY>'

const searchParameters = {
  safe: 'active',
} satisfies Google.SearchParameters

const results = await search(
  'cats',
  {
    cx: GOOGLE_CX,
    key: GOOGLE_API_KEY,
  },
  searchParameters
)
```
