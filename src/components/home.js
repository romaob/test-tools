import React from 'react';

import Page from './page'
import ToolList from './tools_list'

function Home() {

    return (
        <div>
            <Page body={
              <ToolList></ToolList>
            }></Page>
        </div>
    );
}

export default Home;