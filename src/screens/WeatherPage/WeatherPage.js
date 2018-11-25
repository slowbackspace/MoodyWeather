import React, { Component } from "react";

import { fetchWeather } from "../../helpers/API";
import SearchBox from "../../components/SearchBox/SearchBox";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import Modal from "../../components/UI/Modal";

class WeatherPage extends Component {
  constructor(props) {
    super(props);

    this.fetchWeather = this.fetchWeather.bind(this);
    this.togglePinHandler = this.togglePinHandler.bind(this);
    this.onModalCloseHandler = this.onModalCloseHandler.bind(this);

    this.state = {
      data: null,
      isFetching: false,
      error: null,
      showError: false,
      pinnedLocation: null
    };
  }

  componentDidMount() {
    const location = localStorage.getItem("pinnedLocation");
    if (location) {
      this.setState({
        pinnedLocation: location
      });
      this.fetchWeather(location);
    }
  }

  togglePinHandler(location) {
    if (location === this.state.pinnedLocation) {
      //unpin
      localStorage.removeItem("pinnedLocation");
      this.setState({
        pinnedLocation: null
      });
    } else {
      localStorage.setItem("pinnedLocation", location);
      this.setState({
        pinnedLocation: location
      });
    }
  }

  fetchWeather(location) {
    this.setState({
      isFetching: true
    });

    fetchWeather(location)
      .then(data => {
        localStorage.setItem("data", JSON.stringify(data));
        this.props.changeBackground(data.weather[0].main.toLowerCase());
        return this.setState({ data: data, error: null, isFetching: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: "Unable to fetch weather data.",
          showError: true,
          isFetching: false
        });
      });
  }

  onModalCloseHandler() {
    this.setState({
      showError: false
    })
  }

  render() {
    let weatherCard = null;
    if (this.state.data) {
      weatherCard = (
        <WeatherCard
          togglePin={this.togglePinHandler}
          pinned={this.state.data.name === this.state.pinnedLocation}
          {...this.state.data}
        />
      );
    }

    return (
      <>
        {/* <Logo /> */}
        <SearchBox
          isFetching={this.state.isFetching}
          submitHandler={this.fetchWeather}
        />

        {this.state.error && this.state.showError ? (
          <Modal
            show={true}
            OkHandler={this.onModalCloseHandler}
            title="Something went wrong"
          >
            {this.state.error}
          </Modal>
        ) : null}
        {weatherCard}
      </>
    );
  }
}

export default WeatherPage;
