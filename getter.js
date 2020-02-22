const request = require('request-promise');
// fs save the html to a file
const fs = require('fs');

async function getHtml(url) {
  const html = await request.get(url);
  return html;
}

// write output as a html
function saveHtmlToFile(html) {
  fs.writeFileSync('./test.html', html);
}
async function main() {
  const html = await getHtml(
    'https://losangeles.craigslist.org/d/jobs/search/jjj'
  );
  saveHtmlToFile(html);
}

main();
