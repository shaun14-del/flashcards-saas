import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Head from "next/head";
import { Container, AppBar, Toolbar, Typography, Button, Box, Grid} from "@mui/material";

export default function Home() {
  return (

    <Container maxWidth="100vw">
      <Head>
        <title> Flashcard SaaS </title>
        <meta name="description" content="Create flashcards from your text" />
      </Head>

      <AppBar position = 'static'>
        <Toolbar>
          <Typography variant="h6" style = {{ flexGrow: 1 }}>
            Flashcard SaaS
            </Typography>
          <SignedOut>
            <Button color="inherit" href='/sign-in'> Login </Button>
            <Button color="inherit" href='/sign-up'> Sign Up </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx = {{textAlign: 'center', my: 4,}}> 
        <Typography variant="h2" gutterBottom> Welcome to Flashcard SaaS </Typography>
        <Typography variant="h5" gutterBottom> {' '} The easiest way to make flashcards from your text </Typography>
        <br></br>
        <Button variant="contained" color="primary">  Get Started </Button>
      </Box>
      <Box sx={{my:6, textAlign: 'center'}}>
        <Typography variant="h4" gutterBottom>Features</Typography>
        <Grid container spacing = {4}> 
          <Grid item xs={12} md={4}>
          <Box sx={{
              p: 3, 
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
              
            }}>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography variant="h6">Simply input your text and let our software do the rest. Creating flashcards has never been easier</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
          <Box sx={{
              p: 3, 
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
              
            }}>
            <Typography variant="h6" gutterBottom>Smart Flashcards</Typography>
            <Typography variant="h6">Our AI model intelligently breaks down your text into concise flashcards, making it perfect for studying</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
          <Box sx={{
              p: 3, 
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
              
            }}>
            <Typography variant="h6" gutterBottom> Accessible Anywhere </Typography>
            <Typography variant="h6">Access your flashcards from any device, at any time. Study on the go with ease </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{my:6, textAlign: 'center'}}>
        <Typography variant="h4" gutterBottom>Pricing</Typography>
        <Grid container spacing = {4}> 
          <Grid item xs={12} md={4}>
            <Box sx={{
              p: 3, 
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
              
            }}>
            <Typography variant="h5">Basic</Typography>
            <Typography variant="h6"> $5 / month</Typography>
            <Typography>Access to basic flashcard features and limited storage while online with no offline access</Typography>
            <Button variant="contained" color="primary" sx={{mt: 2}}>Choose Basic</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
          <Box sx={{
              p: 3, 
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
              
            }}>
            <Typography variant="h5">Pro</Typography>
            <Typography variant="h6">$10 / month</Typography>
            <Typography>Access to unlimited flashcards and storage with priority customer support</Typography>
            <Button variant="contained" color="primary" sx={{mt: 2}}>Choose Pro</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
          <Box sx={{
              p: 3, 
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
              
            }}>
            <Typography variant="h5">Platinum</Typography>
            <Typography variant="h6">$20 / month</Typography>
            <Typography>Unlimited access to all features, priority customer support, downloadable media and more</Typography>
            <Button variant="contained" color="primary" sx={{mt: 2}}>Choose Platinum</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>

  )
}
