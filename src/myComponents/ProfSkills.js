import React from 'react';
import { Rating, Header, List, Accordion, Icon } from 'semantic-ui-react';

const ProfSkills = () => (
  <div>
    <Header as="h3" dividing>
      Professional Skills
    </Header>
    <List>
      {/* 5 stars */}
      <List.Item>
        HTML/CSS<Rating defaultRating={5} maxRating={5} disabled className="right floated" />
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
        BEM/Camelcase/Pascalcase<Rating
          defaultRating={5}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        Cross browser/Responsive<Rating
          defaultRating={5}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>

      {/* 4 stars */}
      <List.Item>
        LESS/SASS<Rating defaultRating={4} maxRating={5} disabled className="right floated" />
      </List.Item>
      <List.Item>
        jQuery<Rating defaultRating={4} maxRating={5} disabled className="right floated" />
      </List.Item>
      <List.Item>
        ReactJS<Rating defaultRating={4} maxRating={5} disabled className="right floated" />
      </List.Item>
      <List.Item>
        Markdown<Rating defaultRating={4} maxRating={5} disabled className="right floated" />
      </List.Item>
      <List.Item>
        Font icons/svg<Rating defaultRating={4} maxRating={5} disabled className="right floated" />
      </List.Item>

      {/* 3 stars */}
      <List.Item>
        ES6<Rating defaultRating={3} maxRating={5} disabled className="right floated" />
      </List.Item>
      <List.Item>
        AngularJS<Rating defaultRating={3} maxRating={5} disabled className="right floated" />
      </List.Item>
      <List.Item>
        NodeJS/NPM/Webpack<Rating
          defaultRating={3}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        Gulp<Rating defaultRating={3} maxRating={5} disabled className="right floated" />
      </List.Item>

      {/* 1 star */}
      <List.Item>
        Redux<Rating defaultRating={1} maxRating={5} disabled className="right floated" />
      </List.Item>
      <List.Item>
        Unit testing/Jest/Mocha<Rating
          defaultRating={1}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
    </List>

    <Accordion>
      <Accordion.Title>
        <Header as="h4">
          Tools <Icon name="dropdown" />
        </Header>
      </Accordion.Title>
      <Accordion.Content>
        <List>
          {/* 5 stars */}
          <List.Item>
            GitHub<Rating defaultRating={5} maxRating={5} disabled className="right floated" />
          </List.Item>
          <List.Item>
            Gitflow<Rating defaultRating={5} maxRating={5} disabled className="right floated" />
          </List.Item>
          <List.Item>
            GitLab<Rating defaultRating={5} maxRating={5} disabled className="right floated" />
          </List.Item>
          <List.Item>
            Sourcetree<Rating defaultRating={5} maxRating={5} disabled className="right floated" />
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
            Diffmerge<Rating defaultRating={5} maxRating={5} disabled className="right floated" />
          </List.Item>
          <List.Item>
            Zeplin<Rating defaultRating={5} maxRating={5} disabled className="right floated" />
          </List.Item>
          <List.Item>
            Evergage<Rating defaultRating={5} maxRating={5} disabled className="right floated" />
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
            Agile/Scrum<Rating defaultRating={5} maxRating={5} disabled className="right floated" />
          </List.Item>
          <List.Item>
            Living Styleguide<Rating
              defaultRating={5}
              maxRating={5}
              disabled
              className="right floated"
            />
          </List.Item>

          {/* 4 stars */}
          <List.Item>
            User Experience<Rating
              defaultRating={4}
              maxRating={5}
              disabled
              className="right floated"
            />
          </List.Item>

          {/* 3 stars */}
          <List.Item>
            Photoshop<Rating defaultRating={3} maxRating={5} disabled className="right floated" />
          </List.Item>
          <List.Item>
            Illustrator<Rating defaultRating={3} maxRating={5} disabled className="right floated" />
          </List.Item>

          {/* 1 star */}
          <List.Item>
            Sketch<Rating defaultRating={1} maxRating={5} disabled className="right floated" />
          </List.Item>
        </List>
      </Accordion.Content>
    </Accordion>
  </div>
);

export default ProfSkills;
