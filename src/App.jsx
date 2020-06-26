import React from "react";

class App extends React.Component {
  state = {
    data: null,
  };
  async componentDidMount() {
    const response = await fetch("https://the-one-api.herokuapp.com/v1/movie", {
      headers: new Headers({
        Authorization: `Bearer ${process.env.REACT_APP_LOTR_API_KEY}`,
      }),
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => this.setState({ data: json }));
  }

  render() {
    const { data } = this.state;
    if (!data) {
      return null;
    } else {
      return data.docs.map((movie) => {
        console.log(movie)
      return <h1>{ movie.name }</h1>;
      });
    }
  }
}

export default App;
