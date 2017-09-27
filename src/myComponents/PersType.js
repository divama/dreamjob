import React, { Component } from 'react';
import { Header, Progress } from 'semantic-ui-react';

class PersType extends Component {
  render() {
    return (
      <div>
        <Header as="h3" dividing>
          <a name="PersType">Personality type </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.16personalities.com/"
          >
            (MBTI)
          </a>
        </Header>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.16personalities.com/isfj-strengths-and-weaknesses"
        >
          Defender
        </a>{' '}
        -{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.16personalities.com/articles/roles-sentinels"
        >
          Sentinel
        </a>{' '}
        -{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.16personalities.com/articles/strategies-constant-improvement"
        >
          Constant improvement
        </a>
        <Progress percent={84} progress>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.16personalities.com/articles/mind-introverted-vs-extraverted"
          >
            Introversion
          </a>
        </Progress>
        <Progress percent={58} progress>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.16personalities.com/articles/energy-intuitive-vs-observant"
          >
            Observant
          </a>
        </Progress>
        <Progress percent={76} progress>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.16personalities.com/articles/nature-thinking-vs-feeling"
          >
            Feeling
          </a>
        </Progress>
        <Progress percent={79} progress>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.16personalities.com/articles/tactics-judging-vs-prospecting"
          >
            Judging
          </a>
        </Progress>
        <Progress percent={83} progress>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.16personalities.com/articles/identity-assertive-vs-turbulent"
          >
            Turbulent
          </a>
        </Progress>
      </div>
    );
  }
}

export default PersType;
