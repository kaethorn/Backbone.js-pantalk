(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.TimerView = (function() {

    __extends(TimerView, Backbone.View);

    function TimerView() {
      TimerView.__super__.constructor.apply(this, arguments);
    }

    TimerView.prototype.tagName = 'li';

    TimerView.prototype.initialize = function() {
      _.bindAll(this, 'render');
      this.template = _.template($('#timer-template').html());
      return this.model.bind('change', this.render);
    };

    TimerView.prototype.render = function() {
      return $(this.el).html(this.template(this.model.toJSON()));
    };

    return TimerView;

  })();

}).call(this);
