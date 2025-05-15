import { useState } from 'react';
import { Task } from '../types/Task';
import { getRelativeTime } from '../utils/time';
import styles from './TaskItem.module.css';

interface Props {
  task: Task;
  index: number;
  onToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newTitle: string) => void;
}

export const TaskItem: React.FC<Props> = ({
  task,
  index,
  onToggle,
  onDelete,
  onUpdate,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleSaveEdit = async () => {
    if (newTitle.trim() === task.title) return setIsEditing(false);
    await onUpdate(task.id, newTitle);
    setIsEditing(false);
  };

  return (
    <div className={styles.taskItem}>
      <span className={styles.index}>{index + 1}</span>
      <input
        type='checkbox'
        checked={task.completed}
        onChange={() => onToggle(task.id, !task.completed)}
        className={styles.checkbox}
      />
      {isEditing ? (
        <>
          <input
            type='text'
            value={newTitle}
            maxLength={70}
            onChange={(e) => setNewTitle(e.target.value)}
            className={styles.input}
          />
          <button onClick={handleSaveEdit} className={styles.button}>
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className={styles.button}
            style={{ marginRight: '0px' }}
          >
            Cancel
          </button>
        </>
      ) : (
        <div className={styles.taskDetails}>
          <span className={styles.taskTitle}>{task.title}</span>
          {task.created_at && (
            <small className={styles.createdAt}>
              {' '}
              – {getRelativeTime(task.created_at)}
            </small>
          )}
        </div>
      )}
      {!isEditing && (
        <span className={styles.taskActions}>
          <button
            onClick={() => setIsEditing(true)}
            className={styles.iconButton}
          >
            ✏️
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className={styles.iconButton}
            style={{ marginRight: '0px' }}
          >
            ❌
          </button>
        </span>
      )}
    </div>
  );
};
