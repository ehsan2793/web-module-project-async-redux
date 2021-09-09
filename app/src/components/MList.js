import React from 'react';
import { connect } from 'react-redux';
const MList = (props) => {
  const { missons, isLoading, error } = props;

  //   if (isLoading) {
  //
  //   }

  return (
    <div>
      <h2>SpaceX Missons</h2>
      {isLoading ? <p>please be patient Loading...</p> : null}
      {error ? (
        <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>
      ) : null}

      {missons.map((misssion) => (
        <div>
          <h4>{misssion.mission_name}</h4>
          <h4>{misssion.mission_id}</h4>
          <h4>{misssion.manufacturers}</h4>
          <h4>{misssion.payload_ids}</h4>
          <h4>{misssion.website}</h4>
          <p>{misssion.description}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    missons: state.missionsData,
    error: state.error,
  };
};

export default connect(mapStateToProps, {})(MList);
