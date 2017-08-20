import React from 'react';
import { Header, Image } from 'semantic-ui-react';

const Name = () =>
  <div>
    <Header as="h2">
      <Image
        shape="circular"
        //src="https://react.semantic-ui.com/assets/images/avatar/large/patrick.png"
        src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAduAAAAJGE5NTY0YjhkLTUwMzItNGY4YS04ZTZiLTljYWQ5MmM3ODdhNQ.jpg"
      />
      <Header.Content>
        Diantha van Marion
        <Header.Subheader>Front-end developer React</Header.Subheader>
      </Header.Content>
    </Header>
    <p>
      Online media, That's what makes my heart beat faster. Developing
      beautiful, efficient online resources, which makes us happy together, the
      customer and me. Working in a driven team motivates, inspires and brings
      out the best in each other. Is the interaction clear? Is the message
      correct? Do we use the right medium? Do we use the right technique? Is it
      responsive? Is it mobile first? Is it reusable? Is it scalable? Is it
      clean code? Does the user understands it? When the whole picture is
      correct only then I am satisfied. Then I can be proud!
    </p>
  </div>;

export default Name;
