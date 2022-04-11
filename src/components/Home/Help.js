import React, { Component } from "react";

class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      fundations: [],
      selected: 1,
      description: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/fundation")
      .then((resp) => resp.json())
      .then((fundations) => {
        this.setState({
          fundations,
        });
      });
  }

  get items() {
    const fundation = this.state.fundations.find((fun) => fun.id === this.state.selected);
    return (
      fundation &&
      fundation.items.map((item) => (
        <div className="box__element">
          <div>
            <div className="box__element-title">
              {item.title}
              <div className="box__element-subtitl">{item.subtitle}</div>
            </div>
          </div>
          <div>{item.description}</div>
        </div>
      ))
    );
  }

  get subtitle() {
    const fundation = this.state.fundations.find((fun) => fun.id === this.state.selected);
    return fundation && fundation.items.map((item) => <div>{item.subtitle}</div>);
  }

  get list() {
    return this.state.fundations.map((fun) => (
      <div className="name-fun" onClick={this.handleOnClick(fun.id)}>
        {fun.name}
      </div>
    ));
  }

  get desc() {
    const fundation = this.state.fundations.find((fun) => fun.id === this.state.selected);
    return fundation && fundation.goal;
  }

  handleOnClick = (selected) => () => {
    this.setState({ selected });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div id="section5" className="help-section">
          <div className="help_header">
            <div className="section-help__title">Komu pomagamy?</div>
            <span className="header-decoration"></span>
          </div>
          <div className="help-box">
            <div>{this.list}</div>
          </div>
          <div>{this.desc}</div>
          <div className="help-content__box">
            <div className="">{this.items}</div>
          </div>
        </div>
      </>
    );
  }
}

export default Help;
