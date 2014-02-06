var url = require('url');
var page = require('../models/page');

module.exports = function () {
  return function(req, res, next) {
  	var route = url.parse(req.url).pathname;
  	handle(route ? route : '/error', res, next);
  }
};

var handlers = {
 '/': { 
    options: {
      isHome: true,
      title: 'O_o'
    } 
  },
 '/about': { 
    options: {
      isAbout: true,
      title: '8)'
    }
  },
 '/experience': { 
    options: {
      isExp: true,
      title: ';)'
    }
  },
 '/skills': { 
    options: {
      isSkills: true,
      title: ':P'
    }
  },
  '/error': { 
    options: {
      isError: true,
      title: 'Nick Italiano - Page Not Found'
    } 
  }
};

function handle(route, res, next) {
  if (!handlers[route]) {
    return next();
  }
  page(res, handlers[route].options);
}