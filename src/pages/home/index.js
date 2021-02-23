import React from 'react';
import PropTypes from 'prop-types';
import {initHome} from '../../actions/home'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export function Home({onInit}){
    return (
        <div>

        </div>
    )
}

Home.propTypes = {

}

Home.defaultProps = {

}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ onInit: initHome }, dispatch);

  const mapStateToProps = (state) => ({
  });

  export default connect(mapStateToProps, mapDispatchToProps)(Home);
