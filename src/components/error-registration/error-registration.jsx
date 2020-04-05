import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

export const ErrorRegistration = ({ error, onClickBack }) => {
  const BackButton = () => <Button onClick={onClickBack}>Back</Button>;

  if (error === 'CONNECTION_PROBLEMS') {
    return (
      <div className="error">
        <p>Ooops something went wrong.</p>
        <p> You have not internet connection</p>
        <BackButton />
      </div>
    );
  }

  if (error === 'BLACK_LIST') {
    return (
      <div className="error">
        <p>Ooops something went wrong.</p>
        <p> Your number in black list</p>
        <BackButton />
      </div>
    );
  }

  if (error === 'NUMBER_INVALID') {
    return (
      <div className="error">
        <p>Ooops something went wrong.</p>
        <p> Your number does not exist</p>
        <BackButton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>Ooops something went wrong.</p>
        <BackButton />
      </div>
    );
  }

  return null;
};

ErrorRegistration.propTypes = {
  error: PropTypes.string.isRequired,
  onClickBack: PropTypes.func.isRequired,
};
