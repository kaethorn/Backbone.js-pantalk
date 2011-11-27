describe 'TimerView', ->

  beforeEach ->
    timer = new window.Timer
      name: 'foo'
      time: '60'
    this.view = new window.TimerView
      model: timer

  afterEach ->

  describe 'Instantiation', ->

    it 'should create li element', ->
      expect($(@view.el)).toBe 'li'

  describe 'Rendering', ->

    beforeEach ->
      @view.render()

    it 'should add the element to the DOM', ->
      expect($(@view.el).html()).toContain 'foo'
