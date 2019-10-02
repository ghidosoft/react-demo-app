import React from 'react';
import { connect } from 'react-redux';
import { userDetailRequested } from '../../actions/userActions';
import Loader from '../Loader';

class UserDetail extends React.Component {
    componentDidMount() {
        this.props.userDetailRequested(this.props.match.params.id);
    }

    render() {
        const {item, loading} = this.props;
        return (
            <div>
                <h3>User</h3>
                {(!item || loading) ? <Loader /> 
                    : <div>
                        {item.employee_name}
                    </div>}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    item: state.user.item,
    loading: state.user.loading,
});

export default connect(mapStateToProps, {userDetailRequested})(UserDetail);
