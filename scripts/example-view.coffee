class window.TimerView extends Backbone.View

  tagName: 'li'

  initialize: ->
    _.bindAll this, 'render'
    @template = _.template $('#timer-template').html()
    @model.bind 'change', @render

  render: ->
    $(@el).html @template(@model.toJSON())
