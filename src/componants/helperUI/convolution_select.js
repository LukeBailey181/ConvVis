import React, { component, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';

export default function ConvSelect(props) {

  const handleChange = (event) => {
    props.set_convolution(event.target.value);
  };

  const convs = ["horizontal", "vertical", "edge", "blur", "sharpen"]
  var buttons = []
  for (const conv of convs) {
    buttons.push(
      <Grid container direction="row">
        <Radio
        checked={props.convolution === conv}
        onChange={handleChange}
        value={conv}
        name="radio-button"
        color="default"
        />
        <h3>
          {conv}
        </h3>
      </Grid>
    )
  }

  return (
    <Grid container direction="column" align="center" justify="center">
      <h1>
        Choose Convolution
      </h1>
      <Grid container direction="column" justify="center" align="center">
        {buttons}
      </Grid>
    </Grid>
  )
}
