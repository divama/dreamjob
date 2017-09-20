import React from 'react';
import { Header, Accordion, Icon } from 'semantic-ui-react';

const Education = () => (
  <div>
    <Header as="h3" dividing>
      <a name="Education" className="dj-anchor">
        Education
      </a>Education
    </Header>

    <Accordion exclusive={false}>
      <Accordion.Title>
        <Icon name="student" /> 2003 - 2006 <br /> Ingenieur: Mayor
        Communication and Multimedia Design @ Haagse Hogeschool/TH Rijswijk
        <Icon name="dropdown" />
      </Accordion.Title>
      <Accordion.Content>
        Competenties: Projectmatig werken, adviseren, resultaatgericht werken,
        methodisch werken, communicatief functioneren, ontwikkelingsvermogen,
        maatschappelijke verantwoordelijkheid, helikopterblik, thrill, creërend
        vermogen, abstractievermogen, marktgevoel, organisatiegerichtheid,
        affiniteit met kenniswerk, zelfstandigheid, leiding geven. Minor
        Informatica Competenties: Opstellen objectmodel, opstellen
        gegevensmodel, opstellen implementatie-gegevensmodel, ontwerpen
        functionele specificaties, ontwerpen applicatiestructuur, ontwerpen
        programmaspecificaties, programmeren, ontwerpen mens/machine interface,
        maken testplan, uitvoeren test.
      </Accordion.Content>

      <p>
        <br />
        <Icon name="student" /> 2003 - 2006 <br /> Ingenieur: Minor Informatica
        @ Haagse Hogeschool/TH Rijswijk
      </p>

      <Accordion.Title>
        <Icon name="student" /> 1999 - 2003 <br /> Multimedia Vormgeven @
        Grafisch Lyceum Rotterdam
        <Icon name="dropdown" />
      </Accordion.Title>
      <Accordion.Content>
        In de opleiding leer je werken met kleur, vlakverdeling, lettertypes,
        illustraties, foto’s en bewegend beeld. Je leert hoe je verschillende
        teken- en ontwerptechnieken toepast én hoe je alles uitwerkt op de pc of
        Mac. Een groot deel van de tijd werk je met de computer en de
        belangrijkste softwarepakketten van Adobe, zoals Illustrator en
        Photoshop. Daarnaast leer je werken met software als 3d Studio Max en
        Dreamweaver. Ook krijg je vakken op het gebied van kunst,
        conceptontwikkeling, en ondernemersvaardigheden.
      </Accordion.Content>
    </Accordion>
  </div>
);

export default Education;
