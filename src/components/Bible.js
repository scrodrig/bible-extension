import React, { Component } from 'react'
import logo from '../cover.jpg'
import './bible.css'
import BibleUtils from '../utils/BibleUtils'

class Bible extends Component {
    constructor(props) {
        super(props)
        this.state = {
            verse: ''
        }
    }

    componentDidMount() {
        BibleUtils.getVerse().then(verse => {
            this.setState({ verse: verse })
        })
    }

    render() {
        const { verse } = this.state
        return (
            <div className="bible">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Hello, {this.props.name}</h1>
                <div className="book">
                    {/* {verse} */}
                    <p dangerouslySetInnerHTML={{ __html: verse }} />
                    {/* <p>{{ __html: verse }}</p> */}
                </div>
            </div>
        )
    }
}

export default Bible
