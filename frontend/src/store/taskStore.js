import { create } from 'zustand'

export const taskStore = create((set) => ({
    tasks: [],
    isEdit: false,

    setTasks: (tasks) => 
        set({tasks: tasks}),
 

    addTask: (task) => 
        set((state) => ({
            tasks: [...state.tasks, task]
        })),

    deleteTask: (id) =>
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id != id)
        })),

    editTask: (id, newTask) => 
        set((state) => ({
            tasks: state.tasks.map((task) => {
               return task.id === id ? {...task, title: newTask} : task
            })
        })),
    
    setEdit: (value) => 
        set({isEdit: value}),

    
}))