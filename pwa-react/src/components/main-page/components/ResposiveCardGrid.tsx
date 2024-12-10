import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Box,
  useMediaQuery,
  useTheme,
  styled,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useInternalNavigation } from "../../../hooks/navigationHandlers";

type Testimonial = {
  testimonial: string;
  avatar: React.ReactNode;
  name: string;
  occupation: string;
};

type ResponsiveCardGridProps = {
  userTestimonials: Testimonial[];
  logos: string[];
};

const ResponsiveContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles?.("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));

const ResponsiveCardGrid: React.FC<ResponsiveCardGridProps> = ({
  userTestimonials,
  logos,
}) => {
  const [showAll, setShowAll] = useState(false);
  const theme = useTheme();
  const internalNav = useInternalNavigation();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleToggle = () => {
    setShowAll((prev) => !prev);

    if (showAll) {
      internalNav.handleTestimonials();
    }
  };

  const remainingCount = userTestimonials.length - 1;

  const logoStyle = {
    width: "64px",
    opacity: 0.3,
  };

  return (
    <ResponsiveContainer>
      {(!isMobile || showAll) && (
        <Grid container spacing={2}>
          {userTestimonials.map((testimonial, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={index}
              sx={{ display: "flex" }}
            >
              <Card
                variant="outlined"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexGrow: 1,
                }}
              >
                <CardContent>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ color: "text.secondary" }}
                  >
                    {testimonial.testimonial}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <CardHeader
                    avatar={testimonial.avatar}
                    title={testimonial.name}
                    subheader={testimonial.occupation}
                  />
                  <img
                    src={logos[index]}
                    alt={`Logo ${index + 1}`}
                    style={logoStyle}
                  />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      {isMobile && !showAll && remainingCount > 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" onClick={handleToggle}>
            {`자세히 보기 (${remainingCount}개)`}
          </Button>
        </Box>
      )}
      {isMobile && showAll && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: 2,
          }}
        >
          <Button variant="outlined" onClick={handleToggle}>
            접기
          </Button>
        </Box>
      )}
    </ResponsiveContainer>
  );
};

export default ResponsiveCardGrid;
