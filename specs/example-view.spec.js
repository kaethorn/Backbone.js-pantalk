
  describe('TimerView', function() {
    beforeEach(function() {
      var timer;
      timer = new window.Timer({
        name: 'foo',
        time: '60'
      });
      return this.view = new window.TimerView({
        model: timer
      });
    });
    afterEach(function() {});
    describe('Instantiation', function() {
      return it('should create li element', function() {
        return expect($(this.view.el)).toBe('li');
      });
    });
    return describe('Rendering', function() {
      beforeEach(function() {
        return this.view.render();
      });
      return it('should add the element to the DOM', function() {
        return expect($(this.view.el).html()).toContain('foo');
      });
    });
  });
