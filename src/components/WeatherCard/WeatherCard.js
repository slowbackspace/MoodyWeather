import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { Card } from "../UI/Card";
import WeatherIcon from "react-icons-weather";
import { kelvinToCelsius } from "../../helpers/unitConverter";
import Measurement from "./Measurement/Measurement";
import { getTimeFromTimestamp } from "../../helpers/dateUtils";
import Pin from "../UI/Pin";
import { toFixed } from "../../helpers/textUtils";

const shakeToStill = keyframes`
  100% {
    translate3d(0, 0, 0);
  }
  80% {
    transform: translate3d(-1px, 0, 0);
  }
  90% {
    transform: translate3d(1px, 0, 0);
  }
  
  50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(2px, 0, 0);
  }

  0%, 20% {
    transform: translate3d(-3px, 0, 0);
  }

  10%, 30% {
    transform: translate3d(3px, 0, 0);
  }
`;

const StyledWeatherCard = styled(Card)`
  min-width: 300px;
  max-width: 600px;
  margin: 0 auto 16px auto;
  display: flex;
  flex-wrap: wrap;

  animation: ${props => (props.pinned ? shakeToStill : "")} 0.5s ease-out both;
  transform: translate3d(0, 0, 0);

  @media all and (max-width: 600px) {
    margin: 0 16px 16px 16px;
  }
`;

const Title = styled.div`
`;

const Header = styled.div`
  display: flex;
  flex: 1 0 100%;
  min-height: 30px;
  padding: 16px 32px;
  color: white;
  background: #75525e;
  border-radius: 5px 5px 0 0;
  font-size: 1.5em;
`;

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const IconContainer = styled.div`
  display: inline-block;
  font-size: 4em;
`;

const MainWeatherIcon = styled(WeatherIcon)`
  margin-right: 16px;
  display: inline-block;

  & > i {
    line-height: normal;
  }
`;

class WeatherCard extends Component {
  render() {
    const tempCelcius = kelvinToCelsius(this.props.main.temp).toFixed(0);
    return (
      <StyledWeatherCard pinned={this.props.pinned}>
        <Header>
          <Title>{this.props.name}, {this.props.sys.country}</Title>
          <Pin
            toggle={e => this.props.togglePin(this.props.name)}
            pinned={this.props.pinned}
            title="Loads pinned location next time you visit"
          />
        </Header>

        <Wrapper>
          <Measurement
            icon={
              <IconContainer>
                <MainWeatherIcon
                  name="owm"
                  iconId={this.props.weather[0].id}
                  flip="horizontal"
                  rotate="90"
                />
              </IconContainer>
            }
            value={tempCelcius}
            unit="°C"
            description={this.props.weather[0].description}
          />
          {this.props.wind ? (
            <Measurement
              title="Wind"
              iconName="strong-wind"
              value={toFixed(this.props.wind.speed, 0)}
              unit="m/s"
            />
          ) : null}
          {this.props.rain ? (
            <Measurement
              title="Rain"
              iconName="raindrops"
              value={toFixed(this.props.rain["1h"], 1) || toFixed(this.props.rain["3h"], 1)}
              unit="mm"
            />
          ) : null}
          {this.props.snow ? (
            <Measurement
              title="Snow"
              iconName="snowflake-cold"
              value={toFixed(this.props.snow["1h"], 1) || toFixed(this.props.snow["3h"], 1)}
              unit="mm"
            />
          ) : null}
          <Measurement
            title="Humidity"
            iconName="humidity"
            value={toFixed(this.props.main.humidity, 0)}
            unit="%"
          />
          <Measurement
            title="Pressure"
            iconName="barometer"
            value={toFixed(this.props.main.pressure, 0)}
            unit="hPa"
          />

          <Measurement
            title="Sunrise"
            iconName="sunrise"
            value={getTimeFromTimestamp(this.props.sys.sunrise)}
          />
          <Measurement
            title="Sunset"
            iconName="sunset"
            value={getTimeFromTimestamp(this.props.sys.sunset)}
          />
        </Wrapper>
      </StyledWeatherCard>
    );
  }
}

WeatherCard.propTypes = {
  name: PropTypes.string,
  coords: PropTypes.shape({
    lon: PropTypes.number,
    lat: PropTypes.number
  }),
  weather: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      main: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.string
    })
  ),
  main: PropTypes.shape({
    temp: PropTypes.number,
    pressure: PropTypes.number,
    humidity: PropTypes.number
  }),
  wind: PropTypes.shape({
    speed: PropTypes.number,
    deg: PropTypes.number
  }),
  clouds: PropTypes.shape({
    all: PropTypes.number
  }),
  rain: PropTypes.shape({
    "1h": PropTypes.number,
    "3h": PropTypes.number
  }),
  snow: PropTypes.shape({
    "1h": PropTypes.number,
    "3h": PropTypes.number
  }),
  sys: PropTypes.shape({
    sunrise: PropTypes.number,
    sunset: PropTypes.number,
    country: PropTypes.string
  })
};

export default WeatherCard;
