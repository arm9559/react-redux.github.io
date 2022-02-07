import React from 'react';
import { connect } from 'react-redux';

function HeaderTitleContainer({pageInfo}) {
  return (
        <div className='container'>
            <h1>
              {pageInfo.page_title}
            </h1>
        </div>
  );
}
export default connect(
  (state) => ({
    pageInfo: state.pageInfo,
  }),
  null
)(HeaderTitleContainer);

