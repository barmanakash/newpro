import React, { Component } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const jobListings = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Google",
    experience: "2-5 years",
    responsibilities:
      "Develop scalable applications, Collaborate with cross-functional teams",
    link: "https://careers.google.com",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Facebook",
    experience: "3-6 years",
    responsibilities: "Build responsive UI, Optimize frontend performance",
    link: "https://www.facebook.com/careers",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "Amazon",
    experience: "4-7 years",
    responsibilities: "Develop REST APIs, Database optimization",
    link: "https://www.amazon.jobs",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Apple",
    experience: "2-4 years",
    responsibilities: "Create user-friendly designs, Conduct usability tests",
    link: "https://www.apple.com/careers",
  },
];

class HiringPortal extends Component {
  render() {
    return (
      <Container
        maxWidth="md"
        style={{
          marginTop: "20px",
          height: "100vh",
          width: "100vw",
          minWidth: "100vw",
          display: "block",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Latest Job Openings
        </Typography>
        <Grid container spacing={3}>
          {jobListings.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{job.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {job.company}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Experience: {job.experience}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Responsibilities: {job.responsibilities}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: "10px" }}
                    fullWidth
                    href={job.link}
                    target="_blank"
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default HiringPortal;
