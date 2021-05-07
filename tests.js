// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello()).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when passed "Alex" as the input', function () {
       expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it('should return "Hello, Pat!" when passed "Pat" as the input', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return "Hello, World!" when passed "true" as the input', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return "Hello, World!" when passed "false" as the input', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });

    });

describe('isFive', function (){
    it('should be an defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function() {
    expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when passed 5 as the input', function () {
        expect(isFive(5)).toBe(true)
    });
    it('should return true when passed "5" as the input', function () {
        expect(isFive("5")).toBe(true)
    });

    });

describe('isEven', function (){
    it('should be an defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when passed 2 as the input', function () {
        expect(isEven(2)).toBe(true)
    });
    it('should return true when passed -4 as the input', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('should return false when passed 3 as the input', function () {
        expect(isEven(3)).toBe(false)
    });
    it('should return false when passed "banana" as the input', function () {
        expect(isEven("banana")).toBe(false)
    });
    it('should return true when passed "8"" as the input', function () {
        expect(isEven("8")).toBe(true)
    });
    it('should return false when passed Infinity as the input', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('should return false when passed true as the input', function () {
        expect(isEven(true)).toBe(false)
    });
    it('should return false when passed false as the input', function () {
        expect(isEven(false)).toBe(false)
    });
    it('should return false when no argument is passed as the input', function () {
        expect(isEven()).toBe(false)
    });

});

describe('isVowel', function (){
    it('should be an defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isVowel()).toBe("boolean")
    });
    it('should return true when when passed "a" as the input', function () {
        expect(isVowel("a")).toBe(true)
    });
    it('should return true when when passed "A" as the input', function () {
        expect(isVowel("A")).toBe(true)
    });



});