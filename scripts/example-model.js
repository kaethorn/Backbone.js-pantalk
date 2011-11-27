(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.Timer = (function() {

    __extends(Timer, Backbone.Model);

    function Timer() {
      Timer.__super__.constructor.apply(this, arguments);
    }

    Timer.prototype.initialize = function() {
      return this.reminders = new Backbone.Collection();
    };

    Timer.prototype.defaults = {
      unit: 's'
    };

    Timer.prototype.validate = function(attr) {
      if ((new Date() - attr.end) > 0) return "Timer can't be in the past";
    };

    return Timer;

  })();

}).call(this);
