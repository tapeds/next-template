module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "pnpm typecheck",

  // Lint & Prettify TS and JS files
  "**/*.(ts|tsx|js)": () => [`pnpm lint `, `pnpm format:write`],

  // Prettify only Markdown and JSON files
  "**/*.(md|json)": () => `pnpm format:write`,
};
