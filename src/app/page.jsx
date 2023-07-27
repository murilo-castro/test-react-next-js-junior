'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import TodosList from '@/components/TodosList';
import TodosListDone from '@/components/TodoListDone';

const Home = () => {
  return (
    <main className="p-[2rem] max-w-7xl mx-auto">
      <Header />
      <TodosListDone />
      <TodosList />
      <Link href="creat-task" className="w-full">
        <button className="min-h-[76px] min-w-full rounded-lg bg-task-done text-white shadow-purple mt-5">
          Creat Task
        </button>
      </Link>
    </main>
  );
};

export default Home;
