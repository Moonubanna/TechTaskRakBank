import React from 'react';
import {BookContext} from '../../contexts';
import Dashboard from './Dashboard';

const WorldPage = ({ navigation,route }) => {

    return (
        <BookContext.Provider value={{ navigation,route }}>
            <Dashboard />
        </BookContext.Provider>
    )
}

export default WorldPage;