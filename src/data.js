const data = {
    profile: {
        name: 'Raul Suria Jr',
        title: 'PHP Developer',
        download_resume: 'Download Resume',
        resume_link: 'pdf/Raul_Suria_Jr.pdf',
        photo: 'images/profile.jpg'
    },
    workExperience: {
        title: 'Work Experience',
        experiences: {
            primeTechnologySpecialist: {
                name: 'Prime Technology Specialist',
                position: 'PHP Programmer',
                duration: 'January 2024 - current',
                responsibilities: [
                   'Wrote server-side and client-side code for Insurance systems using PHP, HTML, CSS and JavaScript.',
                   'Developed back-end components to connect applications with web services.',
                   'Built and maintained internal tools to streamline software development process and enhance productivity.',
                   "Implements API's to different systems for enhancements.",
                ]
            },
            vavasoftwarecorp: {
                name: 'Vavasoftware Corp.',
                position: 'Backend Developer - PHP',
                duration: 'August 2023 - December 2023',
                responsibilities: [
                    'Spearheaded the development and implementation of multiple hightraffic online gaming platforms, encompassing casino and gambling websites.',
                    'Oversaw the comprehensive maintenance and optimization of critical systems infrastructure, ensuring high availability, performance, and reliability of online platforms.',
                    'Integrated diverse third-party APIs to enhance platform functionality and expand service offerings.',
                    'Optimizing complex database queries to improve application performance and scalability.',
                ]
            },
            yondu: {
                name: 'Yondu',
                position: 'Software Engineer - Drupal',
                duration: 'September 2022 - June 2023',
                responsibilities: [
                    'Played a key role in maintaining the integrity and reliability of Drupal applications by efficiently identifying, diagnosing, and resolving software defects and technical issues.',
                    'Contributed to the evolution of Drupal applications by implementing enhancements to existing features and functionalities.',
                    'Consistently adhered to Drupal coding standards, security guidelines and development best practices throughout the development lifecycle.',
                    'Writing clean, well-documented, and optimized code, and included tasks such as optimizing database queries, implementing caching strategies, and refactoring existing code to improve maintainability.',
                    'Git and Composer',
                ]
            },
            halcyon: {
                name: 'Halcyon Digital Media Design',
                position: 'Drupal Developer',
                duration: 'March 2021 - September 2022',
                responsibilities: [
                    'Develops Drupal applications from the ground up, encompassing all aspects of site architecture, module selection, and custom module development.',
                    'Ensured optimal user experiences across all devices by implementing mobile-responsive designs and front-end development techniques.',
                    'Developed custom Drupal modules to extend site functionality beyond core features, created and customized Drupal themes to achieve unique visual designs, and implemented the Drupal MVC (Model-ViewController) architecture to organize code and promote maintainability.',
                    'Utilized Linux shell scripting to automate routine tasks, streamline development workflows, and improve server administration efficiency.',
                    'Leveraged Git for version control to manage code changes collaboratively, Drush for Drupal site management to automate common administrative tasks, and Composer for dependency management to efficiently manage project dependencies.',
                ]
            },
            coreproc: {
                name: 'Coreproc',
                position: 'PHP Developer',
                duration: 'September 2019 - March 2021',
                responsibilities: [
                    'Develops web applications from inception to completion using both Drupal and Laravel frameworks.',
                    'Managed the ongoing maintenance of existing Drupal and Laravel web applications, ensuring their stability, security, and optimal performance.',
                    'Maintaining and improving Drupal applications by efficiently troubleshooting and resolving software defects, implementing bug fixes, and developing enhancements to existing functionality.',
                    'Collaborated with marketing teams to integrate new and emerging technologies into web applications to enhance user engagement and achieve business objectives.',
                    'Utilized Linux shell scripting to automate routine tasks, streamline development workflows, and optimize server administration.',
                    'Ensured that all developed web applications provided a seamless and engaging user experience across various devices by implementing mobile-responsive designs.',
                    'Designed and developed web applications using the Model-ViewController (MVC) architectural pattern in both Drupal and Laravel frameworks.',
                ]
            },
            purplebug: {
                name: 'PurpleBug Inc',
                position: 'Junior Web Developer',
                duration: 'August 2018 - February 2019',
                responsibilities: [
                    'Ensuring the stability and functionality of applications by efficiently identifying, diagnosing, and resolving software defects.',
                    'Participated in the ongoing maintenance of Laravel and WordPress applications, ensuring their smooth operation and addressing any issues that arose.',
                    'Contributed to the improvement of existing applications by implementing enhancements to features and functionalities.',
                    'Played a role in developing web applications that provided a positive user experience across various devices by contributing to the implementation of mobile-responsive designs.',
                    'Provided technical support to users, addressing their inquiries and resolving technical issues related to web applications.',
                    'Collaborated with designers and senior developers to analyze and review design specifications for new and existing applications.',
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
    },
    projects: {
        title: 'Projects',
        projects: {
            g2g: {
                name: 'G2G',
                technology: 'Laravel, VueJs',
                image: 'images/g2g.png',
                link: 'https://g2g01.com/'
            },
            charlton_media: {
                name: 'Charlton Media',
                technology: 'Drupal 9',
                image: 'images/charlton_media.png',
                link: 'https://charltonmedia.com/',
            },
            elbien_hotel: {
                name: 'El bien hotel tagaytay',
                technology: 'Drupal 9',
                image: 'images/elbien_hotel_tagaytay.png',
                link: 'https://elbienhotel.com/',
            },
            alstra: {
                name: 'Alstra Contact Page',
                technology: 'Drupal 8',
                image: 'images/alstra_form.png',
                link: 'https://ccs.alstra.ph/',
            },
            wellness_home_massage: {
                name: 'Royal Wellness',
                technology: 'Drupal 9',
                image: 'images/royal_wellness.png',
                link: 'https://wellnesshomemassage.com/',
            },
            bonakid: {
                name: 'Bonakid',
                technology: 'Drupal 8',
                image: 'images/bonakid.png',
                link: 'https://batangmaylaban.com.ph',
            },
            dryBrush: {
                name: 'drybrush',
                technology: 'Laravel',
                image: 'images/dryBrush.png',
                link: 'https://drybrush.com/',
            },
            mom_baby_hub: {
                name: 'Mom and Baby Hub',
                technology: 'Laravel',
                image: 'images/momandbaby.png',
                link: 'https://momandbabyhub.com/',
            }
        }
    },
    skills: {
        title: 'Skills',
        skills: {
            drupal: {
                name: 'Drupal',
                icon: 'images/icons/drupal.png',
            },
            laravel: {
                name: 'Laravel',
                icon: 'images/icons/laravel.png',
            },
            php: {
                name: 'PHP',
                icon: 'images/icons/php.png',
            },
            mysql: {
                name: 'MySQL',
                icon: 'images/icons/mysql.png',
            },
            git: {
                name: 'Git',
                icon: 'images/icons/git.png',
            },
            javascript: {
                name: 'JavaScript',
                icon: 'images/icons/javaScript.png',
            },
            vue: {
                name: 'VueJs',
                icon: 'images/icons/vue.png',
            },
            jquery: {
                name: 'JQuery',
                icon: 'images/icons/jquery.png',
            },
            tailwindcss: {
                name: 'Tailwind Css',
                icon: 'images/icons/tailwindcss.png',
            },
            bootstrap: {
                name: 'Bootstrap',
                icon: 'images/icons/bootstrap.png',
            },
            sass: {
                name: 'Sass',
                icon: 'images/icons/sass.png'
            },
            css3: {
                name: 'CSS',
                icon: 'images/icons/css3.png',
            },
            html: {
                name: 'HTML',
                icon: 'images/icons/html5.png',
            }
        }
    },
}

export default data