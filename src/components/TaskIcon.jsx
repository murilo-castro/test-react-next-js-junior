import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';

export const TaskIcon = () => (
  <>
    <svg width={0} height={0}>
      <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
        <stop offset={0} stopColor="#7F00FF" />
        <stop offset={1} stopColor="#E100FF" />
      </linearGradient>
    </svg>
    <FactCheckOutlinedIcon sx={{ fill: 'url(#linearColors)' }} />
  </>
);
