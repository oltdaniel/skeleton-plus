# [Skeleton-Plus](http://oltmannsdaniel.github.io/skeleton-plus)

[![GitHub issues](https://img.shields.io/github/issues/oltmannsdaniel/skeleton-plus.svg)](https://github.com/oltmannsdaniel/skeleton-plus/issues)
[![GitHub stars](https://img.shields.io/github/stars/oltmannsdaniel/skeleton-plus.svg)](https://github.com/oltmannsdaniel/skeleton-plus/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/oltmannsdaniel/skeleton-plus.svg)](https://github.com/oltmannsdaniel/skeleton-plus/network)
[![npm](https://img.shields.io/npm/dt/skeleton-plus.svg)]()

Skeleton-Plus is a dead simple, responsive boilerplate to kickstart any responsive web projects.

Check out [skeleton-plus here](https://goo.gl/25fZjC) for Documentation and Demo

# What's in the project?

The project contains a compiled `skeleton.min.css` for using it directly and scss files for those who would like to edit the files.

```
skeleton-plus/
├── index.html
├── package.json
├── gulpfile.js
├── css/
│   ├── normalize.min.css
|   ├── normalize.css
|   ├── skeleton-plus.css
│   └── skeleton-plus.min.css
└── scss/
    ├── _accordion.scss
    ├── _base.scss
    ├── _buttons.scss
    ├── _callouts.scss
    ├── _code.scss
    ├── _grid.scss
    ├── _input.scss
    ├── _list.scss
    ├── _navigation.scss
    ├── _table.scss
    ├── _tooltips.scss
    ├── _typographic.scss
    ├── _utilities.css
    ├── _variables.scss
    └── skeleton-plus.scss
```
---

# Why it's awesome?

Skeleton-Plus is simple and lightweight. It styles raw html elements with other awesome features like Grids, Callouts. Nothing more.

* Has nearly ~900 lines of code (including comments and whitespaces)
* The minified version weighs less than 12KB and even less when gziped :sunglasses:
* It's just a starting point. Not a UI framework

---

# Browser support

Skeleton-Plus supports all the browsers including the older versions of the listed browsers below. But still IE has a large degradation prior to IE9

* Chrome Latest
* Opera Latest
* IE Latest
* FireFox Latest
* Safari Latest

---

# Getting Started

#### HTML

You can simply add the line inside the `<head>` tag. No need of downloading, no need of compiling. Just plug and play

```html
<link rel="stylesheet" href="https://cdn.rawgit.com/oltmannsdaniel/skeleton-plus/master/css/skeleton-plus.min.css" type="text/css" />
```

#### NPM

You can install the project via Node.js NPM manager

```node
$ npm install skeleton-plus --save
```

While, with ***Express.js*** you could use the following code:

```node
app.use('/skeleton-plus', express.static(__dirname + '/node_modules/skeleton-plus/css/'))
```

---

# Development

First, install all the dependencies : 

```node
$ npm install gulp -g && npm install
```

And then, start the `gulp-watch`

```node
$ gulp sass:watch
```

---

# Credits

A project by **[Daniel Oltmanns](https://github.com/oltmannsdaniel)** and [Others](https://github.com/oltmannsdaniel/skeleton-plus/graphs/contributors) for an awesome and better web.

---

# Thanks

* Thanks to [Ryan Grove](https://github.com/rgrove) for an awesome CDN
* Thanks to [Łukasz Dziedzic](https://fonts.google.com/specimen/Lato) for Lato FontFace

---

# License
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/oltmannsdaniel/skeleton-plus/master/LICENSE)
