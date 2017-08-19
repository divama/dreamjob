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
import Footer from './../myComponents/Footer';

class Resume extends Component {
  render() {
    return (
      <div>
        <Header as="h3" block>
          Resume
        </Header>
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
                <Employment />
              </Segment>
              <Segment>
                <Education />
              </Segment>
              <Segment>
                <SecActivities />
              </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
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

          <Footer />
        </Grid>
      </div>
    );
  }
}

export default Resume;
