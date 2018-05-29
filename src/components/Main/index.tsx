import * as React from 'react';
import InputArea from '../InputArea';
import { default as OutputArea, KeyTimeMap } from '../OutputArea';

interface State {
  keyTimeMap: KeyTimeMap;
}

export default class Main extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      keyTimeMap: {}
    };
  }

  render() {
    return (
      <div>
        <InputArea onUpdate={this.onUpdate} />
        <OutputArea keyTimeMap={this.state.keyTimeMap} />
      </div>
    );
  }

  onUpdate = (fromTo: string, time: number) => {
    const getNewState = (prevState: State) => {
      const keyTimeMap = { ...prevState.keyTimeMap };
      const stat = keyTimeMap[fromTo];
      keyTimeMap[fromTo] = {
        count: stat ? stat.count + 1 : 1,
        time: stat ? stat.time + time : time
      };
      return { keyTimeMap };
    };

    this.setState(getNewState);
  };
}
