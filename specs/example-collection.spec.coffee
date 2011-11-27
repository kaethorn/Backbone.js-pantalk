describe 'Timers collection', ->

  beforeEach ->

    @timer1 = new Backbone.Model
      id: 1
      name: 'foo'
    @timer2 = new Backbone.Model
      id: 2
      name: 'bar'

    @timers = new window.Timers
    @timerStub = sinon.stub window, 'Timer'

  afterEach ->
    @timerStub.restore()

  describe 'When instantiated with model literal', ->

    beforeEach ->
      @model = new Backbone.Model
        id: 3
        name: 'foobar'
      @timerStub.returns @model
      @timers.model = window.Timer
      @timers.add
        id: 3
        name: 'foobar'

    it 'should have one Timer model', ->
      expect(@timers.length).toEqual 1
      expect(@timerStub).toHaveBeenCalled()

    it 'should find a model by id', ->
      expect(@timers.get(3).get('id')).toEqual @model.get('id')

    it 'should find a model by index', ->
      expect(@timers.at(0).get('id')).toEqual @model.get('id')

    it 'should have called the Timer constructor', ->
      expect(@timerStub).toHaveBeenCalledOnce()
      expect(@timerStub).toHaveBeenCalledWith
        id:3
        name: 'foobar'

  describe 'When adding models', ->

    it 'should order models by id by default', ->
      @timers.model = window.Timer
      @timers.add([@timer1, @timer2])
      expect(@timers.at(0)).toBe @timer1
      expect(@timers.at(1)).toBe @timer2
