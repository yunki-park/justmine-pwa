import { useNavigate } from "react-router-dom";
import JustMineLogo from "../../assets/images/logo_text.png";

type JustMineIconProps = {
  width?: number;
  height?: number;
  style?: React.CSSProperties;
};

export default function JustMineIcon({
  /* width = 323, height = 82 */ width = 100,
  height = 25,
  style,
}: JustMineIconProps) {
  const navigate = useNavigate();

  // 현재 경로가 타겟 경로와 같은 경우 최상단으로 스크롤
  // 다른 경로인 경우 루트 경로로 이동
  const handleNavigation = (path: string) => {
    if (window.location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  return (
    <img
      src={JustMineLogo}
      alt="JustMine Logo"
      width={width}
      height={height}
      style={{
        marginLeft: "8px",
        marginRight: "8px",
        cursor: "pointer",
        ...style,
      }}
      onClick={handleNavigation.bind(null, "/")}
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
