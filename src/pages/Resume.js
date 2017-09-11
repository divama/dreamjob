import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

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
      <div className="dj">
        <Grid centered>
          <Grid.Row className="dj-themeColor">
            {/* HEADER */}
            <Grid.Column width="11">
              <h3>Resume</h3>
            </Grid.Column>
          </Grid.Row>

          {/* MENU */}
          <Grid.Column width="11" only="mobile tablet">
            <a href="#Introduction">Introduction</a> |{' '}
            <a href="#Employment">Employment</a> |{' '}
            <a href="#Education">Education</a> |{' '}
            <a href="#ProfSkills">Professional Skills</a> |{' '}
            <a href="#PersSkills">Personal Skills</a> |{' '}
            <a href="#Training">Training</a> |{' '}
            <a href="#SecActivities">Secondary Activities</a> |{' '}
            <a href="#Contact">Get in Touch</a>
          </Grid.Column>
          <Grid.Column width="11" only="computer">
            <a href="#Introduction">Introduction</a> |{' '}
            <a href="#Employment">Employment</a> |{' '}
            <a href="#Education">Education</a> |{' '}
            <a href="#Training">Training</a> |{' '}
            <a href="#Contact">Get in Touch</a> |{' '}
            <a href="#ProfSkills">Professional Skills</a> |{' '}
            <a href="#PersSkills">Personal Skills</a> |{' '}
            <a href="#SecActivities">Secondary Activities</a>
          </Grid.Column>

          {/* CONTENT mobile/tablet*/}
          <Grid.Row only="mobile tablet">
            <Grid.Column mobile={11} tablet={11}>
              <Name />
            </Grid.Column>
            <Grid.Column mobile={11} tablet={11}>
              <Employment />
            </Grid.Column>
            <Grid.Column mobile={11} tablet={11}>
              <Education />
            </Grid.Column>
            <Grid.Column mobile={11} tablet={6}>
              <ProfSkills />
              <PersSkills />
            </Grid.Column>
            <Grid.Column mobile={11} tablet={5}>
              <Training />
            </Grid.Column>
            <Grid.Column mobile={11} tablet={11}>
              <SecActivities />
            </Grid.Column>
          </Grid.Row>

          {/* CONTENT computer only*/}
          <Grid.Row only="computer">
            <Grid.Column computer={7}>
              <Name />
            </Grid.Column>
            <Grid.Column computer={4}>
              <Contact />
            </Grid.Column>
            <Grid.Column computer={7}>
              <Employment />
            </Grid.Column>
            <Grid.Column computer={4}>
              <ProfSkills />
            </Grid.Column>
            <Grid.Column computer={7}>
              <Education />
            </Grid.Column>
            <Grid.Column computer={4}>
              <PersSkills />
            </Grid.Column>
            <Grid.Column computer={7}>
              <Training />
            </Grid.Column>
            <Grid.Column computer={4}>
              <SecActivities />
            </Grid.Column>
          </Grid.Row>

          {/* FOOTER */}
          <Grid.Row className="dj-themeColor">
            <Grid.Column width="6" only="mobile tablet">
              <Contact />
            </Grid.Column>
            <Grid.Column width="5" only="mobile tablet" />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Resume;
