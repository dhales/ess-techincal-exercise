import React from 'react';

import {render, getByTestId} from '@testing-library/react';

import { UserContext } from '../../state/context';

import Login from './LogIn';

const user = {
    userName:null, auth:false
}

const updateUser = () => null;

describe("Login modal", () => {
    it('Should render modal', () => {
        const { getByTestId } = render(
            <UserContext.Provider value={user, updateUser}>
                <Login 
                    closeCallBack={()=>null}
                    isOpen={true}
                />
            </UserContext.Provider>
            
        );
        const conatiner = getByTestId("login-modal");
        expect(conatiner).toMatchSnapshot();
    });
});