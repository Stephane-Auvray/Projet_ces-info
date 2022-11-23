"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var NameForm = function (_React$Component) {
  _inherits(NameForm, _React$Component);

  function NameForm(props) {
    _classCallCheck(this, NameForm);

    var _this = _possibleConstructorReturn(this, (NameForm.__proto__ || Object.getPrototypeOf(NameForm)).call(this, props));

    _this.state = {
      email: "",
      name: "",
      subject: "",
      content: "",
      file_data: ""
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(NameForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      var target = event.target;
      var value = target.type === "checkbox" ? target.checked : target.value;
      var name = target.name;

      // Sur changement d'un champ fichier TODO: rajouter  l'appel a la methode de lecture / upload.

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      axios.post("/api/oportunity/create", this.state).then(function (response) {
        // handle success
        console.log(response);
      }).catch(function (error) {
        // handle error
        console.log(error);
      }).finally(function () {
        // always executed
      });
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.handleSubmit },
        React.createElement(
          "label",
          null,
          "Email :",
          React.createElement("input", { type: "text", name: "email", onChange: this.handleChange })
        ),
        React.createElement("br", null),
        React.createElement(
          "label",
          null,
          "Nom :",
          React.createElement("input", { type: "text", name: "name", onChange: this.handleChange })
        ),
        React.createElement("br", null),
        React.createElement(
          "label",
          null,
          "Votre demande :",
          React.createElement("input", { type: "text", name: "subject", onChange: this.handleChange })
        ),
        React.createElement("br", null),
        React.createElement(
          "label",
          null,
          "Votre message :",
          React.createElement("input", { type: "textarea", name: "content", onChange: this.handleChange })
        ),
        React.createElement("br", null),
        React.createElement(
          "label",
          null,
          "Pi\xE8ce jointe :",
          React.createElement("input", { type: "file", name: "file_data", onChange: this.handleChange })
        ),
        React.createElement("input", { type: "submit", value: "Envoyer" })
      );
    }
  }]);

  return NameForm;
}(React.Component);

var domContainer = document.querySelector("#contact_form");
ReactDOM.render(e(NameForm), domContainer);