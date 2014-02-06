module.exports = function (res, options) {
  res.render('index', setPageOptions(options));
};

function setPageOptions(options) {
  return {
    title: options.title,
    cssPath: '/css/nickitaliano.css',
    modernizrPath: '/vendor/modernizr/modernizr.js',
    requirejs: {
      path: '/vendor/requirejs/require.js',
      main: '/javascript/main'
    },
    routes: [
      {
        name: 'Home',
        isOpen: options.isHome,
        href: '/',
      },
      {
        name: 'About',
        isOpen: options.isAbout,
        href: '/about'
      },
      {
        name: 'Experience',
        isOpen: options.isExp,
        href: '/experience'
      },
      {
        name: 'Skills',
        isOpen: options.isSkills,
        href: '/skills'
      }
    ],
    experience: [
      {
        code: 'dow',
        open: true,
        title: 'Application Developer',
        company: 'Dow Jones'
      },
      {
        code: 'amzn',
        title: 'Software Development Engineer Intern',
        company: 'Amazon Inc'
      },
      {
        code: 'rde',
        title: 'Software Development Engineer Intern',
        company: 'RDE Systems Support Group'
      }
    ],
    skills: [
      'Javascript',
      'Java',
      'HTML5',
      'CSS3',
      'NodeJS',
      'Backbone',
      'Underscore',
      'Bootstrap',
      'Jenkins',
      'MongoDB',
      'MySQL'
    ],
    partials: {
      _nav: '_nav',
      _home: '_home',
      _about: '_about',
      _experience: '_experience',
      _skills: '_skills',
      _loader: '_loader'
    }
  };
}