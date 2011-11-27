class window.Timer extends Backbone.Model

  initialize: ->
    @reminders = new Backbone.Collection()

  defaults:
    unit: 's'

  validate: (attr) ->
    if ((new Date() - attr.end) > 0)
      return "Timer can't be in the past"
