const axios = require('axios');

const BASEURL = "https://redline-redline-zipcode.p.rapidapi.com";
const apiKey = process.env.REACT_APP_API_KEY ||"";

module.exports = {
  getZipcodes:function(req, res) {
    console.log(req.body)
    // axios.get(BASEURL + req.params.distance, {
    //   headers: {
    //     'X-RapidAPI-Host': "redline-redline-zipcode.p.rapidapi.com",
    //     'X-RapidAPI-Key': apiKey,
    //   },
    // })

    //   .then(result => res.json(result.data.results))

    //   .catch(err => res.status(422).json(err));
  },
};