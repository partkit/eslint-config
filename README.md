# eslint-config
ESLint config for @partkit

[![npm version](https://badge.fury.io/js/%40partkit%2Feslint-config.svg)](https://badge.fury.io/js/%40partkit%2Feslint-config)

## Installation
To install this configuration, run
```
npx install-peerdeps --dev @partkit/eslint-config
```
and add it to the `extends` field of your `.eslintrc` file:
```json
{
    "root": true,
    "extends": ["@partkit"]
}
```

## Usage
Lint your project as usual, e.g. `npx eslint "src/**" --fix`

## Configuration

### Setting a custom `tsconfig.json`
You can customize the `tsconfig.json` file which the parser uses for analyzing and linting your project by setting it in your `.eslintrc` file:
```json
{
    "root": true,
    "extends": ["@partkit"],
    "parserOptions": {
        "project": ["./src/tsconfig.build.json"]
    }
}
```
The default value is `./tsconfig.json`.

### Customizing rules
You can customize rules by adding them to the `rules` field of your `.eslintrc` file:
```json
{
    "root": true,
    "extends": ["@partkit"],
    "parserOptions": {
        "project": ["./src/tsconfig.build.json"]
    },
    "rules": {
        "no-var": "off",
        "quotes": [
            "error",
            "single"
        ]
    }
}
```

### Ignoring files
If you are generating JavaScript files from your TypeScript sources you might want to ignore the build output when linting your project. You can do that by setting the `ignoredPatterns` key in your `.eslintrc` file to the folders/files you'd like to ignore:

```json
{
  "root": true,
  "extends": [
    "@partkit"
  ],
  "ignorePatterns": [
    "./dist",
    "*.js"
  ]
}
```

### Decorators
When using decorators in TypeScript the `@typescript-eslint/indent` rule will start reporting false indentation errors for property decorators since version `8.0.0` of eslint (https://github.com/eslint/eslint/issues/15299). Currently, the only way to 'fix' this is adding the `ignoredNodes: ["PropertyDefinition"]` option to the `@typescript-eslint/indent` rule in your `.eslintrc` file:
```json
{
  "root": true,
  "extends": [
    "@partkit"
  ],
  "ignorePatterns": [
    "./dist",
    "*.js"
  ],
  "rules": {
    "@typescript-eslint/indent": [
      "error",
      4,
      {
        "SwitchCase": 1,
        "ignoredNodes": [
          "PropertyDefinition"
        ]
      }
    ]
  }
}
```

### Import statements with `.js` extension
If your build-target are non-bundled ES6 modules and you wish to support loading your build output in browsers without an extra build step (and you should probably consider that), your import statements need to specify the file name **and** extension. While TypeScript can easily resolve your imports - even though you're technically importing from a .ts source and not a .js source - eslint-plugin-imports will error with unresolved imports. In this case you can disable this warning by updating the `import/no-unresolved` rule in your `.eslintrc` file:

```json
{
  "root": true,
  "extends": [
    "@partkit"
  ],
  "ignorePatterns": [
    "./dist",
    "*.js"
  ],
  "rules": {
    "import/no-unresolved": [
      "error",
      {
        "ignore": [
          "\\.js$"
        ]
      }
    ]
  }
}
```
