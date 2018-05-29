import * as React from 'react';

interface Props {
  onUpdate: (fromTo: string, time: number) => void;
}

export default class InputArea extends React.Component<Props> {
  node: HTMLTextAreaElement;
  lastKey: string;
  lastTime: number;

  render() {
    return (
      <div>
        <textarea
          onKeyDown={this.onKeyDown}
          onFocus={this.onFocus}
          ref={node => {
            if (node) {
              this.node = node;
            }
          }}
        />
      </div>
    );
  }

  onFocus = () => {
    this.lastTime = Date.now();
  };

  onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const currentKey = event.key;
    const currentTime = Date.now();
    this.props.onUpdate(this.lastKey + currentKey, currentTime - this.lastTime);
    this.lastKey = currentKey;
    this.lastTime = currentTime;
  };
}
