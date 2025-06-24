db = db.getSiblingDB('Project')

db.createCollection('tasks')

var tasks = [
    {
        title: 'Kinder deployen',
        description: 'Kinder mit der neusten Nutbuster-Recursion deployen',
        completed: false,
        dueDate: '2025-06-24'
    },
    {
        title: 'Bugs erschießen',
        description: 'Diese scheiß Bugs endlich aufräumen',
        completed: true,
        dueDate: '2025-07-02'
    },
]

db.tasks.insertMany(tasks)

