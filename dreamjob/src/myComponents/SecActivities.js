import React from 'react';
import { List, Header, Accordion, Icon } from 'semantic-ui-react';

const SecActivities = () =>
  <div>
    <Accordion>
      <Accordion.Title>
        <Header as="h3" dividing>
          Secondary Activities <Icon name="dropdown" />
        </Header>
      </Accordion.Title>
      <Accordion.Content>
        <List divided relaxed>
          <List.Item>
            <List.Icon name="book" />
            <List.Content>
              <List.Header>2010</List.Header>
              <Accordion>
                <Accordion.Title>
                  <List.Description>
                    MOSS/WCM SP07 website UMC st.Radboud uitgeroepen tot beste
                    ziekenhuiswebsite van nederland! @ Tamtam
                    <Icon name="dropdown" />
                  </List.Description>
                </Accordion.Title>
                <Accordion.Content>
                  <List.Description>
                    (www.umcn.nl) volgens www.zorgwebmonitor.nl
                  </List.Description>
                </Accordion.Content>
              </Accordion>
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name="book" />
            <List.Content>
              <List.Header>2009</List.Header>
              <Accordion>
                <Accordion.Title>
                  <List.Description>
                    SharePointMagazine publicaties @ Tamtam
                    <Icon name="dropdown" />
                  </List.Description>
                </Accordion.Title>
                <Accordion.Content>
                  <List.Description>
                    Verschillende publicaties geschreven over SharePoint’s 2007
                    Branding Limitations. www.sharepointmagazine.net
                  </List.Description>
                </Accordion.Content>
              </Accordion>
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name="book" />
            <List.Content>
              <List.Header>2009</List.Header>
              <Accordion>
                <Accordion.Title>
                  <List.Description>
                    Blog over front-end development voor SharePoint 2007 @
                    Tamtam <Icon name="dropdown" />
                  </List.Description>
                </Accordion.Title>
                <Accordion.Content>
                  <List.Description>
                    <List.Description>www.tamtam.nl</List.Description>
                  </List.Description>
                </Accordion.Content>
              </Accordion>
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name="book" />
            <List.Content>
              <List.Header>2006</List.Header>
              <List.Description>
                Hands-on training for Flash @ Haagse Hogeschool/TH Rijswijk
              </List.Description>
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name="book" />
            <List.Content>
              <List.Header>2004 - 2005</List.Header>
              <Accordion>
                <Accordion.Title>
                  <List.Description>
                    Kampleider introductiekamp informatica @ Haag Uit.
                    <Icon name="dropdown" />
                  </List.Description>
                </Accordion.Title>
                <Accordion.Content>
                  <List.Description>
                    <List.Description>www.haaguit.com </List.Description>
                  </List.Description>
                </Accordion.Content>
              </Accordion>
            </List.Content>
          </List.Item>
        </List>
      </Accordion.Content>
    </Accordion>
  </div>;

export default SecActivities;
