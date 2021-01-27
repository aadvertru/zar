import React from 'react'
import ReactDOM from 'react-dom'

// const el = React.createElement(
//     'h1',
//     null,
//     'Hello World schoen wieder noch ein mal'
// )

const AppList = () => {
    const items = ['Item1', 'Item2', "Item3"]
    return (
        <ul>
            {
                items.map(item => <li>{item}</li>)
            }

        </ul>
    )
}

const AppHeader = () => {
    return (
        <h1>Hey</h1>
    )
}

const App = () => {
    return(
        <>
            <AppHeader />
            <AppList />
            <AppHeader />
            <AppList />
        </>
        )
}


ReactDOM.render(<App />, document.getElementById('root'))