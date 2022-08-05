import React from "react";

export default class App extends Component {
  state = {
    Nome: "Jefferson",
    Idade: 28,
    comidaFavorita: "Lasanha",
    Musica: ["Livin on Prayer", "Papercut", "Dance"]
  };
  render() {
    return (
      <div>
        <h1>{this.state.Nome}</h1>
        <h2>{this.state.Idade}</h2>
        <h3>{this.state.comidaFavorita}</h3>
        <ul>
          <li>{this.state.Musica[0]}</li>
          <li>{this.state.Musica[1]}</li>
          <li>{this.state.Musica[2]}</li>
        </ul>
      </div>
    );
  }
}
