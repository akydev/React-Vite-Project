import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { IGitHubUsers } from "./interface/IGitHubUsers";
import { useNavigate } from "react-router-dom";

export interface ICommon {
  i: number;
}

export interface IGitHubUsersPageProps extends ICommon {
  hub: IGitHubUsers;
  children: React.ReactNode;
}
export default function GitHubUsers(git: IGitHubUsersPageProps) {
  const navigate = useNavigate();

  const handleViewMore = (username: string) => {
    // console.log("View More Information");
    navigate(`/github/${username}/followers`);
  };

  return (
    <Grid key={git.hub.id} item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345, mb: 2 }}>
        <CardMedia
          sx={{ height: 282 }}
          image={git.hub.avatar_url}
          title={git.hub.login}
        />
        <CardContent>
          <Typography
            sx={{ textTransform: "capitalize" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {git.hub.login}
          </Typography>
          {/* <Typography variant="h6">{git.hub.followers_url}</Typography> */}
          {/* <Typography variant="body2">Followers</Typography> */}
          {/* <Typography variant="h6">{git.hub.following_url}</Typography> */}
          {/* <Typography variant="body2">Following</Typography> */}
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardContent>
          <Button size="small" onClick={() => handleViewMore(git.hub.login)}>
            Followers
          </Button>
          <Button size="small" onClick={() => handleViewMore(git.hub.login)}>
            Following
          </Button>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <a href={git.hub.html_url} target="_blank">
            <Button size="small">View More</Button>
          </a>
        </CardActions>

        {/* Centered View More Button */}
        {/* <Box display="flex" justifyContent="center" mt={4}>
          <Button variant="contained" color="primary" onClick={handleViewMore}>
            View More
          </Button>
        </Box> */}
      </Card>
    </Grid>
  );
}
