import React from 'react';
import OptionText from './OptionText';
import OptionCard from './OptionCard';
import { Typography } from '@material-ui/core';

const Option = () => {
  return (
    <>
      <OptionText />
      <OptionCard />
      <p className="option-footer">
        <a>Connect later, explore first</a>
      </p>
    </>
  );
};

export default Option;
