import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      topText: "Topp Text",
      bottomText: "Bottom Text",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImages: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())

      .then(response => {
        // const { memes } = response.data;
        // console.log(memes[1]);
        this.setState({ allMemeImages: response.data.memes, isLoading: false });
      });
  }

  handleChange(event) {
    const { name, value, type } = event.target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    let max = this.state.allMemeImages.length;
    let randomImg = this.state.allMemeImages[
      Math.floor(Math.random() * max + 1)
    ].url;
    this.setState({ randomImage: randomImg });
  }

  render() {
    let displaytext = this.state.isLoading ? "Loading Data" : "Testing";
    //   : "Meme Application " + this.state.allMemeImages[1].name;
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleClick}>
          {
            <div>
              <label>
                <input
                  type="text"
                  name="topText"
                  value={this.state.topText}
                  onChange={this.handleChange}
                ></input>
                Top Text
              </label>
              <p></p>
              <label>
                <input
                  type="text"
                  name="bottomText"
                  value={this.state.bottomText}
                  onChange={this.handleChange}
                ></input>
                Bottom Text
              </label>
              <div className="meme">
                <img src={this.state.randomImage} alt="" />
                <h2 className="top">{this.state.topText}</h2>
                <h2 className="bottom">{this.state.bottomText}</h2>
              </div>
            </div>
          }

          <button>Gen</button>
        </form>
      </div>
    );
  }
}

export default MemeGenerator;
