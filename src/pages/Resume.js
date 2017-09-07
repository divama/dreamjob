import React, { Component } from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';

import Name from './../myComponents/Name';
import Contact from './../myComponents/Contact';
import Employment from './../myComponents/Employment';
import Education from './../myComponents/Education';
import ProfSkills from './../myComponents/ProfSkills';
import PersSkills from './../myComponents/PersSkills';
import Training from './../myComponents/Training';
import SecActivities from './../myComponents/SecActivities';

class Resume extends Component {
  render() {
    return (
      <div>
        <Header as="h3" attached="top" inverted className="me-pageHeader">
          Resume
        </Header>
        <Segment attached>
          <Grid columns={2} stackable>
            <Grid.Row>
              <Grid.Column mobile={12} tablet={12} computer={8}>
                <Segment>
                  <Name />
                </Segment>
              </Grid.Column>
              <Grid.Column mobile={12} tablet={6} computer={4}>
                <Segment>
                  <Contact />
                </Segment>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column mobile={12} tablet={12} computer={8}>
                <Segment>
                  <Employment />
                </Segment>
                <Segment>
                  <Education />
                </Segment>
                <Segment>
                  <SecActivities />
                </Segment>
              </Grid.Column>
              <Grid.Column mobile={12} tablet={6} computer={4}>
                <Segment>
                  <ProfSkills />
                </Segment>
                <Segment>
                  <PersSkills />
                </Segment>
                <Segment>
                  <Training />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Resume;
