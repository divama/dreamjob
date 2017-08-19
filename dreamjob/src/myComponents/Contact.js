import React from 'react';
import { List, Header } from 'semantic-ui-react';

const Contact = () =>
  <div>
    <Header as="h3" dividing>
      Get in touch
    </Header>

    <List divided relaxed>
      <List.Item>
        <List.Icon name="sitemap" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="a">Website</List.Header>
          <List.Description as="a">
            https://divama.github.io/Me
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="id card outline" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="a">Linkedin</List.Header>
          <List.Description as="a">
            https://www.linkedin.com/in/diantha/
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="mail outline" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="a">E-mail</List.Header>
          <List.Description as="a">dianthavanmarion@gmail.com</List.Description>
        </List.Content>
      </List.Item>
    </List>
  </div>;

export default Contact;
