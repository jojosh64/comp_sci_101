const tasks = arr => arr.join(' && ');

module.exports = {
  hooks: {
    'pre-push': tasks(['lint-staged', 'pnpm test']),
  },
};
