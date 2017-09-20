import React from 'react';
import { List, Header } from 'semantic-ui-react';

const Contact = () => (
  <div>
    <Header as="h3" dividing>
      <a name="Contact" className="dj-anchor">
        Contact
      </a>Get in touch
    </Header>

    <List divided relaxed>
      <List.Item>
        <List.Icon name="id card outline" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header>Linkedin</List.Header>
          <List.Description>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/diantha"
            >
              https://www.linkedin.com/in/diantha
            </a>
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="sitemap" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header>Website</List.Header>
          <List.Description>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://divama.github.io/dreamjob"
            >
              https://divama.github.io/dreamjob
            </a>
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="github" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header>Github</List.Header>
          <List.Description>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/divama"
            >
              https://github.com/divama
            </a>
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="car" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header>Maximum traveling distance</List.Header>
          <List.Description>
            25km from{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.nl/maps/dir/Capelle+aan+Den+IJssel"
            >
              Capelle aan den IJssel
            </a>
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
  </div>
);

export default Contact;
