import { Grid2 as Grid, Typography } from "@mui/material"
import Image from "next/image"
import styles from './PlaceSection.module.css'
import { isMobile } from "react-device-detect";


export const PlaceSection = () => {
  return <Grid container spacing={2} sx={{ justifyContent: 'center', mb: 5, backgroundColor: 'white' }}>
    <Grid size={12}>
      <div className={styles.hDivider}>
        <div className={styles.shadow}></div>
      </div>
    </Grid>
    <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Image
        alt="wedding-gift"
        src='/wedding.gif'
        width={100}
        height={100}
      />
    </Grid>
    <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant={isMobile ? 'h4' : 'h2'}>Fiesta</Typography>
    </Grid>
    <Grid size={isMobile ? 8 : 6} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant={isMobile ? 'body1' : 'h5'} letterSpacing={2} align="center">
        Con mucha ilusión, les invitamos a compartir con nosotros este día tan especial.
        La ceremonia será el 24 de mayo en la <span style={{ fontWeight: 'bold' }}>Parroquia Nuestra Señora del Carmen, Funes</span>. La <span style={{ fontWeight: 'bold' }}>Santa Misa</span> iniciará a las 10:30hs, por lo cual, los esperamos a las <span style={{ fontWeight: 'bold' }}>10:00hs.</span>
        Les pedimos, por favor, que sean puntuales y que, por respeto a la celebración, la vestimenta sea elegante y modesta.
      </Typography>
    </Grid>
  </Grid>
}