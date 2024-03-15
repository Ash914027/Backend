//querystring
const querystring = require('querystring');
const url = require('url');
const querystring='foo=bar&baz=qux'
const parsedQuery=querystring.parse(QueryString);
const urlString = 'https://www.google.com/search?q=javascript+url+module&rlz=1C1GCEU_enIN832IN832&oq=javascript+url+module&aqs=chrome..69i57j0l5.10147j0j7&sourceid=chrome&ie=UTF-8';
console.log(parsedQuery);
