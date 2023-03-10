import React from 'react';
import {BookContext} from '../../contexts';
import Login from './Login';

const WorldPage = ({ navigation,route }) => {

    return (
        <BookContext.Provider value={{ navigation,route }}>
            <Login />
        </BookContext.Provider>
    )
}

export default WorldPage;