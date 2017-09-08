import React from 'react';
import { Header, Image } from 'semantic-ui-react';

import MarkDown from './../controllers/Markdown';
import personalNote from './../pages/personalNote.md';

const Name = () => (
  <div>
    <Header as="h2">
      <Image
        shape="circular"
        //src="https://react.semantic-ui.com/assets/images/avatar/large/patrick.png"
        src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAduAAAAJGE5NTY0YjhkLTUwMzItNGY4YS04ZTZiLTljYWQ5MmM3ODdhNQ.jpg"
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
