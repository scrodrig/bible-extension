import React from 'react'

import './App.css'
import Bible from './components/Bible'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Bible testID="bible"/>
            </header>
        </div>
    )
}

export default App
