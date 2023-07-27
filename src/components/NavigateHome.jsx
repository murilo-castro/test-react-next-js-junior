import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Link from 'next/link';

export default function NavigateHome({ children }) {
  return (
    <header>
      <nav>
        <Link href={`/`} className="flex gap-[6px]">
          <NavigateBeforeIcon />
          <h1 className="text-2xl">{children}</h1>
        </Link>
      </nav>
    </header>
  );
}
