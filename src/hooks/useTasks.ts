import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { Task } from '../types/Task'
import { isAuthenticated } from '../lib/auth'

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)

  const fetchTasks = async () => {
    setLoading(true)

    // Check if user is authenticated before fetching tasks
    const authenticated = await isAuthenticated()
    if (!authenticated) {
      console.error('User is not authenticated!')
      setLoading(false)
      return
    }

    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Fetch error:', error)
    } else {
      setTasks(data || [])
    }
    setLoading(false)
  }

  const addTask = async (title: string) => {
    // Check if user is authenticated before adding a task
    const authenticated = await isAuthenticated()
    if (!authenticated) {
      console.error('User is not authenticated!')
      return
    }

    const { data: { user } } = await supabase.auth.getUser()

    const { data, error } = await supabase
      .from('tasks')
      .insert({ title, completed: false, user_id: user?.id })
      .select()

    if (!error && data) {
      setTasks(prev => [data[0], ...prev])
    } else {
      console.error('Insert error:', error)
    }
  }

  const toggleTask = async (id: string, completed: boolean) => {
    const authenticated = await isAuthenticated()
    if (!authenticated) {
      console.error('User is not authenticated!')
      return
    }

    const { error } = await supabase
      .from('tasks')
      .update({ completed })
      .eq('id', id)

    if (error) {
      console.error('Toggle error:', error)
      return
    }

    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, completed } : task))
    )
  }

  const deleteTask = async (id: string) => {
    const authenticated = await isAuthenticated()
    if (!authenticated) {
      console.error('User is not authenticated!')
      return
    }

    const { error } = await supabase.from('tasks').delete().eq('id', id)

    if (error) {
      console.error('Delete error:', error)
      return
    }

    setTasks(prev => prev.filter(task => task.id !== id))
  }


  const updateTask = async (id: string, newTitle: string) => {
    const authenticated = await isAuthenticated()
    if (!authenticated) {
      console.error('User is not authenticated!')
      return
    }
  
    const { error } = await supabase
      .from('tasks')
      .update({ title: newTitle })
      .eq('id', id)
  
    if (error) {
      console.error('Update error:', error)
      return
    }
  
    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, title: newTitle } : task))
    )
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return { tasks, loading, addTask, toggleTask, deleteTask, updateTask }
}