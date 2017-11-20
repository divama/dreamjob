import React from 'react';
import { Header, List, Accordion, Icon } from 'semantic-ui-react';

const SecActivities = () => (
  <div>
    <Accordion exclusive={false}>
      <Accordion.Title>
        <Header as="h3" dividing>
          <a name="SecActivities">Secondary Activities</a> <Icon name="dropdown" />
        </Header>
      </Accordion.Title>
      <Accordion.Content>
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
              Verschillende publicaties geschreven over SharePoint’s 2007 Branding Limitations.
              www.sharepointmagazine.net
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="book" />
            <List.Content>
              2009 <br />Blog over front-end development voor SharePoint 2007 @ Tamtam <br />
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
      </Accordion.Content>
    </Accordion>
  </div>
);

export default SecActivities;
