const joinFiles = files => files.join(' ');

module.exports = {
  '**/*.js?(x)': files => [
    `eslint --fix ${joinFiles(files)}`,
    `prettier --config-precedence prefer-file --write ${joinFiles(files)}`,
    'git add',
  ],
};
