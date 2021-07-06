import React, { component, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import ImageSelect from "../helperUI/image_select";
import ConvSelect from "../helperUI/convolution_select";

export default function HomePage(props) {

  const display = {"backgroundColor":"blue"}

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
