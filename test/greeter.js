var Greeter = artifacts.require("./Greeter.sol");

contract('Greeter', function(accounts) {
  it("should have a default greeting", function() {
    return Greeter.deployed().then(function(instance) {
      return instance.greet.call();
    }).then(function(greeting) {
      assert.equal(greeting, "Hello Stranger!", "Did not greet properly");
    });
  });

  it("should change greeting", function() {
    // Get initial balances of first and second account.
    var meta;
    var newGreeting = "Howdy neighbor!";

    return Greeter.deployed().then(function(instance) {
      meta = instance
      return meta.setGreeting(newGreeting);
    }).then(function () {
      return meta.greet()
    }).then(function(greeting) {
      assert.equal(greeting, newGreeting, "Greeting did not change properly");
    });
  });
});
