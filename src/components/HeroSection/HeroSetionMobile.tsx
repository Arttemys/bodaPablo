import { Grid2 as Grid } from "@mui/material";
import Image from "next/image";
import { CustomTypography } from "../CustomTypography/CustomTypography";
import Portada from '../../../public/portada.jpeg'
import Logo from '../../../public/logo.png'

export const HeroSetionMobile = () => {

  return <>
    <Grid container sx={{ height: '100dvh', maxHeight: '100dvh', justifyContent: 'center', alignItems: 'center' }}>
      <Image
        alt="hero-banner"
        src={Portada}
        style={{
          width: '100dvw',
          height: '100dvh',
          maxHeight: '100dvh',
          position: 'absolute',
          zIndex: -1,
          objectFit: 'cover'
        }}
      />
      <Grid>
        <Image
          alt="logo"
          src={Logo}
          style={{
            width: '150%',
            height: 'auto',
            marginLeft: '-25%',
            marginTop: '-100%'
          }}
        />
      </Grid>

      <Grid size={6} sx={{ backgroundColor: "primary.light", width: '100%', padding: 3, position: 'absolute', bottom: 0 }}>
        <CustomTypography variant="body2" color="primary" fontWeight={700} align="center"
          label="Por eso el hombre dejará a su padre y a su madre para unirse a su mujer, y los dos no serán sino una  sola carne. (Mt 19, 5)" />
      </Grid>
    </Grid >
  </>
}