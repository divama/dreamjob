import React from 'react';
import { Rating, Header } from 'semantic-ui-react';

const ProfSkills = () =>
  <div>
    <Header as="h3" dividing>
      Professional Skills
    </Header>
    Dong stuff:<Rating defaultRating={4} maxRating={5} disabled />
  </div>;

export default ProfSkills;
