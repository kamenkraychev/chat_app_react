import React from 'react';

import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'

import './App.css'

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="70fbc5e3-4d80-4351-ba31-a2cfc2304fb8"
            userName="kamenkr"
            userSecret="123123"
            // renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps} />}
        
        
        />
    );
};

export default App;