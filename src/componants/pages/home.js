import React, { component, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import ImageSelect from "../helperUI/image_select";
import ConvSelect from "../helperUI/convolution_select";
import sunset from "../../assets/sunset.jpg";
import snow from "../../assets/snow.jpg";
import city from "../../assets/city.jpg";
import mountain from "../../assets/mountain.jpg";
import Button from '@material-ui/core/Button';

export default function HomePage(props) {

  const display = {"backgroundColor":"blue"}

  const [images, setImages] = useState({
    image_1 : {
      title : "mountains",
      image : mountain,
      selected : false
    },
    image_2 : {
      title : "city",
      image : city,
      selected : false
    },
    image_3 : {
      title : "sunset",
      image : sunset,
      selected : false
    },
    image_4 : {
      title : "snow",
      image : snow,
      selected : false
    }
  })

  const [convolution, setConvolution] = useState("horizontal");

  return (
    <div className="full-screen-container">
      <Grid container direction="column" align="center" xs={12}>
        <Grid container xs={9} direction="column">
          <h1>
            CONVOLUTION VISUALIZATION APP
          </h1>
        </Grid>

        <Grid container direction="row" xs={12}>
          <Grid container xs={6}>
            <ImageSelect 
            images={images}
            set_images={setImages}
            />
          </Grid>
          <Grid container xs={6}>
            <ConvSelect  
            convolution={convolution}
            set_convolution={setConvolution}
            />
          </Grid>
        </Grid>

        <Grid container direction="column">
          <Button variant="outlined">Run Convolution!</Button>
        </Grid>

      </Grid>
    </div>
  )
}
