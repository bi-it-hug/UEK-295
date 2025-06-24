db = db.getSiblingDB('Project')

db.createCollection('tasks')

var tasks = [
    {
        title: 'Kinder deployen',
        description: 'Kinder mit der neusten Nutbuster-Recursion deployen',
        completed: false,
        dueDate: new Date('2025-06-24T12:00:00')
    },
    {
        title: 'Bugs erschießen',
        description: 'Diese scheiß Bugs endlich aufräumen',
        completed: true,
        dueDate: new Date('2025-07-02T12:00:00')
    },
]

db.tasks.insertMany(tasks)
