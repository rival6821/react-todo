import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from '../store/modules/list'
import List from '../components/List/List';

class ListContainer extends Component {
    render() {
        return (
            <List 
            />
        );
    }
}

const mapStateToProps = ({  })=> ({
})

const mapDispatchToProps = dispatch => ({
    ListActions : bindActionCreators(listActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListContainer);