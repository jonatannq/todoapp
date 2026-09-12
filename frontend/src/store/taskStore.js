import { create } from 'zustand'

export const taskStore = create((set) => ({

    tasks: [],

    loadTask: (task) => 
        set((state) => ({
            tasks: [...state.tasks, task]
        })),

        
}))