<p align="center"><img src="https://codenteq.com/wp-content/uploads/2024/03/interfeys-logo.webp" width="250" alt="İnterfeys Design System Logo" /></p>

<h1 align="center">Interfeys Design System</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/@codenteq/interfeys">
    <img src="https://img.shields.io/npm/v/@codenteq/interfeys.svg" alt="NPM Package Stable" />
  </a>
  <a href="https://github.com/codenteq/interfeys/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/codenteq/interfeys.svg" alt="License" />
  </a>
  <a href="https://www.jsdelivr.com/package/npm/@codenteq/interfeys">
    <img src="https://img.shields.io/jsdelivr/npm/hm/@codenteq/interfeys" alt="jsDelivr hits" />
  </a>
  <a href="https://github.com/semantic-release/semantic-release">
    <img src="https://img.shields.io/badge/semantic--release-react-e10079?logo=semantic-release" alt="semantic-release: angular" />
  </a>
</p>

Interfeys is a design system provided by [Codenteq](https://github.com/codenteq) to create a consistent UI/UX for app users.

Web implementation of the design system is created as native web components so it can be used within every type of web frameworks including React. Our target is providing a UI library that has neatly designed and developed for providing best possible user experience for the users of applications that uses Interfeys DS.

## Getting Started

First, install the package:
```bash
npm i @codenteq/interfeys
```

In order for the styles to be applied correctly, you will need to ensure that the path to @codenteq is included in the content field of your `tailwind.config.ts`.
```javascript
'./node_modules/@codenteq/**/*.{js,ts,jsx,tsx}'
```

```typescript
import { Button } from '@codenteq/interfeys';

export function Primary() {
    return <Button>Interfeys works!</Button>;
}
```

## How to contribute
Interfeys Design System is always open for direct contributions. Contributions can be in the form of design suggestions, documentation improvements, new component suggestions, code improvements, adding new features or fixing problems. For more information please check our [Contribution Guideline document.](https://github.com/codenteq/interfeys/blob/master/CONTRIBUTING.md)

## Useful Links

* [Storybook Documentation](https://interfeys.codenteq.com/)
