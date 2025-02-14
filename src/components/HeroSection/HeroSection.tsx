import { Grid2 as Grid } from "@mui/material";
import Image from "next/image";
import { HeroImage } from "./HeroImage/HeroImage";
import { CustomTypography } from "../CustomTypography/CustomTypography";

export const HeroSection = () => {
  const fotos = [
    {
      src: '/foto1.jpeg',
      alt: 'ring',
      delay: 2
    },
    {
      src: '/foto2.jpeg',
      alt: 'salon',
      delay: 3
    },
    {
      src: '/foto3.jpeg',
      alt: 'formal',
      delay: 4
    },
  ]
  return <>
    <Grid container sx={{ height: '100dvh', justifyContent: 'center', alignItems: 'center' }}>
      <Image
        alt="hero-banner"
        src='/Banner.png'
        fill={true}
        style={{
          position: 'absolute',
          top: 0,
          zIndex: -1
        }}
      />
      <Grid>
        <Image
          alt="logo"
          src={'/logo.png'}
          width={500}
          height={500}
          style={{
            position: 'absolute',
            top: '-120px',
            zIndex: 1,
            right: '35%'
          }}
        />
      </Grid>
      <Grid container spacing={4}>
        {fotos.map((foto, index) => (<HeroImage key={index} alt={foto.alt} src={foto.src} delay={foto.delay} />))}
      </Grid>
      <Grid size={6} sx={{ position: 'absolute', bottom: 48 }}>
        <CustomTypography variant="h6" color="primary" fontWeight={700} align="center"
          label="Por eso el hombre dejará a su padre y a su madre para unirse a su mujer, y los dos no serán sino una  sola carne. (Mt 19, 5)" />
      </Grid>
    </Grid >
  </>
}