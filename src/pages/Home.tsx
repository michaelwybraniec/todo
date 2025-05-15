import { TaskForm } from '../components/TaskForm';
import { TaskItem } from '../components/TaskItem';
import { useTasks } from '../hooks/useTasks';
import SignOutButton from '../components/SignOutButton';
import styles from './Home.module.css';
import Loader from '../components/Loader';

export default function Home() {
  const { tasks, loading, addTask, toggleTask, deleteTask, updateTask } =
    useTasks();

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.leftContent}>
          <img src='/icon.png' alt='Icon' className={styles.icon} />
          <h1 className={styles.title}>TODO</h1>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.signOutButtonWrapper}>
            <small>
              <a
                href='https://www.one-front.com'
                target='_blank'
                rel='noopener noreferrer'
              >
               React & Supabase App | Made with love by ONE-FRONT®
              </a>
            </small>
            <SignOutButton />
          </div>
        </div>
      </header>

      <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <TaskForm onAdd={addTask} />
      </div>
      <main className={styles.scrollableContent}>
        <div style={{ paddingTop: '20px', paddingBottom: '50px' }}>
          {loading ? (
            <div className={styles.userInfo} ><Loader />;</div>
          ) : tasks.length === 0 ? (
            <div className={styles.userInfo} >You have nothing TODO 🤓</div>
          ) : (
            tasks.map((task, index) => (
              <div key={task.id}>
                <TaskItem
                  key={task.id}
                  index={index}
                  task={task}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                  onUpdate={updateTask}
                />
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
