import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux'

import useStyles from './styles';
import { deletePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon font="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button style={{ color: 'rgba(170,51,51, 1)' }} size="small" onClick={() => { }}>
                    <ThumbUpAltIcon font="small" />
                    Like
                    {post.likeCount}
                </Button>
                <Button style={{ color: 'rgba(170,51,51, 1)' }} size="small" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon font="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;