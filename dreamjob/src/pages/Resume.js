import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';

//needed myComponents: Resume as overviewpage, Name, Contact, Employment, Educaton, Skills, Photo
import Name from './../myComponents/Name';
import Contact from './../myComponents/Contact';
import Employment from './../myComponents/Employment';
import Education from './../myComponents/Education';
import Skills from './../myComponents/Skills';
import Photo from './../myComponents/Photo';

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
              <Segment>
                <Employment />1
              </Segment>
              <Segment>
                <Education />2
              </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment>
                <Skills />3
              </Segment>
              <Segment>
                <Skills />4
              </Segment>
              <Segment>
                <Photo />5
              </Segment>
            </Grid.Column>
          </Grid.Row>

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
        </Grid>
      </div>
    );
  }
}

export default Resume;
