import React from 'react';

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="text-center">
        <div className="spinner-border spinner-thali text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="mt-3">
          <h5 className="text-primary">Loading ThalAI Guardian...</h5>
          <p className="text-muted">Please wait while we prepare your dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;