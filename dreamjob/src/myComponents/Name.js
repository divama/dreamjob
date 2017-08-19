import React from 'react';
import { Header, Image } from 'semantic-ui-react';

const Name = () =>
  <Header as="h2">
    <Image
      shape="circular"
      src="https://react.semantic-ui.com/assets/images/avatar/large/patrick.png"
    />
    <Header.Content>Name</Header.Content>
    <Header.Subheader>Function</Header.Subheader>
  </Header>;

export default Name;
