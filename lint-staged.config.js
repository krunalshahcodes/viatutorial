module.exports = {
  linters: {
    '*.{js,jsx}': ['eslint', 'yarn run lint:fix'],
    '*.+(json|yml|yaml|css|less|scss|md|graphql|mdx)': ['prettier --write', 'git add'],
  },
}
