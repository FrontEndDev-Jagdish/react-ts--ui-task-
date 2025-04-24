import { Box, Typography } from '@mui/material';

export default function AnimatedBox() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "35vh",
        position: "relative",
        color: "white",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        borderRadius: 2,
        flexDirection: "column",
        cursor: "pointer",
        background: "linear-gradient(270deg, #f57e42,red,pink, #f57e42)",
        backgroundSize: "600% 600%",
        transition: "box-shadow 0.3s ease",
        '&:hover': {
          animation: "gradientMove 4s ease infinite",
          boxShadow: 3,
        },
        '&::after': {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          zIndex: 1,
        },
        '@keyframes gradientMove': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        }
      }}
    >
      <Typography
        variant="h2"
        sx={{
          zIndex: 2,
          ml: 5
        }}
      >
        112932202
      </Typography>
      <Typography sx={{
        zIndex: 2,
        ml: 5,
        mb: 5
      }}>euros investis</Typography>
    </Box>
  );
}
