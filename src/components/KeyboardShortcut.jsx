import React from 'react';

const KeyboardShortcut = ({ keys }) => {
  if (typeof keys === 'string') {
    keys = [keys];
  }

  return (
    <span className="keyboard-combination">
      {keys.map((key, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="keyboard-separator">+</span>}
          <kbd className="keyboard-key">{key}</kbd>
        </React.Fragment>
      ))}
    </span>
  );
};

export default KeyboardShortcut;