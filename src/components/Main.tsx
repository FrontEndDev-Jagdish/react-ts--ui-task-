
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Projects from './Projects';
import EurosInvestis from './EurosInvestis';
import MembersBricks from './MembersBricks';
import EurosPerqus from './EurosPerqus';
import { Stack } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function Main() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <Stack spacing={2}>
                            <Item sx={{
                                width: '100%',
                                padding: "0",
                                boxShadow: 'none',
                            }}><Projects /></Item>
                            <Item sx={{
                                width: '100%',
                                padding: "0",
                                boxShadow: 'none',
                            }}> <MembersBricks /></Item>

                        </Stack>
                    </Grid>
                    <Grid size={6}>
                        <Stack spacing={2}>
                            <Item sx={{
                                width: '100%',
                                padding: "0",
                                boxShadow: 'none',
                            }}><EurosInvestis /></Item>
                            <Item sx={{
                                width: '100%',
                                padding: "0",
                                boxShadow: 'none',
                            }}> <EurosPerqus /></Item>

                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}