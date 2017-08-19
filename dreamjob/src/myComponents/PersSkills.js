import React from 'react';
import { Rating, Header } from 'semantic-ui-react';

const PersSkills = () =>
  <div>
    <Header as="h3" dividing>
      Personal Skills
    </Header>
    <Rating defaultRating={3} maxRating={5} disabled />
  </div>;

export default PersSkills;
