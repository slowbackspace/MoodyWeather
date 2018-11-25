import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import WeatherIcons from "react-weathericons";

const MeasurementContainer = styled.div`
  flex: 1 1 calc(33% - 32px);
  margin: 16px;
  align-self: center;

  @media all and (max-width: 380px) {
    flex: 1 1 100%;
    margin-top: 0;
  }
`;

const MeasurementTitle = styled.div`
  font-size: 0.9em;
  font-weight: bold;
  text-transform: uppercase;
  color: #444;
  margin-bottom: 8px;
`;

const MeasurementContent = styled.div`
  display: flex;

  @media all and (max-width: 380px) {
    justify-content: space-between;
  }
`;

const StyledWeatherIcons = styled(WeatherIcons)`
  margin: 0px 16px 0 0;
`;

const MeasurementValue = styled.span`
  font-size: 1.2em;
  white-space: nowrap;
`;

const MeasurementDescription = styled.div`
  width: 100%;
  text-align: center;
`;

const Measurement = ({ title, icon, iconName, value, unit, description }) => {
  return (
    <MeasurementContainer>
      <MeasurementTitle>{title}</MeasurementTitle>
      <MeasurementContent>
        {icon ? icon : <StyledWeatherIcons name={iconName} size="2x" />}
        <MeasurementValue>
          {value} {unit}
        </MeasurementValue>
      </MeasurementContent>
      {description ? (
        <MeasurementDescription>{description}</MeasurementDescription>
      ) : null}
    </MeasurementContainer>
  );
};

Measurement.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  iconName: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  unit: PropTypes.string,
  description: PropTypes.string
};

export default Measurement;
