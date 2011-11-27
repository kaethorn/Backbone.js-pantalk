
  describe('Timers collection', function() {
    beforeEach(function() {
      this.timer1 = new Backbone.Model({
        id: 1,
        name: 'foo'
      });
      this.timer2 = new Backbone.Model({
        id: 2,
        name: 'bar'
      });
      this.timers = new window.Timers;
      return this.timerStub = sinon.stub(window, 'Timer');
    });
    afterEach(function() {
      return this.timerStub.restore();
    });
    describe('When instantiated with model literal', function() {
      beforeEach(function() {
        this.model = new Backbone.Model({
          id: 3,
          name: 'foobar'
        });
        this.timerStub.returns(this.model);
        this.timers.model = window.Timer;
        return this.timers.add({
          id: 3,
          name: 'foobar'
        });
      });
      it('should have one Timer model', function() {
        expect(this.timers.length).toEqual(1);
        return expect(this.timerStub).toHaveBeenCalled();
      });
      it('should find a model by id', function() {
        return expect(this.timers.get(3).get('id')).toEqual(this.model.get('id'));
      });
      it('should find a model by index', function() {
        return expect(this.timers.at(0).get('id')).toEqual(this.model.get('id'));
      });
      return it('should have called the Timer constructor', function() {
        expect(this.timerStub).toHaveBeenCalledOnce();
        return expect(this.timerStub).toHaveBeenCalledWith({
          id: 3,
          name: 'foobar'
        });
      });
    });
    return describe('When adding models', function() {
      return it('should order models by id by default', function() {
        this.timers.model = window.Timer;
        this.timers.add([this.timer1, this.timer2]);
        expect(this.timers.at(0)).toBe(this.timer1);
        return expect(this.timers.at(1)).toBe(this.timer2);
      });
    });
  });
