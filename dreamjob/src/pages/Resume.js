import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';

//needed myComponents: Resume as overviewpage, Name, Contact, Employment, Educaton, Skills, Photo
import Name from './../myComponents/Name';
import Contact from './../myComponents/Contact';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column width={10}>
              <Segment>
                <Name />
              </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment>
                <Contact />
              </Segment>
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

        <a href="https://divama.github.io/Me/">https://divama.github.io/Me</a>
        <a href="https://github.com/divama/Me/projects/1">
          https://github.com/divama/Me/projects/1
        </a>
      </div>
    );
  }
}

export default Resume;
