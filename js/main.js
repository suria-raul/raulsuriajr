import {datas} from './data'

function experiences() {
    for (const company in datas.workExperiences) {
        let container = document.querySelector('#work-experience .item-container')
        let div = document.createElement('div')
        let h4 = document.createElement('H4')
        let span = document.createElement('span')
        let list = document.createElement('ul')

        div.classList.add('py-4', 'mb-4')
        h4.classList.add('text-base', 'sm:text-lg', 'md:text-xl', 'lg:text-2xl', 'xl:3xl', 'my-1')
        span.classList.add('text-xs', 'mb-1.5', 'block', 'uppercase')
        list.classList.add('list-disc', 'pl-10')

        h4.textContent = datas.workExperiences[company].position
        span.textContent = datas.workExperiences[company].name + ', ' + datas.workExperiences[company].duration

        datas.workExperiences[company].responsibilities.forEach((responsibility) => {
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

function projectList() {
    for (const project in datas.projects) {
        let projectContainer = document.querySelector('#projects .projects-container')
        let anchor = document.createElement('a')
        let imageContainer = document.createElement('div')
        let image = document.createElement('img')
        let span = document.createElement('span')
        let spanTech = document.createElement('span')

        anchor.setAttribute('href', datas.projects[project].link)
        anchor.setAttribute('target', '_blank')
        image.setAttribute('src', datas.projects[project].image)
        image.setAttribute('alt', datas.projects[project].name)
        span.textContent = datas.projects[project].name
        spanTech.textContent = datas.projects[project].technology

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

function skillList() {
    for (const skill in datas.skills) {
        let container = document.querySelector('#skills .skills-container')
        let icon = document.createElement('img')
        let iconContainer = document.createElement('div')
        let span = document.createElement('span')

        icon.setAttribute('src', datas.skills[skill].icon)
        icon.setAttribute('alt', datas.skills[skill].name)

        span.textContent = datas.skills[skill].name

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