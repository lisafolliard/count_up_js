describe('countUp', function() {
  it('take in a value to count up to and a multiple to count by and provides output', function() {
    expect(countUp(20, 5)).to.eql([5, 10, 15, 20]);
  });
});
