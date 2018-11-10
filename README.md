# `skeleton-plus` :ferris_wheel:

[![GitHub issues](https://img.shields.io/github/issues/oltdaniel/skeleton-plus.svg)](https://github.com/oltdaniel/skeleton-plus/issues)
[![GitHub stars](https://img.shields.io/github/stars/oltdaniel/skeleton-plus.svg)](https://github.com/oltdaniel/skeleton-plus/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/oltdaniel/skeleton-plus.svg)](https://github.com/oltdaniel/skeleton-plus/network)
[![npm](https://img.shields.io/npm/dt/skeleton-plus.svg)](https://www.npmjs.com/package/skeleton-plus)

`skeleton-plus` is a fresh looking but still simple css framework. _(only ~7kb, gzip => 2.1kb)_

## About

`skeleton-plus` is a fresh looking but still simple css framework that should be taken as basis for your next website. We designed it to be flexible but still small, thanks to `scss` you need to change some variables and you have your own version of `skeleton-plus` :sunglasses:

## How to use it

Thanks to the opportunities the open-source development offers us, there are thousand ways to use this libary or change it. Below here I list only a few of them.

### Just use it

Add `<link rel="stylesheet" href="css/skeleton-plus.min.css">` to your `<head>`. If you want to use it in production, use the following links from awesome CDN's _(which I really thank)_:

```
https://cdn.rawgit.com/oldaniel/skeleton-plus/master/dist/skeleton-plus.min.css
https://unpkg.com/skeleton-plus/dist/skeleton-plus.min.css
```

### Download it

`skeleton-plus` can be downloaded over NPM or Github with the following commands:

**GitHub**: `$ git clone https://github.com/oldaniel/skeleton-plus`

**Npm**: `$ npm install skeleton-plus`

#### Don't like the new design?

Jump back to version two by using:

**Npm**: `$ npm install skeleton-plus@2.0.1`

```
https://cdn.rawgit.com/oltdaniel/skeleton-plus/v2.0.0/css/skeleton.plus.min.css
https://cdn.rawgit.com/oltdaniel/skeleton-plus/v2.0.0/css/normalize.min.css

https://unpkg.com/skeleton-plus@2.0.1/css/skeleton-plus.min.css
https://unpkg.com/skeleton-plus@2.0.1/css/normalize.min.css
```

### Change it

Clone and mix up things. If you think your edits are interesting for the public, just open a new pull request on that.

Here a brief overview of our folder structure:

```
skeleton-plus
├── dist # Our destination folder
│   ├── skeleton-plus.css
│   ├── skeleton-plus.min.css
│   └── index.html
├── src # Our source folder
│   ├── _base.scss
│   ├── _button.scss
│   ├── _extra.scss
│   ├── _grid.scss
│   ├── _input.scss
│   ├── _navigation.scss
│   ├── _table.scss
│   ├── _typography.scss
│   └── style.scss
├── LICENSE
├── README.md
├── gulpfile.js
└── package.json
```

Some `gulp` task you should know about:

- `scss` compiles the scss to css
- `scss:min` compress the compiled css files
- `watch` executes `scss` and `scss:min` on any file change

**Required tools for development:**

- Node.js
- NPM
- Gulp installed globally (`npm install gulp -g`)

## Credits & License

A project by [Daniel Oltmanns](https://github.com/oltdaniel).
Other amazing contributors [here](https://github.com/oltdaniel/skeleton-plus/graphs/contributors).

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/oltdaniel/skeleton-plus/master/LICENSE)
