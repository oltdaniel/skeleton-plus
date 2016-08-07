# skeleton-plus
This is an Plus Version of Skeleton.css


# Why skeleton-plus ?
Skeleton plus include more colors and functions than the normal Skeleton Version.


#How to install ?

Github

  Clone the repo from Github with:

  `git clone https://github.com/oltmannsdaniel/skeleton-plus.git`

NPM

  Install skeleton-plus over the Node.js NPM Manager:

  `npm install skeleton-plus`

  With ExpressJs you should use following code:

  `app.use('/skeleton-plus', express.static(__dirname + '/node_modules/skeleton-plus/css/'));`

  And in the HTML file:

  `<link rel="stylesheet" href="skeleton-plus/skeleton.plus.css">`


# Development

Install all Dependencies :

`$ npm install gulp -g && npm install`

Start gulp-watch:

`$ gulp sass:watch`

# Example Page
http://oltmannsdaniel.github.io/skeleton-plus
