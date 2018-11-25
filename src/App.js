import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router";
import { createGlobalStyle } from "styled-components";
import styledSanitize from "styled-sanitize";

import Layout from "./components/Layout/Layout";
import WeatherPage from "./screens/WeatherPage/WeatherPage";
import selectBackgroundImage from "./helpers/selectBackgroundImage";

const GlobalStyle = createGlobalStyle`
${styledSanitize}
body {
  @import url("https://fonts.googleapis.com/css?family=Exo");
  height: 100%;
  line-height: normal;
  background-image: ${props => `url(${props.img})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  font-family: "Exo", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
class App extends Component {
  constructor(props) {
    super(props);

    this.changeBackgroundHandler = this.changeBackgroundHandler.bind(this);

    this.state = {
      bgImageType: "default"
    };
  }

  changeBackgroundHandler(bgType) {
    this.setState({
      bgImageType: bgType
    });
  }

  render() {
    const bgImage = selectBackgroundImage(this.state.bgImageType);

    const routes = (
      <Switch>
        <Route
          path="/:location?"
          render={() => (
            <WeatherPage changeBackground={this.changeBackgroundHandler} />
          )}
        />
      </Switch>
    );
    return (
      <Layout>
        <GlobalStyle img={bgImage} />
        {routes}
      </Layout>
    );
  }
}

export default withRouter(App);
