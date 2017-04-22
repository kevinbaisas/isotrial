
var User = require('../models/users');

module.exports = function(server, io) {

  /** Serve dummy data */
  server.get('/users', function(req, res, next) {
    const { page, limit } = req.query;
    let users = [];

    switch(parseInt(page)) {
      case 1:
        users = one;
        break;
      case 2:
        users = two;
        break;
      case 3:
        users = three;
        break;
    }

    res.send(users);
    next()
  });
};

const one = [
  {
    "_id": "58f41d142c3caf92ef49c691",
    "updated_at": "2017-04-17T01:40:36.095Z",
    "created_at": "2017-04-17T01:40:36.095Z",
    "email": "hecovyri@hotmail.com",
    "first_name": "Karleigh",
    "last_name": "Dunlap",
    "password": "$2a$10$Pnxs.G4qnx1qI0IMxwoE.OKfknxx/rCgYwejsOL7xEMRzR41HLp6a",
    "__v": 0
  },
  {
    "_id": "58f48474f08b8ccc58d1745f",
    "updated_at": "2017-04-17T09:01:44.030Z",
    "created_at": "2017-04-17T09:01:44.030Z",
    "email": "xyz@gmail.com",
    "first_name": "Kevin",
    "last_name": "Baisas",
    "password": "$2a$10$DRv3AbywBkLUHnDCxT/jFOOcKPuRPisBxOMnF15c3Ym2bd6O4GYKm",
    "__v": 0
  },
  {
    "_id": "58f48ece1e1427dffafd85b6",
    "updated_at": "2017-04-17T09:45:53.388Z",
    "created_at": "2017-04-17T09:45:53.388Z",
    "email": "tidulo@yahoo.com",
    "first_name": "Yuli",
    "last_name": "Valencia",
    "password": "$2a$10$J5gFi4ADlfI4ReamkvZkn.OjKFULkBvvb29tztePj6LgjeAc.7syu",
    "__v": 0
  },
  {
    "_id": "58f48f5976b8cae044f724fd",
    "updated_at": "2017-04-17T09:48:12.967Z",
    "created_at": "2017-04-17T09:48:12.967Z",
    "email": "doloqede@yahoo.com",
    "first_name": "Leah",
    "last_name": "Rivas",
    "password": "$2a$10$rM3RfVHW8oK9fQ3MgRdNq.ta5wKApAZa2sRAAug57Jn.Q2m7peGWW",
    "__v": 0
  },
  {
    "_id": "58f4a7ccec0838e7a4056315",
    "updated_at": "2017-04-17T11:32:32.019Z",
    "created_at": "2017-04-17T11:32:32.019Z",
    "email": "mylyhizama@hotmail.com",
    "first_name": "Kyle",
    "last_name": "Howe",
    "password": "$2a$10$8.qEILbyEDLhvFqa84XGl.DVzHimt6YWUX5.0jsRPjyoX/Fq45S7K",
    "__v": 0
  }
];

