import { Button, Card, CardActions, CardContent, CardMedia } from "@mui/material";
import CardStyle from "@nations-hub/components/UI/Card/CardStyle";
import { CardComponentInterface } from "@nations-hub/components/UI/Card/interface";
import { FC } from "react";

const CardComponent: FC<CardComponentInterface> = (props) => {
    return <Card sx={CardStyle.card}>
        {props.image && (
            <CardMedia
                component="img"
                alt={props.image.alt}
                height="200"
                image={props.image.link}
                sx={CardStyle.image}
            />
        )}
        <CardContent sx={CardStyle.cardContent}>
            {props.content}
        </CardContent>
        {props.action && (
            <CardActions>
                <Button
                    href={props.action.link}
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={CardStyle.action}
                >
                    {props.action.label}
                </Button>
            </CardActions>
        )}
    </Card>
}

export default CardComponent;