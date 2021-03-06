import React from 'react';

export default class FoundData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sequence: this.props.sequence };
  }

  render() {
    return (
      <div className="box has-text-centered">
        <h3 className="title is-3">Found sequence</h3>
        <p className="subtitle is-6 mt-3">{this.props.sequence}</p>
        <p>
          <b>Sequence length:</b> {this.props.sequence.length}
        </p>
      </div>
    );
  }
}
