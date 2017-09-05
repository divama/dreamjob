import React from 'react';
import ReactMarkdown from 'react-markdown';

class Markdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: ''
    };
  }

  componentDidMount() {
    this.fetchContent();
  }

  fetchContent() {
    fetch(this.props.src)
      .then(response => response.text())
      .then(contents => this.setState({ contents }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.src !== this.props.src) {
      this.fetchContent();
    }
  }

  render() {
    return <ReactMarkdown source={this.state.contents} className={this.props.className} />;
  }
}

export default Markdown;
