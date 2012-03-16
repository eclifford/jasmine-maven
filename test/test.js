describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    })
  })
})

describe('is eric awesome', function() {
	it('should equal yes', function() {
		var eric = true;
		eric.should.equal(true);
	})
})