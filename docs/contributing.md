# Contributing to this app

Follow this documentation for more information about contributing to this app.

## Developing

The development branch is `canary`, this is the branch that all of the code that is outside of production should be made to, all pull requests from issue branches should be made to this branch, not to main.

A CI process for testing the code will automatically be run against Pull Requests to this branch, these must pass in order for your changes to be merged successfully.

Releases will be made from the production branch after approval and against a release number, which is named `main`.

To develop locally:

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your
   own GitHub account and then
   [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device.
2. Create a new branch (your branch name should be descriptive of the work you are completing):
   ```
   git checkout -b MY_BRANCH_NAME
   ```
3. Install yarn:
   ```
   npm install -g yarn
   ```
4. Install the dependencies with:
   ```
   yarn
   ```
5. Start developing and watch for code changes:
   ```
   yarn dev
   ```

## Building

You can build the project, including all type definitions, with:

```bash
yarn build
```

## Testing

See the [testing documentation](./testing.md) for information on writing tests.

### Running tests

```sh
yarn test
```

### Formatting the Code

This repo uses prettier to ensure structured formatting of the code.

To check the formatting of the code, you can run the following command, this is also run automatically with Ci:

```sh
yarn format:check
```

To format all of your code, run the following command:

```sh
yarn format
```

### Linting

To check the formatting of your code:

```sh
yarn lint
```
