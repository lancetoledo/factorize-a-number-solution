const expect = chai.expect,
  testnum = 12;
describe('Factorize a Number', () => {
  it('Return the factors of a number in an array', () => {
    expect(factorize(testnum)).to.eql(
      [1, 2, 3, 4, 6, 12],
      'Please check your function!'
    );
  });
});
