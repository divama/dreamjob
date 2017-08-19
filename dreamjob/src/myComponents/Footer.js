import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Photo from './Photo';

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
          <Segment>footer 3</Segment>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Footer;
