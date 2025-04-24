// components/LayeredCardGallery.jsx
import { Box, Card, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

// Simulated house images
const houseImages = [
  'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?cs=srgb&dl=pexels-pixabay-259588.jpg&fm=jpg',
  "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg",
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFnuSHEXV6QR_mrq_IUfnK3Lu3J4yMkezp8gAnJ_ZheRun7RbbsDwcY3rng2Q8uN2jRQY&usqp=CAU',
  'https://st2.depositphotos.com/1041088/5192/i/450/depositphotos_51925277-stock-photo-american-house-with-beautiful-landscape.jpg',
  'https://static.vecteezy.com/system/resources/thumbnails/040/706/505/small/ai-generated-beautiful-home-exterior-in-evening-with-glowing-interior-lights-and-landscaping-photo.jpg',
];

const rotations = [-10, -5, 0, 5, 10]; // slight angle for layered look

export default function LayeredCardGallery() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#0B1120',
        overflowX: 'auto',
        px: 4,
      }}
    >
      {houseImages.map((src, index) => (
        <MotionCard
          key={index}
          whileHover={{
            y: -15,
            rotate: 0,
            scale: 1.05,
            zIndex: 10,
            boxShadow: '0px 15px 25px rgba(0,0,0,0.4)',
          }}
          transition={{ type: 'spring', stiffness: 300 }}
          initial={{ rotate: rotations[index % rotations.length] }}
          sx={{
            minWidth: 220,
            height: 280,
            borderRadius: 4,
            overflow: 'hidden',
            cursor: 'pointer',
            marginLeft: index !== 0 ? -80 : 0, // overlap effect
            zIndex: index,
            transition: 'z-index 0.3s ease',
          }}
        >
          <CardMedia
            component="img"
            image={src}
            alt={`House ${index + 1}`}
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </MotionCard>
      ))}
    </Box>
  );
}
