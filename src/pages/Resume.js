import React, { Component } from 'react';
import { Grid, Sidebar, Button, Menu, Icon } from 'semantic-ui-react';

import Name from './../myComponents/Name';
import Contact from './../myComponents/Contact';
import Employment from './../myComponents/Employment';
import Education from './../myComponents/Education';
import ProfSkills from './../myComponents/ProfSkills';
import PersSkills from './../myComponents/PersSkills';
import Training from './../myComponents/Training';
import SecActivities from './../myComponents/SecActivities';
import PersType from './../myComponents/PersType';

class Resume extends Component {
  state = { visible: false };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    return (
      <div className="dj">
        <div className="dj-hamburger mobile tablet">
          <Button
            onClick={this.toggleVisibility}
            icon="content"
            className="dj-hamburger"
          />
        </div>

        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            width="thin"
            visible={visible}
            icon="labeled"
            vertical
            inverted
            onClick={this.toggleVisibility}
          >
            <Menu.Item name="Introduction1" href="#Introduction">
              <Icon name="home" />Introduction
            </Menu.Item>
            <Menu.Item name="Employment1" href="#Employment">
              <Icon name="folder" />Employment
            </Menu.Item>
            <Menu.Item name="Education1" href="#Education">
              <Icon name="student" />Education
            </Menu.Item>
            <Menu.Item name="Training1" href="#Training">
              <Icon name="book" />Training
            </Menu.Item>
            <Menu.Item name="ProfSkills1" href="#ProfSkills">
              <Icon name="star" />Professional Skills
            </Menu.Item>
            <Menu.Item name="PersSkills1" href="#PersSkills">
              <Icon name="star" />Personal Skills
            </Menu.Item>
            <Menu.Item name="SecActivities1" href="#SecActivities">
              <Icon name="cube" />Secondary Activities
            </Menu.Item>
            <Menu.Item name="PersType1" href="#PersType">
              <Icon name="user circle" />Personality type
            </Menu.Item>
            <Menu.Item name="Contact1" href="#GetInTouch">
              <Icon name="id card" />Get in Touch
            </Menu.Item>
          </Sidebar>

          <Grid centered className="dj-header">
            <Grid.Row className="dj-themeColor">
              {/* HEADER */}
              <Grid.Column width="11">
                <h3>Resume</h3>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Sidebar.Pusher>
            <Grid centered>
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
                <Grid.Column mobile={11} tablet={6}>
                  <SecActivities />
                </Grid.Column>
                <Grid.Column mobile={11} tablet={5}>
                  <PersType />
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
                  <PersType />
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
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Resume;
