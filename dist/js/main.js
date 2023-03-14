const work_experiences = [
    yondu = {
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
    halcyon = {
        name: 'Halcyon Digital Media Design',
        position: 'Drupal Developer',
        duration: 'March 2021 - September 2022',
        responsibilities: [
            'Creating Drupal application from scratch',
            'Mobile responsive',
            'Custom modules, theming and Drupal MVC',
            'Deploying applications in cpanel',
            'Linux Shell Scripting',
            'Git, Drush and Composer',
            'DDEV for local development',
        ]
    },
    coreproc = {
        name: 'Coreproc',
        position: 'PHP Developer',
        duration: 'September 2019 - March 2021',
        responsibilities: [
            'Creating Drupal or Laravel applications from start to finish',
            'Drupal and laravel web applications maintenance',
            'Troubleshooting, Bug fixing and enhancements to drupal application',
            'Integrating new technologies suggested by marketing',
            'Linux Shell Scripting',
            'Mobile responsive',
            'Unit testing for API\'s created using laravel',
            'MVC for both drupal and laravel',
        ]
    },
    purplebug = {
        name: 'PurpleBug Inc',
        position: 'Junior Web Developer',
        duration: 'August 2018 - February 2019',
        responsibilities: [
            'Bug fixing and Troubleshooting',
            'Laravel and wordpress application maintenance',
            'Applying enchancements to an existing application',
            'Creating Mobile Responsive Applications',
            'Providing Web support',
            'Analyzing and reviewing design specifications',
        ]
    }
]

window.onload = () => {
    for (const company in work_experiences) {
        let container = document.querySelector('#work-experience .custom-container')
        let div = document.createElement('div')
        let h4 = document.createElement('H4')
        let span = document.createElement('span')
        let list = document.createElement('ul')

        div.classList.add('py-4', 'mb-4')
        h4.classList.add('text-xl', 'my-1')
        span.classList.add('text-xs', 'mb-1.5', 'block', 'uppercase')
        list.classList.add('list-disc', 'pl-10')

        h4.textContent = work_experiences[company].position
        span.textContent = work_experiences[company].name + ', ' + work_experiences[company].duration

        work_experiences[company].responsibilities.forEach((responsibility) => {
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