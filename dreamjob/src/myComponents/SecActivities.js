import React from 'react';
import { Header, Accordion, Icon } from 'semantic-ui-react';

const SecActivities = () =>
  <div>
    <Accordion>
      <Accordion.Title>
        <Header as="h3" dividing>
          Secondary Activities <Icon name="dropdown" />
        </Header>
      </Accordion.Title>
      <Accordion.Content>

        <Accordion exclusive={false}>
          <Accordion.Title>
            <Icon name="book" /> 2010 <br />MOSS/WCM SP07 website UMC st.Radboud
            uitgeroepen tot beste ziekenhuiswebsite van nederland! @ Tamtam
            <Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content>
            (www.umcn.nl) volgens www.zorgwebmonitor.nl
          </Accordion.Content>

          <Accordion.Title>
            <Icon name="book" /> 2009 <br />SharePointMagazine publicaties @
            Tamtam
            <Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content>
            Verschillende publicaties geschreven over SharePoint’s 2007 Branding
            Limitations. www.sharepointmagazine.net
          </Accordion.Content>

          <Accordion.Title>
            <Icon name="book" /> 2009 <br />Blog over front-end development voor
            SharePoint 2007 @ Tamtam <Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content>www.tamtam.nl</Accordion.Content>

          <p>
            <br />
            <Icon name="book" />2006 <br />Hands-on training for Flash @ Haagse
            Hogeschool/TH Rijswijk
          </p>

          <Accordion.Title>
            <Icon name="book" /> 2004 - 2005 <br />Kampleider introductiekamp
            informatica @ Haag Uit. <Icon name="dropdown" />
          </Accordion.Title>
          <Accordion.Content>www.haaguit.com</Accordion.Content>
        </Accordion>
      </Accordion.Content>
    </Accordion>
  </div>;

export default SecActivities;
