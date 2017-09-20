import React from 'react';
import { Grid } from 'semantic-ui-react';

const Menu = () => (
  <Grid centered>
    <Grid.Column width={12} only="mobile tablet">
      <a href="#Introduction">Introduction</a> |{' '}
      <a href="#Employment">Employment</a> | <a href="#Education">Education</a>{' '}
      | <a href="#ProfSkills">Professional Skills</a> |{' '}
      <a href="#Training">Training</a> |{' '}
      <a href="#PersSkills">Personal Skills</a> |{' '}
      <a href="#SecActivities">Secondary Activities</a> |{' '}
      <a href="#Contact">Get in Touch</a> |{' '}
      <a href="#PersType">Personality type</a>
    </Grid.Column>

    <Grid.Column width={12} only="computer">
      <a href="#Introduction">Introduction</a> |{' '}
      <a href="#Contact">Get in Touch</a> | <a href="#Employment">Employment</a>{' '}
      | <a href="#ProfSkills">Professional Skills</a> |{' '}
      <a href="#Education">Education</a> |{' '}
      <a href="#PersSkills">Personal Skills</a> |{' '}
      <a href="#Training">Training</a> |{' '}
      <a href="#SecActivities">Secondary Activities</a> |{' '}
      <a href="#PersType">Personality type</a>
    </Grid.Column>
  </Grid>
);

export default Menu;
