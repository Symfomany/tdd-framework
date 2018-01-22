# tdd-framework

This module provides easy access to the popular TDD tools of sinon and chai with common chai plugins like sinon-chai and chai-datetime. By
utilizing this module the constant repetition of installing each of these tools seperately, the multiple needed require statement and setup
logic of the chai plugins is eliminated.

## Installation

````shell
$ npm i tdd-framework -D
````

## Usage

````javascript
var tdd = require("tdd-framework");
var expect = tdd.chai.expect;

test("just an example", function(){
    var example = tdd.sinon.stub();
    
    example();
    
    expect(example).to.have.been.calledOnce;
});
````

## Properties

This module only exposes [sinon](http://sinonjs.org/) and [chai](http://chaijs.com/) as properties. So:

````javascript
var tdd = require("tdd-framework");

tdd.chai; // This is the chai instance.
tdd.sinon: // This is the sinon instance.
````

## Chai Plugins

The following chai plugins are automatically registered with the chai instance:

- [sinon-chai](https://github.com/domenic/sinon-chai)
- [chai-datetime](https://github.com/mguterl/chai-datetime)

## Extra

This project also contains a mocha.opts file with my favorite options for running mocha.

## Contribute

This module is biased to the way I currently feel is the best way to perform TDD in a NodeJS environment. With this being such a small
module that basically just exposes other existing modules I don't generally expect issues with the code of this module. But, if you have
any comments or have suggestions for enhancements please let me know via the issue tracker or create a pull request. Thanks!

[tdd-framework GitHub repository](https://github.com/Altiss/tdd-framework)

## License

The project is licensed under the MIT license.