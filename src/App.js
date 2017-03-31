import React, { Component } from 'react';
import assets from './assets';
import Detail from './Detail';
import './App.css';

const style = {
  detail: {
    color: '#858576',
    fontSize: 32
  },
  div: {
    textAlign: 'center',
  },
  img: {
    borderRadius: 12,
    cursor: 'pointer'
  },
  slider: {
    width: 100,
    cursor: 'pointer'
  }
}

class App extends Component {
  constructor () {
    super ();
    this.state = {
      slides: assets.slides,
      captions: assets.captions,
      currentSlide: 0,
      imageWidth: 410
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    let currentSlide = this.state.currentSlide;
    let length = this.state.slides.length;
    this.setState({
      currentSlide: currentSlide + 1 < length ? currentSlide + 1 : 0
    });
  }

  handleChange(event) {
    this.setState({
      imageWidth: event.target.value
    });
  }

  render() {
    return (
      <div className="App" style={style.div}>
        <Detail style={style.detail} caption={this.state.captions[this.state.currentSlide]} />
        <p>
          <input
            type="range"
            min="100"
            max="720"
            step="5"
            style={style.slider}
            value={this.state.imageWidth}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <img
            src={this.state.slides[this.state.currentSlide]}
            alt={this.state.captions[this.state.currentSlide]}
            width={this.state.imageWidth}
            style={style.img}
            onClick={this.handleClick}
          />
        </p>
      </div>
    );
  }
}

export default App;
