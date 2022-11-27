import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CustomCard, ConfidenceBox } from '../styles/NewsCard'
import { Box } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

export default function NewsCard(props) {
    return (
        <CustomCard >
            <CardContent>
                <Box display="flex" justifyContent="space-between">
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.stock}
                    </Typography>
                    <ConfidenceBox sx={props.confidence > 0.5 ?
                        { backgroundColor: '#CCFFCC', color: '#66CC33' } :
                        { backgroundColor: '#ffcccb', color: '#CC3333' }}>
                        {props.confidence}
                        {
                            props.status == 'positive' ? <TrendingUpIcon /> :
                                <TrendingDownIcon />
                        }
                    </ConfidenceBox>
                </Box>
                <Typography variant="body2">
                    {props.news}
                </Typography>
            </CardContent>
            <CardActions>
                <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" margin="0 0.4em">
                    <a href={props.url} rel="noopener noreferrer" target="_blank">
                        <Button size="small">Read News</Button>
                    </a>
                    <Typography variant='subtitle2'>
                        {props.date}
                    </Typography>
                </Box>
            </CardActions>
        </CustomCard>
    );
}