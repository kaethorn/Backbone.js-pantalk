class window.Timers extends Backbone.Collection

  model: window.Timer

  localStorage: new Store 'backbone_demo'

class window.TimersView extends Backbone.View

  el: 'ul.timers'

  initialize: ->
    _.bindAll this, 'render', 'updateViews', 'insert'
    @updateViews()
    @collection.bind 'add', @insert

  render: ->
    that = this
    # Clear out this element.
    $(@el).empty()

    # Render each sub-view and append it to the parent view's element.
    _(@timerViews).each (v) ->
      $(that.el).append v.render()

  updateViews: ->
    that = this
    @timerViews = []

    @collection.each (timer) ->
      that.timerViews.push new window.TimerView
        model   : timer

  insert: ->
    @updateViews()
    @render()


class window.NewTimer extends Backbone.View

  el: '.new-timer'

  events: ->
    'click .submit': 'submit'

  initialize: ->
    _.bindAll this, 'render'
    @template = _.template $('#new-timer-template').html()
    @model.bind 'change', @render

  render: ->
    $(@el).html @template(@model.toJSON())

  # Adds a new timer view to the collection
  submit: ->
    name = $(@el).find('input.name').val()
    time = $(@el).find('input.time').val()
    unit = $(@el).find('input.unit').val()
    window.timers.add
      name: name
      time: time
      unit: unit
