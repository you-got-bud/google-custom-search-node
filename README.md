# Google Custom Search for Node.js

[![NPM Version](https://img.shields.io/npm/v/%40you-got-bud%2Fgoogle-custom-search-node)](https://www.npmjs.com/package/@you-got-bud/google-custom-search-node) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/%40you-got-bud%2Fgoogle-custom-search-node?style=flat)](https://bundlephobia.com/package/@you-got-bud%2fgoogle-custom-search-node)

This is a simple wrapper for the Google Custom Search API. It allows you to search the web for images, web pages, and more.

## Installation

### PNPM

```bash
pnpm add @you-got-bud/google-custom-search-node
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
npm i @you-got-bud/google-custom-search-node -S
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
