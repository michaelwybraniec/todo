import { useState } from 'react';
import styles from './TaskForm.module.css';

interface TaskFormProps {
  onAdd: (task: string) => Promise<void>;
}

export const TaskForm = ({ onAdd }: TaskFormProps) => {
  const [title, setTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const trimmed: string = title.trim();
    if (!trimmed || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onAdd(trimmed);
      setTitle('');
    } catch (err: unknown) {
      console.error('Failed to add task:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="task-input" className={styles.label}>
        Add new task
      </label>
      <input
        id="task-input"
        type="text"
        value={title}
        placeholder="Enter task..."
        maxLength={70}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />
      <small className={styles.counter}>
        {70 - title.length} characters remaining
      </small>
      <button
        type="submit"
        disabled={isSubmitting || !title.trim()}
        className={styles.button}
      >
        {isSubmitting ? 'Adding...' : 'Add Task'}
      </button>
    </form>
  );
};