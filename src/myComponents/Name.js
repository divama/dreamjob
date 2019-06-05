import React from 'react';
import { Header, Image } from 'semantic-ui-react';

import MarkDown from './../controllers/Markdown';
import personalNote from './../pages/personalNote.md';

const Name = () => (
  <div>
    <Header as="h2">
      <Image
        shape="circular"
        src="https://media.licdn.com/dms/image/C4E03AQH6BMrXdCX_Hw/profile-displayphoto-shrink_200_200/0?e=1565222400&v=beta&t=WJw0DQZZs_Zt28zJqWnhXgYf-HVuFBxAEChqokXhpec"
      />
      <Header.Content>
        <a name="Introduction">Diantha van Marion</a>
        <Header.Subheader>Front-end developer React</Header.Subheader>
      </Header.Content>
    </Header>
    <MarkDown src={personalNote} className="dj-quote" />
  </div>
);

export default Name;
