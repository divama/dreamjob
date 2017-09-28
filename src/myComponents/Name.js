import React from 'react';
import { Header, Image } from 'semantic-ui-react';

import MarkDown from './../controllers/Markdown';
import personalNote from './../pages/personalNote.md';

const Name = () => (
  <div>
    <Header as="h2">
      <Image
        shape="circular"
        src="https://media-exp1.licdn.com/mpr/mpr/shrinknp_400_400/AAIA_wDGAAAAAQAAAAAAAAzoAAAAJGFmMDNjYjZmLWQ0YTEtNDVkYi04ZTg5LWU3MTJhNTEyYTAxNQ.jpg"
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
