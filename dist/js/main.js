const work_experiences = [
    company = {
        name: 'Yondu',
        position: 'Software Engineer - Drupal',
        duration: 'September 2022 - Present',
        responsibilities: [
            'Bug fixing and Troubleshooting',
            'Applying enhancements to an existing application',
            'Following best practice and standards',
            'Code implementation enhancements',
            'Git and Composer',
        ]
    },
    company = {
        name: 'Halcyon Digital Media Design',
        position: 'Drupal Developer',
        duration: 'March 2021 - September 2022',
        responsibilities: [
            'Creating Drupal application from scratch',
            'Custom modules, theming and Drupal MVC',
            'Deploying applications in cpanel',
            'Linux Shell Scripting',
            'Git, Drush and Composer',
            'DDEV for local development',
        ]
    },
    company = {
        name: 'Coreproc',
        position: 'PHP Developer',
        duration: 'September 2019 - March 2021',
        responsibilities: [
            'Creating laravel applications from scratch',
            'Drupal and laravel web applications maintenance',
            'Troubleshooting, Bug fixing and enhancements to drupal application',
            'Integrating new technologies suggested by marketing',
            'Linux Shell Scripting',
            'Unit testing for API\'s created using laravel',
            'MVC for both drupal and laravel',
        ]
    }
]

window.onload = () => {
    for (const key in work_experiences) {
        let container = document.querySelector('#work-experience .custom-container')
        let div = document.createElement('div')
        let h4 = document.createElement('H4')
        let span = document.createElement('span')
        let list = document.createElement('ul')

        h4.textContent = work_experiences[key].name
        span.textContent = work_experiences[key].duration

        work_experiences[key].responsibilities.forEach((responsibility) => {
            let item = document.createElement('li')
            item.textContent = responsibility

            list.appendChild(item)
        })

        div.appendChild(h4)
        div.appendChild(span)
        div.appendChild(list)
        container.appendChild(div)
    }
}