import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function CourseCard(props) {
    const handleDeleteCourse = (id) => {
        const url = process.env.REACT_APP_API_URL + "/courses/" + id;
        console.log(url);
        axios.delete(url).then((resp)=>{
          alert(resp.data.Message)
        })
      };

    return (

      <Card sx={{ position: 'relative',maxWidth: 345 , height : 400}}>
        <CardActionArea>

          <CardMedia
            component="img"
            height="140"
            image = {props.course.thumbnail}
            alt="green iguana"
          />

          <CardContent>
            
            <Typography gutterBottom variant="h5" component="div">
              {props.course.title}
            </Typography>
            
            <Typography variant="body2" color="text.primary">
             {props.course.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {props.course.duration} Minutes
            </Typography>
          </CardContent>

        </CardActionArea>


        <CardActions style={{ position: 'absolute', bottom: '0' }}>


        <Link to={`/courses/${props.course._id}`} >
            <Button size="small" color="primary" >
              Details 
            </Button>
          </Link>

          <Button onClick={() => handleDeleteCourse(props.course._id)}>Delete</Button>

        </CardActions>
      </Card>
    );
  }

{/* <p>{course.instructor}</p>
<p>{course.duration} Hours</p>
<p>{course.description}</p>
<button onClick={() => handleDeleteCourse(course._id)}>Delete</button>
<button onClick={() => handleEditCourse(course._id, course)}>Edit</button> */} 