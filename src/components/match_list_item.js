import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

class MatchListItem extends Component {
  render() {
    return (
      <li className="match_list_item">
        <img src={this.props.match.img} />
        <div className="match_list_item_text">
          <b>{this.props.match.name}</b>
          <p>Hey</p>
        </div>
      </li>
    );
  }
}

export default MatchListItem;