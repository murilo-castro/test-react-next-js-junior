import Image from 'next/image';
import dayjs from 'dayjs';

const Header = () => {
  const day = dayjs().format('dddd');
  const fullDate = dayjs().format('DD MMMM YYYY');

  return (
    <header className="flex justify-between mt-[20px] mb-[30px]">
      <div>
        <h3 className="text-primary text-lg font-bold">{day}</h3>
        <p className="text-xs text-date">{fullDate}</p>
      </div>
      <div>
        <Image src="/profile.png" width={50} height={50} alt="" />
      </div>
    </header>
  );
};

export default Header;
