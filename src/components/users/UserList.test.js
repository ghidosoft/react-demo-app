import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { UserList as Sut } from './UserList';

describe('components/users/UserList', () => {
    it('should render Loading if loading is true', () => {
        const wrapper = shallow(<Sut userListRequested={() => {}} loading={true} items={[]} />);
        expect(wrapper.find('Loader').length).toEqual(1);
        expect(wrapper.find('UserTable').length).toEqual(0);
    });

    it('should render UserTable with items', () => {
        const items = [{a: 'b'}];
        const wrapper = shallow(<Sut userListRequested={() => {}} loading={false} items={items} />);
        expect(wrapper.find('Loader').length).toEqual(0);
        expect(wrapper.find('UserTable').length).toEqual(1);
        expect(wrapper.find('UserTable').props().items).toEqual(items);
    });

    it('should call userListRequested once', () => {
        const userListRequested = sinon.spy();
        shallow(<Sut userListRequested={userListRequested} loading={false} items={[]} />);
        expect(userListRequested.calledOnce).toBe(true);
    });
});
