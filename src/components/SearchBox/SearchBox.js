import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Button, DarkButton } from "../UI/Button";
import { Input } from "../UI/Input";
import { Card } from "../UI/Card";
import { MdNearMe } from "react-icons/md";
import { randomSubmitTitle } from "../../helpers/randomSubmitTitle";
import { getCurrentPosition } from "../../helpers/geolocation";
const override = css`
  padding: 8px;
`;

const StyledBox = styled(Card)`
  margin: 100px auto;

  @media all and (max-width: 575px) {
    margin: 20px auto;
  }
`;

const Wrapper = styled.div`
  padding: 16px 32px;
`;

const SearchInput = styled(Input)`
  width: 400px;
  font-size: 1.1em;
  font-weight: bold;
  margin-bottom: 16px;

  @media all and (max-width: 575px) {
    width: 200px;
  }
`;

const LocationButton = styled(DarkButton)`
  padding: 6px;
  margin: 0 8px;
`;

const SearchButton = styled(Button)`
  display: block;
  margin: 0 auto;
`;

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      geolocation: null,
      isLocating: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocationRequest = this.handleLocationRequest.bind(this);

    this.searchButtonTitle = randomSubmitTitle();
  }

  handleChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitHandler(this.state.searchQuery);
  }

  handleLocationRequest() {
    this.setState({
      isLocating: true
    });
    getCurrentPosition()
      .then(geolocation => {
        console.log(geolocation);
        const searchQuery = `${geolocation.latitude.toFixed(
          4
        )}, ${geolocation.longitude.toFixed(4)}`;
        this.setState({
          geolocation: geolocation,
          searchQuery: searchQuery,
          isLocating: false
        });
        this.props.submitHandler(searchQuery);
      })
      .catch(err => {
        this.setState({
          isLocating: false
        });
        console.log(err);
      });
  }

  render() {
    return (
      <StyledBox>
        <Wrapper>
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <SearchInput
              type="text"
              name="searchInput"
              placeholder="City name or coordinates"
              value={this.state.searchQuery}
              onChange={this.handleChange}
              autoFocus
            />
            <LocationButton
              type="button"
              onClick={this.handleLocationRequest}
              title="Get weather at my location"
              outline
              noborders
              rounded
            >
              <MdNearMe size={24} />
            </LocationButton>
            <SearchButton
              type="submit"
              size="medium"
              disabled={
                !this.state.searchQuery ||
                this.state.isLocating ||
                this.props.isFetching
              }
            >
              {this.state.isLocating
                ? "Fetching location..."
                : this.props.isFetching
                ? "Fetching data..."
                : this.searchButtonTitle}
            </SearchButton>
          </form>
        </Wrapper>
      </StyledBox>
    );
  }
}

export default SearchBox;
