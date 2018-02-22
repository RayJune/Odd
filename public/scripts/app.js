'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OddApp = function (_React$Component) {
  _inherits(OddApp, _React$Component);

  function OddApp() {
    _classCallCheck(this, OddApp);

    return _possibleConstructorReturn(this, (OddApp.__proto__ || Object.getPrototypeOf(OddApp)).apply(this, arguments));
  }

  _createClass(OddApp, [{
    key: 'render',
    value: function render() {
      var title = '偶得';
      var subtitle = '文章本天成，妙手偶得之';
      var options = ['thing 1', 'thing 2', 'thing 3'];

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, null),
        React.createElement(Options2, { options: options }),
        React.createElement(AddOption, null)
      );
    }
  }]);

  return OddApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',

    // React.Component requie 1 method to be defined: render
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(
          'h2',
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'handlePick',
    value: function handlePick() {
      console.log(1);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.handlePick },
          '\u4F55\u4E0D\u8BD5\u4E00\u628A\u624B\u6C14\uFF1F'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

/* cutting line */

var Options1 = function (_React$Component4) {
  _inherits(Options1, _React$Component4);

  function Options1() {
    _classCallCheck(this, Options1);

    return _possibleConstructorReturn(this, (Options1.__proto__ || Object.getPrototypeOf(Options1)).apply(this, arguments));
  }

  _createClass(Options1, [{
    key: 'handleClear',
    value: function handleClear() {
      console.log(this.props.options); // error, because the render produce the object, not Options it self.
      // so we use this.handleClear.bind(this) to fix it
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.handleClear.bind(this) },
          '\u6E05\u7A7A'
        ),
        this.props.options.map(function (option) {
          return React.createElement(Option, { key: option, optionText: option });
        })
      );
    }
  }]);

  return Options1;
}(React.Component);

/*
  but the Options1's solution is expensive for every render it will call bind
  as our components rerender more and more often they can get a little bit expensive
  It requires us to do a bit more work than is really necessary
  So I'm going to do is remove this taht's actually going to once again break the program.
  And what I'm going to do is override the constructor function for react component.
*/

var Options2 = function (_React$Component5) {
  _inherits(Options2, _React$Component5);

  function Options2(props) {
    _classCallCheck(this, Options2);

    var _this5 = _possibleConstructorReturn(this, (Options2.__proto__ || Object.getPrototypeOf(Options2)).call(this, props));

    _this5.handleClear = _this5.handleClear.bind(_this5);
    // It does not need to get rebound every single time the component renders which is way more efficient
    return _this5;
  }

  _createClass(Options2, [{
    key: 'handleClear',
    value: function handleClear() {
      console.log(this.props.options);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.handleClear.bind(this) },
          '\u6E05\u7A7A'
        ),
        this.props.options.map(function (option) {
          return React.createElement(Option, { key: option, optionText: option });
        })
      );
    }
  }]);

  return Options2;
}(React.Component);

/* cutting line */

var Option = function (_React$Component6) {
  _inherits(Option, _React$Component6);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'p',
        null,
        'option: ',
        this.props.optionText
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component7) {
  _inherits(AddOption, _React$Component7);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();

      if (option) {
        console.log(option);
        e.target.elements.option.value = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.handleAddOption },
        React.createElement('input', { type: 'text', name: 'option', placeholder: '\u5B58\u653E\u4E00\u4E2A\u5C0F\u5FC3\u613F\u628A\uFF1A\uFF09' }),
        React.createElement(
          'button',
          null,
          '\u6DFB\u52A0'
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(OddApp, null), document.getElementById('app'));
