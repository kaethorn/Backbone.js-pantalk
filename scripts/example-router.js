(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.Routes = (function() {

    __extends(Routes, Backbone.Router);

    function Routes() {
      Routes.__super__.constructor.apply(this, arguments);
    }

    Routes.prototype.routes = {
      '': 'home',
      'search/:query': 'search',
      'search/:query/p:page': 'search'
    };

    Routes.prototype.home = function() {
      this.view = new window.TimerView({
        model: new Backbone.Model
      });
      return this.view.render();
    };

    Routes.prototype.search = function(query, page) {
      return 'foo';
    };

    return Routes;

  })();

}).call(this);
