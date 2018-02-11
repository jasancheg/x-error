const verifydError = require('../index');

let MyError;
let err2;
let err;

describe('factory', () => {
  it('should make an error constructor', () => {
    MyError = verifydError('MyError', 'code');
    MyError.should.be.a.Function;
  });
});

describe('constructor', () => {
  it('should make a error object that works with instanceof and typeof', () => {
    MyError = verifydError('MyError', 'code');
    err = new MyError();
    err.should.be.instanceof(MyError);
    err.should.be.instanceof(Error);
    err.should.be.an.object;
  });

  it('should set .name and .message properly', () => {
    MyError = verifydError('MyError', 'code');
    err = new MyError('test');
    err.name.should.eql('MyError');
    err.message.should.eql('test');
  });

  it('should set default properties from second argument if it is an object', () => {
    MyError = verifydError('MyError', {code: 123, foo: 'bar'});
    err = new MyError();
    err.code.should.eql(123);
    err.foo.should.eql('bar');
  });

  it('should set default code if second argument is a string', () => {
    MyError = verifydError('MyError', 'ENOENT');
    err = new MyError();
    err.code.should.eql('ENOENT');
  });

  it('should set default code if second argument is a number', () => {
    MyError = verifydError('MyError', 123);
    err = new MyError();
    err.code.should.eql(123);
  });

  it('should set valid date for timestamp', () => {
    MyError = verifydError('MyError', 123);
    err = new MyError();
    err.timestamp.should.be.instanceof(Date);
  });
});

describe('object', () => {
  it('should set properties from second argument if it is an object', () => {
    MyError = verifydError('MyError', { code: 123 });
    err = new MyError();
    err.code.should.eql(123);
  });

  it('should set code if second argument is a string', () => {
    MyError = verifydError('MyError');
    err = new MyError('test', 'ENOENT');
    err.code.should.eql('ENOENT');
  });

  it('should set code if second argument is a number', () => {
    MyError = verifydError('MyError');
    err = new MyError('test', 123);
    err.code.should.eql(123);
  });

  it('should merge with defaults from constructor', () => {
    MyError = verifydError('MyError', { code: 123, foo: 'bar' });
    err = new MyError('test', 'ENOENT');

    err.code.should.eql('ENOENT');
    err.foo.should.eql('bar');

    err2 = new MyError('test', { foo: 'baz', bar: 'bin' });
    err2.code.should.eql(123);
    err2.foo.should.eql('baz');
    err2.bar.should.eql('bin');
  });
});
