import React from 'react';
import {connect} from 'react-redux';
import {userListRequested} from '../../actions/userActions';
import Loader from '../Loader';
import UserTable from './UserTable';

class UserList extends React.Component {
    componentDidMount() {
        this.props.userListRequested();
    }

    render() {
        return (
            <div>
                <h3>Users</h3>
                {this.props.loading ? <Loader />
                    : <UserTable items={this.props.items} />}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.user.loading,
    items: state.user.items,
});

export default connect(mapStateToProps, {userListRequested})(UserList);
