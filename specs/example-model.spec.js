
  describe('Timer model', function() {
    describe('when instantiated with a paramter', function() {
      beforeEach(function() {
        return this.timer = new window.Timer({
          name: 'foo',
          time: 10
        });
      });
      it('should exhibit attributes', function() {
        return expect(this.timer.get('name')).toEqual('foo');
      });
      it('should set the unit to seconds by default', function() {
        return expect(this.timer.get('unit')).toEqual('s');
      });
      return describe('validation', function() {
        return it('should not save with invalid end time', function() {
          var date;
          this.eventSpy = sinon.spy();
          this.timer.bind('error', this.eventSpy);
          date = new Date();
          date.setDate(date.getDate() - 1);
          this.timer.save({
            end: date
          });
          expect(this.eventSpy).toHaveBeenCalledOnce();
          return expect(this.eventSpy).toHaveBeenCalledWith(this.timer, "Timer can't be in the past");
        });
      });
    });
    return describe('when instantiated without a paramter', function() {
      beforeEach(function() {
        return this.timer = new window.Timer;
      });
      return it('should not have a default name', function() {
        return expect(this.timer.get('name')).toBeUndefined();
      });
    });
  });
