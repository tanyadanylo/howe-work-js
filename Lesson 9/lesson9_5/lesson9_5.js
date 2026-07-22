// task 9_5

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (let course of coursesArray) {
    let container = document.createElement('div');

    let titleBlock = document.createElement("div");
    titleBlock.textContent = `Title: ${course.title}`;
    container.appendChild(titleBlock);

    let wrapper = document.createElement("div");
    wrapper.style.display = 'flex';
    wrapper.style.gap = '10px';

    let monthDurationBlock = document.createElement("div");
    monthDurationBlock.textContent = `Month: ${course.monthDuration}`;

    let hourDurationBlock = document.createElement("div");
    hourDurationBlock.textContent = `Hour: ${course.hourDuration}`;

    wrapper.append(monthDurationBlock, hourDurationBlock);
    container.appendChild(wrapper);

    let modulesList = document.createElement("ul");
    for (let module of course.modules) {
        let li = document.createElement("li");
        li.textContent = module;
        modulesList.append(li);
    }
    container.appendChild(modulesList);
    document.body.appendChild(container);
}
