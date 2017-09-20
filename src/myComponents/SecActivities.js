import React from 'react';
import { Header, List } from 'semantic-ui-react';

const SecActivities = () => (
  <div>
    <Header as="h3" dividing>
      <a name="SecActivities" className="dj-anchor">
        Secondary Activities
      </a>Secondary Activities
    </Header>

    <List>
      <List.Item>
        <List.Icon name="book" />
        <List.Content>
          2010 <br />MOSS/WCM SP07 website UMC st.Radboud uitgeroepen tot beste
          ziekenhuiswebsite van nederland! @ Tamtam
          <br />
          (www.umcn.nl) volgens www.zorgwebmonitor.nl
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="book" />
        <List.Content>
          2009 <br />SharePointMagazine publicaties @ Tamtam
          <br />
          Verschillende publicaties geschreven over SharePoint’s 2007 Branding
          Limitations. www.sharepointmagazine.net
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="book" />
        <List.Content>
          2009 <br />Blog over front-end development voor SharePoint 2007 @
          Tamtam <br />
          www.tamtam.nl
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="book" />
        <List.Content>
          2006 <br />Hands-on training for Flash @ Haagse Hogeschool/TH Rijswijk
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="book" />
        <List.Content>
          2004 - 2005 <br />Kampleider introductiekamp informatica @ Haag Uit.
          <br />
          www.haaguit.com
        </List.Content>
      </List.Item>
    </List>
  </div>
);

export default SecActivities;
