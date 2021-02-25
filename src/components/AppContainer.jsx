import React from 'react';
import { Container } from '@material-ui/core';
import Split from 'react-split';

import LeftSide from './LeftSide';
import RightSide from './RightSide';

const AppContainer = () => {
    return (
        <Container style={{ height: '700px' }} maxWidth='xl'>
            <Split style={{ height: '100%', display: 'flex' }} sizes={[50, 50]}>
                <LeftSide />
                <RightSide />
            </Split>
        </Container>
    );
};

export default AppContainer;
