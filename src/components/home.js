import React from 'react';

import Page from './page'
import ToolList from './tools_list'

import Tools from '../values/tools'

function Home() {

    return (
        <div>
            <Page body={
              <ToolList title="Text Tools" tools={Object.values(Tools.text_tools)}></ToolList>
            }></Page>
        </div>
    );
}

export default Home;