
  describe('Routes', function() {
    beforeEach(function() {
      this.router = new window.Routes;
      this.routeSpy = sinon.spy();
      try {
        Backbone.history.start({
          silent: true,
          pushState: true
        });
      } catch (e) {

      }
      return this.router.navigate('elsewhere');
    });
    it('fires the home route with a blank hash', function() {
      this.timerView = new Backbone.View;
      this.timerView.render = sinon.stub();
      this.timerViewStub = sinon.stub(window, 'TimerView').returns(this.timerView);
      this.router.bind('route:home', this.routeSpy);
      this.router.navigate('', true);
      expect(this.routeSpy).toHaveBeenCalledOnce();
      expect(this.routeSpy).toHaveBeenCalledWith();
      return this.timerViewStub.restore();
    });
    return it('fires the search route with a search hash', function() {
      this.router.bind('route:search', this.routeSpy);
      this.router.navigate('search/query', true);
      expect(this.routeSpy).toHaveBeenCalledOnce();
      return expect(this.routeSpy).toHaveBeenCalledWith('query');
    });
  });

  describe('Routing', function() {
    beforeEach(function() {
      return this.router = new window.Routes;
    });
    return describe('home handler', function() {
      beforeEach(function() {
        this.custom_view = new Backbone.View();
        this.custom_view.render = sinon.stub();
        this.view = sinon.stub(window, 'TimerView').returns(this.custom_view);
        return this.router.home();
      });
      afterEach(function() {
        return this.view.restore();
      });
      it('creates a TimerView view', function() {
        expect(this.view).toHaveBeenCalledOnce();
        return expect(this.view).toHaveBeenCalledWith();
      });
      return it('calls the render method of TimerView', function() {
        expect(this.custom_view.render).toHaveBeenCalledOnce();
        return expect(this.custom_view.render).toHaveBeenCalledWith();
      });
    });
  });
