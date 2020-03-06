const purgeFromPug = require('purgecss-from-pug')
const matter = require('gray-matter')

module.exports = content => purgeFromPug(matter(content).content)