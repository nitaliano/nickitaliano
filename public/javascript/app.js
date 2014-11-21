define(function (require) {
	var Navigation = require('./navigation');
	var Page = require('./page');

	var _views = [Navigation, Page];

	return {
		init: function () {
		  this.views = {};

			for (var i = 0; i < _views.length; i++) {
				this.addView(_views[i]);
		  }
		},

		addView: function (View) {
			if (this.views[View.name]) {
				return;
			}
			this.views[View.name] = new View();
		},

		destoryView: function (name) {
			if (!this.views[name]) {
				return false;
			}

			if (this.views[name].dispose) {
				this.views[name].dispose();
			}

			delete this.views[name];
		}
	};
});