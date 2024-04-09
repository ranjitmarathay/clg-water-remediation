import { Typography, Container, Grid, Box } from "@mui/material";


function ReputationItem(props){
  return (
    <Grid container spacing={2} sx={{ alignItems: "center", marginBottom: 2 }} direction={{ xs: "column", lg: "row" }}>
      <Grid item xs={12} lg={12}>
        <Typography variant="h5" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" } }}>
          {props.title}
        </Typography>
      </Grid>
      <Grid item xs={12} lg={12}>
        <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.5rem" } }} color="text.secondary">
          {props.text}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default function Reputation() {
  return (
    <Container>
       <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2, padding: 3 }}>
        <Typography variant="h3" sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" } }} color="#000000">
          We have a reputation for excellence.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <ReputationItem 
            title="Why Us?" 
            text="In Austin's competitive landscape we set ourselves apart with excellent customer service, dependability and superior workmanship." 
            image="https://i.imgur.com/0jJx8s6.png"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ReputationItem
            title="Predictable Timing"
            text="Our team of dedicated, experienced professionals will work with you on a schedule that works for you. We take care of all of the details so you can focus on what matters."
            image="https://i.imgur.com/6v6s0jB.png"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ReputationItem
            title="Affordability"
            text="Best value for money hands down. Bring us a quote from a reputable company and we will match it."
            image="https://i.imgur.com/7b9gk5A.png"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ReputationItem
            title="Easy Billing"
            text="We will send you a reminder text before we bill you. No Surprises!"
            image="https://i.imgur.com/7b9gk5A.png"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ReputationItem
            title="Philosophy"
            text="We believe in transparency and honesty. We are committed to providing you with quality work."
            image="https://i.imgur.com/7b9gk5A.png"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ReputationItem
            title="Quality"
            text="We strive to produce excellent work consistently. If it doesn't live up to project expectations, we will correct it."
            image="https://i.imgur.com/7b9gk5A.png"
          />
        </Grid>
      </Grid>
    </Container>
  );
}