const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());


app.post('/', async function(req, res, next) {
  try {
    
    // Use Promise.all to wait for all promises to resolve
    let responses = await Promise.all(
      req.body.developers.map(d => axios.get(`https://api.github.com/users/${d}`))
      );
      console.log(req.body);
    

    let out = responses.map(r => ({ name: r.data.name, bio: r.data.bio }));
    return res.send(JSON.stringify(out));

  } catch (err) {
    next(err);
  }
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});
