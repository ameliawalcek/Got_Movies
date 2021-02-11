import React from 'react'
import { Typography, Box, CircularProgress } from '@material-ui/core'

const PercentageCircle = (props) => {
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="determinate" thickness={6} {...props} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" color="textSecondary">
                    {`${Math.round(props.value,)}%`}
                </Typography>
            </Box>
        </Box>
    )
}

export default PercentageCircle
