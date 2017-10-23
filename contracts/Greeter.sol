pragma solidity ^0.4.15;

contract Greeter {

  string greeting = "Hello Stranger!";

  function setGreeting(string _greeting) {
    greeting = _greeting;
  }

  function greet() constant returns(string){
    return greeting;
  }
}
