import React from 'react';
import { List, Icon, Header } from 'semantic-ui-react';

const Employment = () =>
  <div>
    <Header as="h3" dividing>
      Employment
    </Header>

    <List divided relaxed>
      <List.Item>
        <List.Icon name="folder" />
        <List.Content>
          <List.Header>2000 - 2017</List.Header>
          <List.List>
            <List.Item>
              <List.Content>
                <List.Header>Function at company</List.Header>
                <List.Description>Description</List.Description>
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name="folder" />
        <List.Content>
          <List.Header>2000 - 2017</List.Header>
          <List.List>
            <List.Item>
              <List.Content>
                <List.Header>Function at company</List.Header>
                <List.Description>Description</List.Description>
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>
    </List>
  </div>;

export default Employment;
