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
        <Header as="h3" attached="top" inverted className="dj-pageHeader">
          Resume | <a href="#Introduction">Introduction</a> |{' '}
          <a href="#Contact">Get in Touch</a> |{' '}
          <a href="#Employment">Employment</a> |{' '}
          <a href="#ProfSkills">Professional Skills</a> |{' '}
          <a href="#Education">Education</a> |{' '}
          <a href="#PersSkills">Personal Skills</a> |{' '}
          <a href="#Training">Training</a> |{' '}
          <a href="#SecActivities">Secondary Activities</a>
        </Header>
        <Segment attached>
          <Grid columns={2} stackable>
            <Grid.Row>
              <Grid.Column mobile={12} tablet={12} computer={8}>
                <Segment>
                  <Name />
                </Segment>
              </Grid.Column>

              <Grid.Column computer={4} only="computer">
                <Segment>
                  <Contact />
                </Segment>
              </Grid.Column>

              <Grid.Column mobile={12} tablet={12} computer={8}>
                <Segment>
                  <Employment />
                </Segment>
              </Grid.Column>
              <Grid.Column mobile={12} tablet={12} only="mobile tablet">
                <Segment>
                  <Education />
                </Segment>
              </Grid.Column>
              <Grid.Column mobile={12} tablet={6} computer={4}>
                <Segment>
                  <ProfSkills />
                </Segment>
              </Grid.Column>

              <Grid.Column computer={8} only="computer">
                <Segment>
                  <Education />
                </Segment>
              </Grid.Column>
              <Grid.Column mobile={12} tablet={6} computer={4}>
                <Segment>
                  <PersSkills />
                </Segment>
              </Grid.Column>

              <Grid.Column mobile={12} tablet={6} computer={8}>
                <Segment>
                  <Training />
                </Segment>
              </Grid.Column>
              <Grid.Column mobile={12} tablet={6} computer={4}>
                <Segment>
                  <SecActivities />
                </Segment>
              </Grid.Column>

              {/* <Grid.Column mobile={12} tablet={12} only="mobile tablet">
                <Segment inverted className="dj-pageFooter">
                  <Contact />
                </Segment>
              </Grid.Column> */}
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment inverted attached className="dj-pageFooter">
          <Grid columns={2} stackable>
            <Grid.Row only="mobile tablet">
              <Grid.Column mobile={12} tablet={12}>
                <Contact />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Resume;
