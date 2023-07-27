'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import TodoListAll from '@/components/TodoList/TodoListAll';
import Button from '@/components/Button';

const Home = () => {
  return (
    <main className="flex flex-col justify-between p-[2rem] min-h-screen max-w-7xl mx-auto">
      <Header />
      <TodoListAll />
      <Button />
    </main>
  );
};

export default Home;
