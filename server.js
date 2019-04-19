const express = require ('express');
const app = express ();
const request = require ('request');
const bodyParser = require ('body-parser');
app.use (bodyParser.json ());
app.use (bodyParser.urlencoded ({extended: true}));
const BaseUrl = 'https://api.weixin.qq.com/sns/jscode2session';
var result =
  '{"session_key":"hcoQIzaVlNr\\/UH0tSy0e4w==","openid":"oA9aZ5dvhtWazZgfWi9_JiRJsEic"}';
console.log (JSON.parse (result));

app.post ('/loginInfo', function (req, res, next) {
  console.log (req.body);
  request (
    {
      url: BaseUrl,
      method: 'GET',
      qs: {
        appid: req.body.appId,
        secret: '663788ae7486bf62f09d09049f44e8b0',
        grant_type: 'authorization_code',
        js_code: req.body['js_code'],
      },
    },
    function (error, response, body) {
      res.json(body);
    }
  );
});
app.listen (9999, function () {
  console.log ('listen port 9999 success!');
});
