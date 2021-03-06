import React from "react";
import styles from "./App.module.css";
import image from "./image.png";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";

import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    //console.log(data);

    this.setState({
      data: fetchedData,
    });
  }

  handleCountryChange = async (country) => {
    // fetch the country data
    const fetchedData = await fetchData(country);
    //console.log(fetchedData);
    //console.log(country);

    // set the state
    this.setState({
      data: fetchedData,
      country,
    });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />{" "}
      </div>
    );
  }
}

export default App;
