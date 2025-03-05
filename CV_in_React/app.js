const parent = React.createElement(
            
    'div',

     {id: "main-containeer", className: "main"},
    
    [

    React.createElement('div', { className: 'resume-container' }, [
        // Header Section
        React.createElement('div', { className: 'header' }, [
            React.createElement('h1', {}, 'Saad Naseem'),
            React.createElement('p', {}, 'Front-End Developer'),
            React.createElement('p', {}, 'raosad786@gmail.com | (+92) 3023206548 ')
        ]),

        // Education Section
        React.createElement('div', { className: 'section' }, [
            React.createElement('h3', {}, 'Education'),
            React.createElement('div', { className: 'entry' }, [
                React.createElement('h4', {}, 'Intermediate'),
                React.createElement('p', {}, 'IBA Community College | 2020-2024'),
                React.createElement('p', {}, 'Grade: A+')
            ])
        ]),

        // Experience Section
        React.createElement('div', { className: 'section' }, [
            React.createElement('h3', {}, 'Work Experience'),
            React.createElement('div', { className: 'entry' }, [
                React.createElement('h4', {}, 'Junior web developer - TekBirds '),
                React.createElement('p', {}, '2024 - Present'),
                React.createElement('ul', {}, [
                    React.createElement('li', {}, 'Developed and maintained web applications using React'),
                    React.createElement('li', {}, 'Collaborated with cross-functional teams on various projects'),
                    React.createElement('li', {}, 'Implemented responsive design principles')
                ])
            ]),
            React.createElement('div', { className: 'entry' }, [
                React.createElement('h4', {}, 'Intern Developer - '),
                React.createElement('p', {}, 'Summer 2021'),
                React.createElement('ul', {}, [
                    React.createElement('li', {}, 'Assisted in frontend development tasks'),
                    React.createElement('li', {}, 'Participated in code reviews and team meetings')
                ])
            ])
        ]),

        // Skills Section
        React.createElement('div', { className: 'section' }, [
            React.createElement('h3', {}, 'Skills'),
            React.createElement('ul', {}, [
                React.createElement('li', {}, 'Languages: JavaScript, TypeScript, Python (Still Learning)'),
                React.createElement('li', {}, 'Frontend: NextJS, HTML5, CSS3, Tailwind CSS'),
                React.createElement('li', {}, 'Database: Sanity CMS')
            ])
        ])
    ]),

    
    ]
)

    const root = ReactDOM.createRoot(document.getElementById('root'))

    root.render(parent)