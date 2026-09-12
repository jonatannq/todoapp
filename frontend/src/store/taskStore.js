import { create } from 'zustand'

export const taskStore = create((set) => ({
    tasks: [],

    addTask: (task) => 
        set((state) => ({
            tasks: [...state.tasks, task]
        })),

    deleteTask: (id) =>
        set((state) => ({
            tasks: state.tasks.filter((_, index) => index != id)
        })),

    editTask: (id, newTask) => 
        set((state) => ({
            tasks: state.tasks.map((task, index) => {

               return index == id ? newTask : task
            })
        }))
    
        
}))