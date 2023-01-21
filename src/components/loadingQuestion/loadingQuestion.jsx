import './loadingQuestion.css'
import Skeleton from '@mui/material/Skeleton'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

const LoadingQuestion = () => {

    return (

        <Grid container spacing={2}>
            <Grid item xs={12} sm={4} justifyContent="center" container direction="column" alignItems="center">
                {/* <img src='XXX' /> */}
                <Skeleton variant="circular" width={400} height={400} className="imgSkeleton" />
            </Grid>
            <Grid item xs={12} sm={8} justifyContent="center">
                <Box sx={{ width: 700 }} className="questionSkeleton">
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                </Box>
                <Grid container spacing={2} className="answersSkeletonContainer">
                    <Box sx={{ width: 700 }} className="answersSkeleton">
                        <Skeleton variant="rectangular" height={60} />
                        <Skeleton variant="rectangular" animation="wave" height={60} />
                        <Skeleton variant="rectangular" animation="wave" height={60} />
                        <Skeleton variant="rectangular" animation={false} height={60} />
                    </Box>
                </Grid>
            </Grid>

        </Grid>

    )
}

export default LoadingQuestion