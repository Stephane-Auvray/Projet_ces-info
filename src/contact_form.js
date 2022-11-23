"use strict";

const e = React.createElement;

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      subject: "",
      content: "",
      file_data: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    // Sur changement d'un champ fichier TODO: rajouter  l'appel a la methode de lecture / upload.

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    axios
      .post("/api/oportunity/create", this.state)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email :
          <input type="text" name="email" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Nom :
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Votre demande :
          <input type="text" name="subject" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Votre message :
          <input type="textarea" name="content" onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Pièce jointe :
          <input type="file" name="file_data" onChange={this.handleChange} />
        </label>

        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}

const domContainer = document.querySelector("#contact_form");
ReactDOM.render(e(NameForm), domContainer);
