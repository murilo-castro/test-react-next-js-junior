import Link from 'next/link';

const Button = () => {
  return (
    <Link href="creat-task" className="w-full">
      <button className="min-h-[55px] min-w-full rounded-lg bg-task-done text-white shadow-purple mt-5 mb-2">
        Creat Task
      </button>
    </Link>
  );
};

export default Button;
