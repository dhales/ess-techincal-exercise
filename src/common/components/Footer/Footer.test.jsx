import React from 'react';

import {render} from '@testing-library/react';

import { UserContext } from '../../state/context';

import Footer from './Footer';

const user = {
    userName:null, 
    selectedAssociate: {
        name:null,
        email:null,
    },
    auth:false,
}

const updateUser = () => null;

describe("Footer", () => {
    it('Should render Footer', () => {
        const { container } = render(
            <UserContext.Provider value={user, updateUser}>
                <Footer />
            </UserContext.Provider>
            
        );
        expect(container).toMatchSnapshot();
    });
});