import { Box, Typography } from "@mui/material";

function EurosPerqus() {
    return (
        <>
            <Box sx={{
                width: "100%",
                height: "62vh",
                position: 'relative',
                color: "white",
                overflow: "hidden",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-end",
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
                        ml: 5
                    }}
                >
                    3231791
                </Typography>
                <Typography sx={{
                    zIndex: 2,
                    ml: 5,
                    mb: 5
                }}>euros perqus</Typography>
            </Box>
        </>
    );
}

export default EurosPerqus;