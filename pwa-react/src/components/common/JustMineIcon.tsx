import JustMineLogo from '../../assets/images/logo_text.png';

type JustMineIconProps = {
  width?: number;
  height?: number;
  style?: React.CSSProperties;
};

export default function JustMineIcon({ /* width = 323, height = 82 */ width = 100, height = 25, style }: JustMineIconProps) {
  return (
    <img
      src={JustMineLogo}
      alt="JustMine Logo"
      width={width}
      height={height}
      style={{ marginRight: '8px', ...style }}
    />
  );
}

// export default function JustMineIcon() {
//   return (
//     <SvgIcon sx={{ height: 21, width: 100, mr: 2 }}>
//       <svg
//         width={100}
//         height={21}
//         viewBox="0 0 100 21"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <defs>
//           <style>
//             @import url('https://fonts.googleapis.com/css2?family=Aclonica&display=swap');
//           </style>
//         </defs>
//         <text
//           x="15"
//           y="15"
//           fill="#FF6F61"
//           fontSize="16"
//           fontFamily="Aclonica"
//         >
//           JustMine
//         </text>
//       </svg>
//     </SvgIcon>
//   );
// }
