import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    };
  }
  render() {
    return (
      <div>
        <header>
          <p>Meme Component </p>
        </header>
      </div>
    );
  }
}

export default MemeGenerator;
