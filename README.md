# MediaHound Library ESLint config

Our in-house config for libraries using ESLint.

## Requirements

We use a few ESLint plugins. They are marked as `peerDependencies` to this project. You will need to install them along with this config:

```
npm install --save-dev eslint-config-mediahound babel-eslint eslint-plugin-import
```

Then, in your `.eslintrc` file, add:

```
{
  "extends": "mediahound-library"
}
```
