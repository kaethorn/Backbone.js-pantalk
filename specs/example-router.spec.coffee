describe 'Routes', ->

  beforeEach ->
    @router = new window.Routes
    @routeSpy = sinon.spy()
    try
      Backbone.history.start()
        silent: true,
        pushState:true
    catch e
    @router.navigate 'elsewhere', false

  afterEach ->
    @router.navigate ''

  it 'fires the home route with a blank hash', ->
    @timerView = new Backbone.View
    @timerView.render = sinon.stub()
    @timerViewStub = sinon.stub(window, 'TimerView').returns(@timerView)

    @router.bind 'route:home', @routeSpy
    @router.navigate '', true
    expect(@routeSpy).toHaveBeenCalledOnce()
    expect(@routeSpy).toHaveBeenCalledWith()

    @timerViewStub.restore()

  it 'fires the search route with a search hash', ->
    @router.bind 'route:search', @routeSpy
    @router.navigate 'search/query', true
    expect(@routeSpy).toHaveBeenCalledOnce()
    expect(@routeSpy).toHaveBeenCalledWith('query')


describe 'Routing', ->

  beforeEach ->
    @router = new window.Routes

  describe 'home handler', ->

    beforeEach ->
      @custom_view = new Backbone.View()
      @custom_view.render = sinon.stub()
      @view =
        sinon.stub(window, 'TimerView').returns(@custom_view)
      @router.home()

    afterEach ->
      @view.restore()
      @router.navigate '', false

    it 'creates a TimerView view', ->
      expect(@view).toHaveBeenCalledOnce()
      expect(@view).toHaveBeenCalledWith()

    it 'calls the render method of TimerView', ->
      expect(@custom_view.render).toHaveBeenCalledOnce()
      expect(@custom_view.render).toHaveBeenCalledWith()
