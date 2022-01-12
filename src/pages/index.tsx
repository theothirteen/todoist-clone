import type { NextPage } from 'next';
import Head from 'next/head';
import TodoList from '../features/todo/TodoList';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Todist Clone</title>
        <meta name='description' content='Fun Clone' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <TodoList />
      </main>
    </div>
  );
};

export default Home;
