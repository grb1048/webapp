var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(`
    <doctype HTML!>
      <body>
      <form action="/result">

      <input type="number" name="numberInput"/>

      <input type="submit" value="Submit!"/>
      </form>
      </body>`);
})

router.get('/result', function(req, res, next) {
  let multnum = req.query.numberInput * 2;
  res.send(`
    <doctype HTML!>
      <body>
      <p>${multnum}</p>
      </body>`);
})

module.exports = router;
