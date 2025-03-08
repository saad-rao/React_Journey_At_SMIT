const main_container = React.createElement('div', '{class:"main-div"}', [

    React.createElement('h1', {id:"1"}, 'Hello world from H1'),

    React.createElement('h2', {id:"2"}, 'Hello world from H2'),

    React.createElement('h3', {id:"3"}, 'Hello world from H3'),

    React.createElement('h4', {id:"4"}, 'Hello world from H4'),

    React.createElement('h5', {id:"5"}, 'Hello world from H5'),

    React.createElement('h6', {id:"6"}, 'Hello world from H6')
])

const root = ReactDOM.createRoot(document.getElementById('main'))

root.render(main_container)