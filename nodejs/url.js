//processing urls
const url=require('url');
const urlString='https://www.google.com/search?q=javascript+url+module&rlz=1C1GCEU_enIN832IN832&oq=javascript+url+module&aqs=chrome..69i57j0l5.10147j0j7&sourceid=chrome&ie=UTF-8';
const parsedUrl=url.parse(urlString,true);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
console.log(parsedUrl);