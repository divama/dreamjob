import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';

class Footer extends Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column width={5}>
          <Segment>footer 1</Segment>
        </Grid.Column>
        <Grid.Column width={5}>
          <Segment>footer 2</Segment>
        </Grid.Column>
        <Grid.Column width={6}>
          <Segment>
            <a href="https://divama.github.io/Me/">
              https://divama.github.io/Me
            </a>
          </Segment>
          <Segment>
            <a href="https://github.com/divama/Me/projects/1">
              https://github.com/divama/Me/projects/1
            </a>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Footer;
