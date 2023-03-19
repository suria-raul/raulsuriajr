const work_experiences = {
    yondu: {
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
    halcyon: {
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
    coreproc: {
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
    purplebug: {
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
    },
    wns_wfm: {
        name: 'WNS Global Services',
        position: 'Executive Workforce',
        duration: 'April 2017 - September 2017',
        responsibilities: [
            'Planning contact center agent\'s schedule',
            'Monitoring and reporting agent\'s real time performance',
        ]
    },
    wns_csr: {
        name: 'WNS Global Services',
        position: 'Customer service representative',
        duration: 'October 2015 - April 2017',
        responsibilities: [
            'Provides resolution on all client inquiries',
            'Booking tickets',
            'Bag\'s Check-in',
            'etc.,',
        ]
    }
}

function experiences() {
    for (const company in work_experiences) {
        let container = document.querySelector('#work-experience .item-container')
        let div = document.createElement('div')
        let h4 = document.createElement('H4')
        let span = document.createElement('span')
        let list = document.createElement('ul')

        div.classList.add('py-4', 'mb-4')
        h4.classList.add('text-base', 'sm:text-lg', 'md:text-xl', 'lg:text-2xl', 'xl:3xl', 'my-1')
        span.classList.add('text-xs', 'mb-1.5', 'block', 'uppercase')
        list.classList.add('list-disc', 'pl-10')

        h4.textContent = work_experiences[company].position
        span.textContent = work_experiences[company].name + ', ' + work_experiences[company].duration

        work_experiences[company].responsibilities.forEach((responsibility) => {
            let item = document.createElement('li')
            item.classList.add('text-base')
            item.textContent = responsibility

            list.appendChild(item)
        })

        div.appendChild(h4)
        div.appendChild(span)
        div.appendChild(list)
        container.appendChild(div)
    }
}

const projects = [
    charlton_media = {
        name: 'Charlton Media',
        technology: 'Drupal 9',
        image: 'images/charlton_media.png',
        link: 'https://charltonmedia.com/',
    },
    elbien_hotel = {
        name: 'El bien hotel tagaytay',
        technology: 'Drupal 9',
        image: 'images/elbien_hotel_tagaytay.png',
        link: 'https://elbienhotel.com/',
    },
    alstra = {
        name: 'Alstra Contact Page',
        technology: 'Drupal 8',
        image: 'images/alstra_form.png',
        link: 'https://ccs.alstra.ph/',
    },
    wellness_home_massage = {
        name: 'Royal Wellness',
        technology: 'Drupal 9',
        image: 'images/royal_wellness.png',
        link: 'https://wellnesshomemassage.com/',
    },
    bonakid = {
        name: 'Bonakid',
        technology: 'Drupal 8',
        image: 'images/bonakid.png',
        link: 'https://batangmaylaban.com.ph',
    },
    dryBrush = {
        name: 'drybrush',
        technology: 'Laravel',
        image: 'images/dryBrush.png',
        link: 'https://drybrush.com/',
    },
    mom_baby_hub = {
        name: 'Mom and Baby Hub',
        technology: 'Laravel',
        image: 'images/momandbaby.png',
        link: 'https://momandbabyhub.com/',
    }
]

function projectList() {
    for (const project in projects) {
        let projectContainer = document.querySelector('#projects .projects-container')
        let anchor = document.createElement('a')
        let imageContainer = document.createElement('div')
        let image = document.createElement('img')
        let span = document.createElement('span')
        let spanTech = document.createElement('span')

        anchor.setAttribute('href', projects[project].link)
        anchor.setAttribute('target', '_blank')
        image.setAttribute('src', projects[project].image)
        image.setAttribute('alt', projects[project].name)
        span.textContent = projects[project].name
        spanTech.textContent = projects[project].technology

        imageContainer.classList.add('image-container', 'mb-3')
        image.classList.add('w-80', 'h-60', 'mx-auto')
        span.classList.add('block', 'text-center')
        spanTech.classList.add('block', 'text-center')

        imageContainer.appendChild(image)
        anchor.appendChild(imageContainer)
        anchor.appendChild(span)
        anchor.appendChild(spanTech)

        projectContainer.appendChild(anchor)
    }
}

const skills = [
    drupal = {
        name: 'Drupal',
        icon: 'images/icons/drupal.png',
    },
    laravel = {
        name: 'Laravel',
        icon: 'images/icons/laravel.png',
    },
    php = {
        name: 'PHP',
        icon: 'images/icons/php.png',
    },
    mysql = {
        name: 'MySQL',
        icon: 'images/icons/mysql.png',
    },
    git = {
        name: 'Git',
        icon: 'images/icons/git.png',
    },
    javascript = {
        name: 'JavaScript',
        icon: 'images/icons/javaScript.png',
    },
    // vue = {
    //     name: 'Vue',
    //     icon: 'images/icons/vue.png',
    // },
    jquery = {
        name: 'JQuery',
        icon: 'images/icons/jquery.png',
    },
    tailwindcss = {
        name: 'Tailwind Css',
        icon: 'images/icons/tailwindcss.png',
    },
    bootstrap = {
        name: 'Bootstrap',
        icon: 'images/icons/bootstrap.png',
    },
    sass = {
        name: 'Sass',
        icon: 'images/icons/sass.png'
    },
    css3 = {
        name: 'CSS',
        icon: 'images/icons/css3.png',
    },
    html = {
        name: 'HTML',
        icon: 'images/icons/html5.png',
    }
]

function skillList() {
    for (const skill in skills) {
        let container = document.querySelector('#skills .skills-container')
        let icon = document.createElement('img')
        let iconContainer = document.createElement('div')
        let span = document.createElement('span')

        icon.setAttribute('src', skills[skill].icon)
        icon.setAttribute('alt', skills[skill].name)

        span.textContent = skills[skill].name

        icon.classList.add('w-24', 'block', 'mx-auto', 'mb-2')
        span.classList.add('capitalize')
        iconContainer.classList.add('block', 'mx-auto', 'text-center')

        iconContainer.appendChild(icon)
        iconContainer.appendChild(span)

        container.appendChild(iconContainer)
    }
}

window.onload = () => {
    experiences()
    projectList()
    skillList()
}