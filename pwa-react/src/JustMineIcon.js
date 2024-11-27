import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default function JustMineIcon() {
  return (
    <SvgIcon sx={{ height: 21, width: 100, mr: 2 }}>
      <svg
        width={100}
        height={21}
        viewBox="0 0 100 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Aclonica&display=swap');
          </style>
        </defs>
        <text
          x="15"
          y="15"
          fill="#FF6F61"
          fontSize="16"
          fontFamily="Aclonica"
        >
          JustMine
        </text>
      </svg>
    </SvgIcon>
  );
}
