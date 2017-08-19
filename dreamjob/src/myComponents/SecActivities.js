import React from 'react';
import { List, Icon, Header } from 'semantic-ui-react';

const SecActivities = () =>
  <div>
    <Header as="h3" dividing>
      Secondary Activities
    </Header>

    <List divided relaxed>
      <List.Item>
        <List.Icon name="book" />
        <List.Content>
          <List.Header>2010</List.Header>
          <List.List>
            <List.Item>
              <List.Content>
                <List.Header>
                  MOSS/WCM SP07 website UMC st.Radboud uitgeroepen tot beste
                  ziekenhuiswebsite van nederland! @ Tamtam
                </List.Header>
                <List.Description>
                  (www.umcn.nl) volgens www.zorgwebmonitor.nl
                </List.Description>
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name="book" />
        <List.Content>
          <List.Header>2009</List.Header>
          <List.List>
            <List.Item>
              <List.Content>
                <List.Header>
                  SharePointMagazine publicaties @ Tamtam
                </List.Header>
                <List.Description>
                  Verschillende publicaties geschreven over SharePoint’s 2007
                  Branding Limitations. www.sharepointmagazine.net
                </List.Description>
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name="book" />
        <List.Content>
          <List.Header>2009</List.Header>
          <List.List>
            <List.Item>
              <List.Content>
                <List.Header>
                  Blog over front-end development voor SharePoint 2007 @ Tamtam
                </List.Header>
                <List.Description>www.tamtam.nl</List.Description>
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name="book" />
        <List.Content>
          <List.Header>2006</List.Header>
          <List.List>
            <List.Item>
              <List.Content>
                <List.Header>
                  Hands-on training for Flash @ Haagse Hogeschool/TH Rijswijk
                </List.Header>
                <List.Description />
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name="book" />
        <List.Content>
          <List.Header>2004 - 2005</List.Header>
          <List.List>
            <List.Item>
              <List.Content>
                <List.Header>
                  Kampleider introductiekamp informatica @ Haag Uit.
                </List.Header>
                <List.Description>www.haaguit.com </List.Description>
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>
    </List>
  </div>;

export default SecActivities;
