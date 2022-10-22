<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/85207525-a3b80a80-b329-11ea-99d5-12f76147d2cc.png">  
</p>
<p align="center">
    <i>Get the default branch name of a GitHub repo</i>
    <br>
    <br>
    <img src="https://github.com/garronej/get-github-default-branch-name/workflows/ci/badge.svg?branch=master">
    <img src="https://img.shields.io/npm/l/get-github-default-branch-name">
</p>

[The default branch name is no longer `master`](https://www.bbc.com/news/technology-53050955). To avoid things to break
it is a good idea to replace in your codebase the hard coded `master` word and fetch whatever the default branch is dynamically.

This module provide a way to fetch the default branch name synchronously which could save you massive refactoring.  
Of course you should only do the call synchronously if you can't do otherwise.

Previous result are saved so if you call the method multiple time against the same repo the request will be made only once.

# Usage

```bash
$ npm install --save get-github-default-branch-name
```

```typescript
import {
    getGithubDefaultBranchName,
    getGithubDefaultBranchNameSync,
} from "get-github-default-branch-name";

//Prints "develop" because the default branch of garronej/evt is "develop" instead of "master"
getGithubDefaultBranchName({
    "owner": "garronej",
    "repo": "evt",
}).then(defaultBranchName => console.log(defaultBranchName));

//Synchronous version, avoid using if possible. Only OK for scripts.

const defaultBranchName = getGithubDefaultBranchNameSync({
    "owner": "garronej",
    "repo": "evt",
});

console.log(defaultBranchName); // Prints "develop"
```

## Contribute

```bash
npm install
npm run build
npm test
```
