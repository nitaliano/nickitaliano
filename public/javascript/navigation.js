define([
  './section',
  'backbone',
  'jquery', 
  'jquery.bootstrap'
], function (Section, Backbone, $) {

  var Navigation = function () {
    this.$body = $('body');
    this.$window = $(window);
    this.$nav = $('nav');
    this.$navItems = this.$nav.find('li');
    this.$navToggle = this.$nav.find('.navbar-toggle');
    this.$navCollapse = this.$nav.find('.navbar-collapse');

    this.sections = {};
    this.initSections();

    this.$nav.on('click', 'li', this.onNavigationItemClick.bind(this));
    this.$nav.on('click', '.navbar-toggle', this.onNavigationToggleClick.bind(this));

    Backbone.history.start({ pushState: true });
  };

  $.extend(Navigation.prototype, {

    config: {
      const_title: ' Nick Italiano',
      page_title: {
        '/': 'O_o',
        '/about': '8)',
        '/experience': ';)',
        '/skills': ':P'
      }
    },

    routes: ['', 'about', 'experience', 'skills'],

    initSections: function () {
      var route, i;

      // init View for each route
      for (i = 0; i < this.routes.length; i++) {
        route = this.routes[i];
        this.sections['/' + route] = new Section({
          el: $('#' + (route === '' ? 'home' : route) + '-section'),
          $body: this.$body,
          $window: this.$window
        });
      }

      // set current section and scroll to it, if it's below the fold
      this.currentSection = location.pathname;
      if (this.currentSection !== '/') {
        this.sections[this.currentSection].scroll();
      }
    },

    onNavigationToggleClick: function (e) {
      // mobile only, slide out navigation panel, and add scroll lock
      this.$body.toggleClass('noscroll');
      this.$nav.toggleClass('active');
    },

    onNavigationItemClick: function (e) {
      e.stopPropagation();
      e.preventDefault();

      // handle navigation
      var route = e && e.currentTarget ? $(e.currentTarget).find('a').attr('href') : '/';
      this.setActiveNavItem(route);
      this.setHistory(route);
      this.setTitle(route);
      this.setSection(route);

      // mobile only, remove scroll lock class, and collapse navigation panel
      if (this.$body.hasClass('noscroll')) {
        this.$body.toggleClass('noscroll');
        this.$nav.toggleClass('active');
        this.$navCollapse.toggleClass('in').toggleClass('collapse');
      }
    },

    setSection: function () {
      // return if the section clicked on is what is displayed or does not exist
      if (this.currentSection === location.pathname || !this.sections[location.pathname]) {
        return;
      }

      // set current section, and scroll to section
      this.currentSection = location.pathname;
      this.sections[this.currentSection].scroll();
    },

    setActiveNavItem: function (route) {
      this.$navItems.removeClass('active');
      this.$navItems.find('a[href="' + route + '"]').parent().addClass('active');
    },

    setHistory: function (route) {
      Backbone.history.navigate(route);
    },

    setTitle: function (route) {
      document.title = this.config.page_title[route] + this.config.const_title;
    }
  });
  return Navigation;
});