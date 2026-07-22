// task 9_4

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let course of coursesAndDurationArray) {
    let container = document.createElement('div');
    container.classList.add('item');
    let h = document.createElement('h1');
    h.classList.add('heading');
    h.textContent = course.title;
    container.appendChild(h);
    let p = document.createElement('p');
    p.classList.add('description');
    p.textContent = course.monthDuration;
    container.appendChild(p);
    document.body.append(container);
}