const express = require('express')
const port = 3002
const cors = require('cors');
const run = require('./server.js');
const https = require('https');
const fs = require('fs');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public"))

//Main
const proxy = require('pass-cors')
app.use('/proxy', proxy);  //You can customise the route name
  

app.get('/search/:search', async (req, res) => {
    try {
      const searchText = req.params.search;
  
      const results = await run(searchText);

      const options = {
        headers: {
          'Referer': 'https://www.instagram.com/'
        }
      };

      for (i in results) {

        image_url = results[i]['cover_image'];


        // https.get(image_url, options, (response) => {
        //     const fileName =  "/Users/denizdemirtas/Desktop/Decal/decal-project/public/" + i.toString() +'.jpg';
        //     const filePath = fs.createWriteStream(fileName);
        //     response.pipe(filePath);
        //     filePath.on('finish', () => {
        //       filePath.close();
        //       console.log('Image downloaded successfully.');
        //     });

        //   }).on('error', (error) => {
        //     console.error(`Error while downloading image: ${error}`);
        //   });
    }

      for (i in results) {

        results[i]['cover_image'] = "/" + i.toString() + ".jpg";
      }

    
      res.json(results);


    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while running the function.');
    }
  });


app.listen(port, () => {
    console.log(`Block Server listening at http://localhost:${port}`)
  })