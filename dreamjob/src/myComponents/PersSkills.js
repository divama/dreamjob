import React from 'react';
import { Rating, Header, List } from 'semantic-ui-react';

const PersSkills = () =>
  <div>
    <Header as="h3" dividing>
      Personal Skills
    </Header>
    <List>
      <List.Item>
        Creativity<Rating
          defaultRating={4}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        Communication<Rating
          defaultRating={3}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        Organizing<Rating
          defaultRating={5}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        Team player<Rating
          defaultRating={4}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        Presenting<Rating
          defaultRating={2}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        Barista<Rating
          defaultRating={4}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        EHBO<Rating
          defaultRating={4}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
    </List>

    <List>
      <List.Item>
        <Header as="h4">Languages</Header>
      </List.Item>
      <List.Item>
        Dutch<Rating
          defaultRating={5}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
      <List.Item>
        English<Rating
          defaultRating={5}
          maxRating={5}
          disabled
          className="right floated"
        />
      </List.Item>
    </List>
  </div>;

export default PersSkills;
