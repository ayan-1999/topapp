import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
// import SpaIcon from '@mui/icons-material/Spa';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import WashIcon from '@mui/icons-material/Wash';
// import PublicIcon from '@mui/icons-material/Public';
// import EcoIcon from '@mui/icons-material/Eco';
// import OpacityIcon from '@mui/icons-material/Opacity';
// import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
// import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { Image } from "../assets/ImageLinks";

const WithUs = () => {
  return (
    <Box sx={{ backgroundColor: '#f2f7f8', pt: 8, pb: 10, px: 12.5, overflow: 'hidden' }}>
      <Container maxWidth="lg">
        {/* TOP SECTION: WITH US */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 12 }}>
          {/* Image Collage Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative', height: { xs: 400, md: 500 }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* As we don't have the exact image assets, placeholders with colored boxes are used. 
                    You can replace the src attributes with your actual images. */}
              
              <Box
                component="img"
                src={Image.withUs}
                alt="Radiant Skin"
                
              />              
            </Box>
          </Grid>

          {/* Text Content Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ pl: { md: 4 } }}>
              <Typography variant="subtitle2" sx={{ color: '#349381', fontWeight: 700, letterSpacing: 1.5, mb: 1 }}>
                WITH US
              </Typography>
              <Typography variant="h3" sx={{ color: '#222', fontWeight: 600, mb: 3, lineHeight: 1.2 }}>
                Be Radiant, Be <br />
                Confident, Be Fearless
              </Typography>
              <Typography variant="body1" sx={{ color: '#687b78', mb: 4, lineHeight: 1.8 }}>
                Radiate confidence with our meticulously crafted products.
                Immerse yourself in a holistic approach to wellness, discovering
                the beauty of balance and nourishment, curated for your well-being.
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#349381',
                  color: '#349381',
                  borderRadius: '30px',
                  px: 4,
                  py: 1,
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#349381',
                    color: '#fff',
                    borderColor: '#349381'
                  }
                }}
              >
                Shop Now
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* BOTTOM SECTION: HIGHLIGHTS */}
        <Box sx={{ mt: 10 }}>
          <Typography variant="subtitle2" sx={{ color: '#349381', fontWeight: 700, letterSpacing: 1.5, mb: 1 }}>
            HIGHLIGHTS
          </Typography>
          <Typography variant="h4" sx={{ color: '#222', fontWeight: 600, mb: 6 }}>
            What Sets Us Apart
          </Typography>

          <Grid container spacing={4}>
            {/* Feature 1 */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box>
                <Paper elevation={0} sx={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2, mb: 2 }}>
                   {/* <SpaIcon sx={{ color: '#349381' }} /> */}
                </Paper>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', mb: 1, fontSize: '1.1rem' }}>
                  Natures Touch
                </Typography>
                <Typography variant="body2" sx={{ color: '#687b78', lineHeight: 1.6 }}>
                  Harnessing the power of Dead Sea elements for scalp repair and dandruff removal.
                </Typography>
              </Box>
            </Grid>

            {/* Feature 2 */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box>
                <Paper elevation={0} sx={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2, mb: 2 }}>
                   {/* <AutoAwesomeIcon sx={{ color: '#349381' }} /> */}
                </Paper>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', mb: 1, fontSize: '1.1rem' }}>
                  Timeless Beauty
                </Typography>
                <Typography variant="body2" sx={{ color: '#687b78', lineHeight: 1.6 }}>
                  Infused with anti-aging elements for a radiant and youthful complexion.
                </Typography>
              </Box>
            </Grid>

            {/* Feature 3 */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box>
                <Paper elevation={0} sx={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2, mb: 2 }}>
                   {/* <WashIcon sx={{ color: '#349381' }} /> */}
                </Paper>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', mb: 1, fontSize: '1.1rem' }}>
                  Purity in Every Drop
                </Typography>
                <Typography variant="body2" sx={{ color: '#687b78', lineHeight: 1.6 }}>
                  Crafted with 5-stage purified aqua minerals for unparalleled skincare.
                </Typography>
              </Box>
            </Grid>

             {/* Feature 4 */}
             <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box>
                <Paper elevation={0} sx={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2, mb: 2 }}>
                   {/* <PublicIcon sx={{ color: '#349381' }} /> */}
                </Paper>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', mb: 1, fontSize: '1.1rem' }}>
                  Global Excellence
                </Typography>
                <Typography variant="body2" sx={{ color: '#687b78', lineHeight: 1.6 }}>
                  Manufactured in a globally certified plant, ensuring quality and authenticity.
                </Typography>
              </Box>
            </Grid>

            {/* Feature 5 */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box>
                <Paper elevation={0} sx={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2, mb: 2 }}>
                   {/* <EcoIcon sx={{ color: '#349381' }} /> */}
                </Paper>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', mb: 1, fontSize: '1.1rem' }}>
                  Toxin-Free Assurance
                </Typography>
                <Typography variant="body2" sx={{ color: '#687b78', lineHeight: 1.6 }}>
                  Non-toxic formulations for a clean and healthy skincare routine.
                </Typography>
              </Box>
            </Grid>

            {/* Feature 6 */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box>
                <Paper elevation={0} sx={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2, mb: 2 }}>
                   {/* <OpacityIcon sx={{ color: '#349381' }} /> */}
                </Paper>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', mb: 1, fontSize: '1.1rem' }}>
                  Deep Hydration
                </Typography>
                <Typography variant="body2" sx={{ color: '#687b78', lineHeight: 1.6 }}>
                  Providing intense moisturization for supple and nourished skin.
                </Typography>
              </Box>
            </Grid>

            {/* Feature 7 */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box>
                <Paper elevation={0} sx={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2, mb: 2 }}>
                   {/* <LocalFireDepartmentIcon sx={{ color: '#349381' }} /> */}
                </Paper>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', mb: 1, fontSize: '1.1rem' }}>
                  Antioxidant Boost
                </Typography>
                <Typography variant="body2" sx={{ color: '#687b78', lineHeight: 1.6 }}>
                  Enriched with antioxidants to combat free radicals and promote skin health.
                </Typography>
              </Box>
            </Grid>
            
            {/* Feature 8 */}
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box>
                <Paper elevation={0} sx={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 2, mb: 2 }}>
                   {/* <HealthAndSafetyIcon sx={{ color: '#349381' }} /> */}
                </Paper>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', mb: 1, fontSize: '1.1rem' }}>
                  Gray No More
                </Typography>
                <Typography variant="body2" sx={{ color: '#687b78', lineHeight: 1.6 }}>
                  Effectively controls premature graying, promoting vibrant and natural hair color.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default WithUs;
