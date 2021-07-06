import React, { component, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function ImageSelect(props) {

  const image_style = {
    height : "100px",
    width : "100px",
    borderRadius : "25%"

  }

  const onIconClick = (event) => {
    let newState = Object.assign({}, props.images);
    for (let selection in newState) {
      if (selection !== event.target.id) {
          newState[selection].selected = false;
      }
    }

    newState[event.target.id].selected = true;
    props.set_images(
        newState
      
    )
  }

  const images = Object.keys(props.images).map(icon => (   
    <div className={props.images[icon]['selected'] ?
    "withBorder" : "noBorder"} >
        <img 
        src={props.images[icon]['image']} 
        id={icon} 
        onClick={(e) => onIconClick(e)}
        style = {image_style}
        />
        <p>{props.images[icon]['name']}</p>
    </div>
  ))

  const log = () => {
    console.log(images)
  }

  return (
    <Grid container justify="center" align="center">
      <h1>
        Choose Images
      </h1>
      <Grid container row align="center" justify="center">
        <Grid container column align="center" justify="center">
          {images[0]}
          {images[1]}
        </Grid>
        <Grid container column align="center" justify="center">
          {images[2]}
          {images[3]}
        </Grid>
      </Grid>
    </Grid>
  )
}
