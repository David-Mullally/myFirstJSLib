(function (global, $) {
  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  var supportedLangs = ["en", "de", "pt"];

  var greetings = {
    en: "Hey!",
    de: "Wie geht's?",
    pt: "Oi!",
  };

  var formalGreetings = {
    en: "Hello",
    de: "Hallo",
    pt: "Ola",
  };

  var loggedMessages = {
    en: "Logged In",
    de: "Eingeloggt",
    pt: "Logado",
  };

  Greetr.prototype = {
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    validate: function () {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid Language";
      }
    },
    greeting: function () {
      return `${greetings[this.language]}, ${this.firstName}!`;
    },
    formalGreeting: function () {
      return `${formalGreetings[this.language]}, ${this.fullName()}!`;
    },
    greet: function (formal) {
      var msg;

      // If undefined or null it will be coerced to false
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      // 'this' refers to the calling object at execution time
      //makes the method chainable
      return this;
    },
    log: function () {
      if (console) {
        console.log(loggedMessages[this.language] + ":" + this.fullName());
      }
      return this;
    },
    setLang: function (lang) {
      this.language = lang;

      this.validate();
      return this;
    },
  };

  Greetr.init = function (firstName, lastName, language) {
    var self = this; //so that I dont need to be concerned with what "this" points to later
    // object constructor
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || "en";
  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
