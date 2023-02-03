import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  IconButton,
} from "@mui/material";

// Icons
import CloseIcon from "@mui/icons-material/Close";

const Filters = ({
  categories,
  categoryFilter,
  handleCategoryChange,
  clearFilter,
  location,
  handleLocationChange,
}) => {
  return (
    <Card>
      <CardHeader title="Filter Jobs" sx={{ pb: 0 }} />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5.7}>
            <TextField
              id="outlined-basic"
              label="Search Location"
              variant="outlined"
              fullWidth
              value={location}
              onChange={handleLocationChange}
            />
          </Grid>

          <Grid item xs={12} md={5.7}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Categories</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={categoryFilter}
                label="Categories"
                onChange={handleCategoryChange}
              >
                {categories.map((cat) => {
                  return (
                    <MenuItem key={cat} value={cat}>
                      {cat}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={0.6} sx={{ alignSelf: "center", justifyContent: "center" }}>
            <IconButton sx={{ ml: { xs: 0, md: "auto" } }} onClick={clearFilter}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Filters;
