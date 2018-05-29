import * as React from 'react';

export interface KeyTimeMap {
  [keys: string]: { count: number; time: number };
}

interface Props {
  keyTimeMap: KeyTimeMap;
}

export default class OutputArea extends React.Component<Props> {
  render() {
    return (
      <div>
        <div>{this.renderStat()}</div>
      </div>
    );
  }

  renderStat = () => {
    const { keyTimeMap } = this.props;
    return Object.keys(keyTimeMap).map((key: string) => {
      const { count, time } = keyTimeMap[key];
      return (
        <div key={key}>
          <span>
            {key.charAt(0)} -> {key.charAt(1)}
          </span>
          <span>{(time / count) ^ 0}ms</span>
        </div>
      );
    });
  };
}
