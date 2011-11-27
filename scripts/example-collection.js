(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.Timers = (function() {

    __extends(Timers, Backbone.Collection);

    function Timers() {
      Timers.__super__.constructor.apply(this, arguments);
    }

    Timers.prototype.model = window.Timer;

    Timers.prototype.localStorage = new Store('backbone_demo');

    return Timers;

  })();

  window.TimersView = (function() {

    __extends(TimersView, Backbone.View);

    function TimersView() {
      TimersView.__super__.constructor.apply(this, arguments);
    }

    TimersView.prototype.el = 'ul.timers';

    TimersView.prototype.initialize = function() {
      _.bindAll(this, 'render', 'updateViews', 'insert');
      this.updateViews();
      return this.collection.bind('add', this.insert);
    };

    TimersView.prototype.render = function() {
      var that;
      that = this;
      $(this.el).empty();
      return _(this.timerViews).each(function(v) {
        return $(that.el).append(v.render());
      });
    };

    TimersView.prototype.updateViews = function() {
      var that;
      that = this;
      this.timerViews = [];
      return this.collection.each(function(timer) {
        return that.timerViews.push(new window.TimerView({
          model: timer
        }));
      });
    };

    TimersView.prototype.insert = function() {
      this.updateViews();
      return this.render();
    };

    return TimersView;

  })();

  window.NewTimer = (function() {

    __extends(NewTimer, Backbone.View);

    function NewTimer() {
      NewTimer.__super__.constructor.apply(this, arguments);
    }

    NewTimer.prototype.el = '.new-timer';

    NewTimer.prototype.events = function() {
      return {
        'click .submit': 'submit'
      };
    };

    NewTimer.prototype.initialize = function() {
      _.bindAll(this, 'render');
      this.template = _.template($('#new-timer-template').html());
      return this.model.bind('change', this.render);
    };

    NewTimer.prototype.render = function() {
      return $(this.el).html(this.template(this.model.toJSON()));
    };

    NewTimer.prototype.submit = function() {
      var name, time, unit;
      name = $(this.el).find('input.name').val();
      time = $(this.el).find('input.time').val();
      unit = $(this.el).find('input.unit').val();
      return window.timers.add({
        name: name,
        time: time,
        unit: unit
      });
    };

    return NewTimer;

  })();

}).call(this);
