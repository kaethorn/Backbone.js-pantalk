describe 'Timer model', ->

  describe 'when instantiated with a paramter', ->

    beforeEach ->
      @timer = new window.Timer
        name: 'foo'
        time: 10

    it 'should exhibit attributes', ->
      expect(@timer.get('name')).toEqual 'foo'

    it 'should set the unit to seconds by default', ->
      expect(@timer.get('unit')).toEqual 's'

    describe 'validation', ->

      it 'should not save with invalid end time', ->
        @eventSpy = sinon.spy()
        @timer.bind 'error', @eventSpy
        date = new Date()
        date.setDate(date.getDate() - 1)
        @timer.save
          end: date
        expect(@eventSpy).toHaveBeenCalledOnce()
        expect(@eventSpy).toHaveBeenCalledWith(
          @timer
          "Timer can't be in the past"
        )

  describe 'when instantiated without a paramter', ->

    beforeEach ->
      @timer = new window.Timer

    it 'should not have a default name', ->
      expect(@timer.get('name')).toBeUndefined

