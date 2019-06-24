module.exports = {
  linters: {
    '*.{js,jsx}': ['yarn run lint:fix', 'eslint'],
    '*.+(json|yml|yaml|css|less|scss|md|graphql|mdx)': ['prettier --write', 'git add'],
  },
}
