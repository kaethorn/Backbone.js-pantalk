class window.Routes extends Backbone.Router

  routes:
    '': 'home',
    'search/:query': 'search',
    'search/:query/p:page': 'search'

  home: ->
    @view = new window.TimerView
    @view.render()

  search: (query, page) ->
    'foo'