const two = [
  {
    "_id": "58f4a8889aa26ee82d3c299c",
    "updated_at": "2017-04-17T11:35:39.727Z",
    "created_at": "2017-04-17T11:35:39.727Z",
    "email": "zuhubakapi@hotmail.com",
    "first_name": "Lenore",
    "last_name": "Roth",
    "password": "$2a$10$FDL4lX7oIao.1MdOa7ntd.iVReJ3S/3G.2k8gZ8OTyXVks5PogiHC",
    "__v": 0
  },
  {
    "_id": "58f4a90f7b7361e870acc629",
    "updated_at": "2017-04-17T11:37:54.153Z",
    "created_at": "2017-04-17T11:37:54.153Z",
    "email": "kofomu@yahoo.com",
    "first_name": "Conan",
    "last_name": "Austin",
    "password": "$2a$10$2OtCUc7V192W243oNx4/W.M.y4o0wQmBP9lSFjBxlt42EZmn.HKa.",
    "__v": 0
  },
  {
    "_id": "58f4ab02b66c08e925992762",
    "updated_at": "2017-04-17T11:46:13.690Z",
    "created_at": "2017-04-17T11:46:13.690Z",
    "email": "sepejezum@hotmail.com",
    "first_name": "Shana",
    "last_name": "Mccarthy",
    "password": "$2a$10$vTYdvQ9/FXZrezLUoImaRutj7je5u7fEj3eOJksHxJJzkbuhDcsLW",
    "__v": 0
  },
  {
    "_id": "58f59a56711c11e9475749d3",
    "updated_at": "2017-04-18T04:47:21.976Z",
    "created_at": "2017-04-18T04:47:21.976Z",
    "email": "pomizedis@hotmail.com",
    "first_name": "Rina",
    "last_name": "Frost",
    "password": "$2a$10$TZiVKAbJ5.7rzpzW9hhXheoZxgggC9wCn0fUJ8Kx1Ry0TJmV.8WJW",
    "__v": 0
  },
  {
    "_id": "58f59d322a1de5ed8511158e",
    "updated_at": "2017-04-18T04:59:33.808Z",
    "created_at": "2017-04-18T04:59:33.809Z",
    "email": "hiduk@hotmail.com",
    "first_name": "Odette",
    "last_name": "Chapman",
    "password": "$2a$10$G7L2YMLhVoAUUGYa6driKu9BwAF7kc5V3gbzcCG3Q5S84.i1UmUAC",
    "__v": 0
  }
];

const three = [
  {
    "_id": "58f59e16d6b366ee6778737a",
    "updated_at": "2017-04-18T05:03:21.108Z",
    "created_at": "2017-04-18T05:03:21.108Z",
    "email": "bymuz@gmail.com",
    "first_name": "Ciaran",
    "last_name": "Simmons",
    "password": "$2a$10$doV7S/y3rjSp1Unrc4xWU.L273F2W4Itnwu7fZm1yUWMpreqrVyI2",
    "__v": 0
  },
  {
    "_id": "58f5c0d6754e04f7456b6287",
    "updated_at": "2017-04-18T07:31:37.761Z",
    "created_at": "2017-04-18T07:31:37.761Z",
    "email": "hilatuco@gmail.com",
    "first_name": "Tallulah",
    "last_name": "Irwin",
    "password": "$2a$10$953764TDc6Q4YQMC1zWPPu66PuB80Ot.TszXKxBpSjeVUFJ9Ou8N.",
    "__v": 0
  },
  {
    "_id": "58f5c115a19d25f76b6f6046",
    "updated_at": "2017-04-18T07:32:40.353Z",
    "created_at": "2017-04-18T07:32:40.353Z",
    "email": "dejakoreno@hotmail.com",
    "first_name": "Mariam",
    "last_name": "Garrison",
    "password": "$2a$10$N..2ywKMRF8P7m8E7mkiz.Si92frWDsEhJfdtlK5l7uX8IkXHsaFy",
    "__v": 0
  },
  {
    "_id": "58f5c147f5bf52f798608d29",
    "updated_at": "2017-04-18T07:33:30.914Z",
    "created_at": "2017-04-18T07:33:30.914Z",
    "email": "xifeniqet@hotmail.com",
    "first_name": "Cassidy",
    "last_name": "Dixon",
    "password": "$2a$10$9YZoUocowrWCC1OROYhDt.OclQsAnFoGoLjDNM1RIeex82fZ91JDe",
    "__v": 0
  },
  {
    "_id": "58f5c168f5bf52f798608d2a",
    "updated_at": "2017-04-18T07:34:03.812Z",
    "created_at": "2017-04-18T07:34:03.812Z",
    "email": "gumewygiji@hotmail.com",
    "first_name": "Xaviera",
    "last_name": "Edwards",
    "password": "$2a$10$jjtF3/Teh/QTqeI0HuDfSux4q7HKeOMURoLIWxJWWTwJpZLGgg7B6",
    "__v": 0
  }
];
