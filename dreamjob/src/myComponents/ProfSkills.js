import React from 'react';
import { Rating, Header, List } from 'semantic-ui-react';

const ProfSkills = () =>
  <div>
    <Header as="h3" dividing>
      Professional Skills
    </Header>
    <List>
      <List.Item>
        HTML/CSS<Rating
          defaultRating={5}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        LESS/SASS<Rating
          defaultRating={4}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        Bootstrap/Semantic UI<Rating
          defaultRating={5}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        jQuery<Rating
          defaultRating={4}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>

      <List.Item>
        AngularJS<Rating
          defaultRating={3}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        ReactJS<Rating
          defaultRating={4}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        Redux<Rating
          defaultRating={1}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        NPM/Grunt/Gulp/Webpack<Rating
          defaultRating={3}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        BEM/Camelcase/Pascalcase<Rating
          defaultRating={5}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        Markdown<Rating
          defaultRating={4}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
    </List>

    <List>
      <List.Item>
        <Header as="h4">Tools</Header>
      </List.Item>
      <List.Item>
        GitHub<Rating
          defaultRating={5}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        Sourcetree<Rating
          defaultRating={5}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        Visual Studio<Rating
          defaultRating={5}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        Visual Studio Code/Atom<Rating
          defaultRating={5}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        Difmerge<Rating
          defaultRating={5}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        Photoshop<Rating
          defaultRating={3}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        Sketch<Rating
          defaultRating={1}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        Zeplin<Rating
          defaultRating={5}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        Evergage<Rating
          defaultRating={5}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        Trello/Basecamp<Rating
          defaultRating={5}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        Scrum<Rating
          defaultRating={5}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        User Experience<Rating
          defaultRating={4}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        Living Styleguide<Rating
          defaultRating={5}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
    </List>
  </div>;

export default ProfSkills;
