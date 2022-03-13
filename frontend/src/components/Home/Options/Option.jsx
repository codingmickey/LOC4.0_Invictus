/* eslint-disable prettier/prettier */
import React from 'react';
import OptionText from './OptionText';
import OptionCard from './OptionCard';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import InstaCheck from '../../../Context1'

const Option = () => {
  // const { setInstaCheck } = InstaCheck();
  return (
    <>
      <OptionText />
      <OptionCard />
      <p className="option-footer">
        <Link to="/onboarding">Connect later, explore first</Link>
      </p>
    </>
  );
};

export default Option;
