'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import TodoListAll from '@/components/TodoList/TodoListAll';

const Home = () => {
  return (
    <main className="flex flex-col justify-between p-[2rem] min-h-screen max-w-7xl mx-auto">
      <Header />
      <TodoListAll />
      <Link href="creat-task" className="w-full">
        <button className="min-h-[76px] min-w-full rounded-lg bg-task-done text-white shadow-purple mt-5">
          Creat Task
        </button>
      </Link>
    </main>
  );
};

export default Home;
