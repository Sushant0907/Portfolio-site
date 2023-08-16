const express = require ("express")
const cors = require("cors")
const path = require("path")

require("dotenv").config()
const port = 5000


const app = express()

app.use(cors())




// Making Build Folder as Public 
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.get('/mars_img_finder', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });










app.get('/api/imgs', (req, res) => {

    const date = req.query.date
    console.log(date)   

    const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key="+process.env.API_KEY2+"&earth_date=" + date;
    console.log(url)
        
    fetch(url).then((value) => {
        return value.json()
    }).then((value2) => {

        res.json(value2)
    })
 

})






app.listen(port, () =>{

    console.log("backend started on port " + port)

})

























