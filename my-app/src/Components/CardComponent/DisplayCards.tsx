import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
import "./DisplayCards.css";
import { Icon, IconButton } from '@material-ui/core';


interface IDisplayCardProps {
    ImageUrl: string | undefined;
    BookTitle: string | undefined;
    Author: string | undefined;
    BookLink: string | undefined;
    PublishedDate: string | undefined;
}

function click(link:any) {
    window.open(link);
}

function DisplayCard(props: IDisplayCardProps) {
    return (
        <div>
            <Card className ="CardContainer">
                <CardActionArea>
                    <CardMedia
                        className = "CardImage"
                        image={props.ImageUrl}
                    /> 
                    <CardContent className = "CardContent">
                        <Typography variant ="h6">
                            {props.BookTitle}
                        </Typography>
                        <Typography>
                            Author: {props.Author}
                        </Typography>
                        <Typography>
                            Published: {props.PublishedDate}
                        </Typography>
                    </CardContent>
                    <CardActions className ="CardButtons">
                        <IconButton id="ShareButton" aria-label="share"><ShareIcon/></IconButton>
                        <div className = "MoreButtonContainer">
                        <Button color = "primary" startIcon={<DoubleArrowRoundedIcon/>} onClick={() => click(props.BookLink)}>
                            See More
                        </Button>
                        </div>
                    </CardActions>
                </CardActionArea>
            </Card>
           
        </div>
    )
}


export default DisplayCard;

 

// <Icon id ="MoreButton" color="primary" aria-label="double-arrow-rounded"><DoubleArrowRoundedIcon/></Icon>
