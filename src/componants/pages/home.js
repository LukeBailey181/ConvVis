import React, { component, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import ImageSelect from "../helperUI/image_select";
import ConvSelect from "../helperUI/convolution_select";

export default function HomePage(props) {

  const display = {"backgroundColor":"blue"}

  [image_1, setImage1] = useState({
    title : "mountains",
    image : require("../../assets/mountain.jpg"),
    selected : false
  })

  [image_2, setImage2] = useState({
    title : "city",
    image : require("../../assets/city.jpg"),
    selected : false
  })

  [image_3, setImage3] = useState({
    title : "sunset",
    image : require("../../assets/sunset.jpg"),
    selected : false
  })
  
  [image_4, setImage4] = useState({
    title : "snow",
    image : require("../../assets/snow.jpg"),
    selected : false
  })

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
            <ImageSelect />
          </Grid>
          <Grid container xs={6}>
            <ConvSelect />
          </Grid>
        </Grid>

      </Grid>
    </div>
  )
}
