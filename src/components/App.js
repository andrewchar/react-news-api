import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import '../styles/App.css';
import Navigation from './Navigation';
import NewsList from './News_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsSource: 'recode',
      activeKey: 1,
      newsArticles: null
    }
    this.updateActiveKey = this.updateActiveKey.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData(this.state.newsSource);
  }

  fetchData(newsSource) {
    const API_URL = 'https://newsapi.org/v2/top-headlines?';
    const API_KEY = 'apiKey=1f601f62da71412cab568eb0a40b673e';
    const API_SOURCE = `sources=${newsSource}&`;
    const API_ENDPOINT = `${API_URL}${API_SOURCE}${API_KEY}`;

    fetch(API_ENDPOINT)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({
          newsArticles: response
        })
    });
  }

  updateActiveKey(key) {
    this.setState({
      activeKey: key
    })
  }

  render() {
    return (
      <div className="container">
        <div className="content-container">
          <Col md={12}>
            <Navigation
              news={this.state}
              updateNews={this.fetchData}
              updateKey={this.updateActiveKey}
            />
          </Col>
          <Col md={12}>
            <NewsList news={this.state.newsArticles} />
          </Col>
        </div>
      </div>
    );
  }
}

export default App;
