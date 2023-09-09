const fs = require('fs');
const axios = require('axios');
const url = require('url');

const [nodePath, scriptPath, fileName] = process.argv;

if (!fileName) {
  console.log('Please provide a FILENAME as an argument.');
  process.exit(1);
}

const fetchAndSaveUrl = async (urlString) => {
  try {
    const response = await axios.get(urlString);
    const parsedUrl = url.parse(urlString);
    const hostname = parsedUrl.hostname;

    fs.writeFileSync(hostname, response.data);
    console.log(`Saved content of ${urlString} to ${hostname}`);
  } catch (error) {
    console.error(`Error fetching ${urlString}: ${error.message}`);
  }
};

fs.readFile(fileName, 'utf-8', (err, data) => {
  if (err) {
    console.error(`Error reading file ${fileName}: ${err.message}`);
    process.exit(1);
  }

  const urls = data.trim().split('\n');
  for (let urlString of urls) {
    fetchAndSaveUrl(urlString);
  }
});