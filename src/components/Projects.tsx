import { Box, Typography, Card, CardMedia } from "@mui/material";
import { motion } from 'framer-motion';

const images = [
    {
        id: 1,
        image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?cs=srgb&dl=pexels-pixabay-259588.jpg&fm=jpg",
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg"
    },
    {
        id: 3,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFnuSHEXV6QR_mrq_IUfnK3Lu3J4yMkezp8gAnJ_ZheRun7RbbsDwcY3rng2Q8uN2jRQY&usqp=CAU"
    },
    {
        id: 4,
        image: "https://st2.depositphotos.com/1041088/5192/i/450/depositphotos_51925277-stock-photo-american-house-with-beautiful-landscape.jpg"
    },
    {
        id: 5,
        image: "https://static.vecteezy.com/system/resources/thumbnails/040/706/505/small/ai-generated-beautiful-home-exterior-in-evening-with-glowing-interior-lights-and-landscaping-photo.jpg"
    }
];

function Projects() {
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
                backgroundColor: 'black',
                cursor: "pointer",

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
            }}
            >

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: 5,
                        position: 'relative',
                        height: 200,
                    }}
                >
                    {images.map((item, index) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ y: -50 }}
                            whileTap={{ y: -10 }}
                            style={{
                                position: 'absolute',
                                left: `${index * 80 }px`,
                                right: `${index * 60}px`,
                                zIndex: images.length - index + 1,
                            }}
                        >
                            <Card
                                sx={{
                                    width: 300,
                                    height: 130,
                                    overflow: 'hidden',
                                    borderRadius: 3,
                                    opacity: 0.7,
                                   // transform: 'rotateX(180deg) rotateY(-115deg) rotateZ(-170deg)',
                                    transform: 'rotateX(185deg) rotateY(112deg) rotateZ(-173deg)',

                                    transition: '0.4s',
                                    '&:hover': {
                                        opacity: 1,
                                        filter: 'blur(0px)',
                                        boxShadow: 6,
                                        zIndex: images.length + 1,
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={item.image}
                                    alt={`Project ${item.id}`}
                                    sx={{ objectFit: "cover" }}
                                />
                            </Card>
                        </motion.div>
                    ))}

                </Box>

                <Typography
                    variant="h2"
                    sx={{
                        zIndex: 2,
                        ml: 5
                    }}
                >
                    100+
                </Typography>
                <Typography sx={{
                    zIndex: 2,
                    ml: 5,
                    mb: 5,
                }}>projects immobiliers</Typography>
            </Box>


        </>
    );
}

export default Projects;
