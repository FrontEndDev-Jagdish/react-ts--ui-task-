import { Box, Typography } from "@mui/material";

function MembersBricks() {
    return (
        <>
            <Box sx={{
                width: "100%",
                height: "35Vh",
                position: "relative",

                color: "white",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                flexDirection: "column",
                cursor: "pointer",
                backgroundImage: `url(https://i.pinimg.com/736x/fb/39/be/fb39beb6189dc4eb6f47f5c0b33db4e2.jpg)`,
                objectFit: "cover",
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
            }}>
                <Typography
                    variant="h3"
                    sx={{
                        zIndex: 2,

                    }}
                >
                    400K+
                </Typography>
                <Typography sx={{
                    zIndex: 2,

                }}>members Bricks</Typography>
            </Box>
        </>
    );
}

export default MembersBricks;