import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <a href="https://divama.github.io/Me/">https://divama.github.io/Me</a>
        <a href="https://github.com/divama/Me/projects/1">
          https://github.com/divama/Me/projects/1
        </a>

        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column width={10}>
              <Segment>1</Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment>2</Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={10}>
              <Segment>3</Segment>
              <Segment>4</Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment>5</Segment>
              <Segment>6</Segment>
              <Segment>7</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
