import * as express from 'express';
import User from "../public/javascripts/model/User";

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    var u = new User();
    u.id = 'abc';
    u.name = 'Joe';
    res.json(u);
});

router.post('/', function(req, res, next) {
   var u:User = <User>req.body;
    u.id = '55';
    res.json(u);
});

module.exports = router;
