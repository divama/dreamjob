import React from 'react';
import { List, Header, Accordion, Icon } from 'semantic-ui-react';

const Education = () =>
  <div>
    <Header as="h3" dividing>
      Education
    </Header>

    <List divided relaxed>
      <List.Item>
        <List.Icon name="student" />
        <List.Content>
          <List.Header>2003 - 2006</List.Header>
          <List.List>
            <List.Item>
              <List.Content>
                <Accordion>
                  <Accordion.Title>
                    <List.Header>
                      Ingenieur: Mayor Communication and Multimedia Design @
                      Haagse Hogeschool/TH Rijswijk <Icon name="dropdown" />
                    </List.Header>
                  </Accordion.Title>
                  <Accordion.Content>
                    <List.Description>
                      Competenties: Projectmatig werken, adviseren,
                      resultaatgericht werken, methodisch werken, communicatief
                      functioneren, ontwikkelingsvermogen, maatschappelijke
                      verantwoordelijkheid, helikopterblik, thrill, creërend
                      vermogen, abstractievermogen, marktgevoel,
                      organisatiegerichtheid, affiniteit met kenniswerk,
                      zelfstandigheid, leiding geven. Minor Informatica
                      Competenties: Opstellen objectmodel, opstellen
                      gegevensmodel, opstellen implementatie-gegevensmodel,
                      ontwerpen functionele specificaties, ontwerpen
                      applicatiestructuur, ontwerpen programmaspecificaties,
                      programmeren, ontwerpen mens/machine interface, maken
                      testplan, uitvoeren test.
                    </List.Description>
                  </Accordion.Content>
                </Accordion>
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name="student" />
        <List.Content>
          <List.Header>2003 - 2006</List.Header>
          <List.List>
            <List.Item>
              <List.Content>
                <List.Header>
                  Ingenieur: Minor Informatica @ Haagse Hogeschool/TH Rijswijk
                </List.Header>
                <List.Description />
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>

      <List.Item>
        <List.Icon name="student" />
        <List.Content>
          <List.Header>1999 - 2003</List.Header>
          <List.List>
            <List.Item>
              <List.Content>
                <Accordion>
                  <Accordion.Title>
                    <List.Header>
                      Multimedia Vormgeven @ Grafisch Lyceum Rotterdam
                      <Icon name="dropdown" />
                    </List.Header>
                  </Accordion.Title>
                  <Accordion.Content>
                    <List.Description>
                      In de opleiding leer je werken met kleur, vlakverdeling,
                      lettertypes, illustraties, foto’s en bewegend beeld. Je
                      leert hoe je verschillende teken- en ontwerptechnieken
                      toepast én hoe je alles uitwerkt op de pc of Mac. Een
                      groot deel van de tijd werk je met de computer en de
                      belangrijkste softwarepakketten van Adobe, zoals
                      Illustrator en Photoshop. Daarnaast leer je werken met
                      software als 3d Studio Max en Dreamweaver. Ook krijg je
                      vakken op het gebied van kunst, conceptontwikkeling, en
                      ondernemersvaardigheden.
                    </List.Description>
                  </Accordion.Content>
                </Accordion>
              </List.Content>
            </List.Item>
          </List.List>
        </List.Content>
      </List.Item>
    </List>
  </div>;

export default Education;
