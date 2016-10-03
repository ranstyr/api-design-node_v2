var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./postController');
var auth = require('../../auth/auth');

//[ran.S] , decodeToken - check id we have token , if we have it will put the user at req.user
//[ran.S] , geFreshUser - if we have token , fetch it to req.user (it will replace the req.user of ecode user)
var checkUser = [auth.decodeToken(), auth.getFreshUser()];
// setup boilerplate route jsut to satisfy a request
// for building
router.param('id', controller.params);

router.route('/')
  .get(controller.get)
  .post(checkUser ,controller.post)

router.route('/:id')
  .get(controller.getOne)
  .put(checkUser, controller.put)
  .delete(checkUser, controller.delete)

module.exports = router;
