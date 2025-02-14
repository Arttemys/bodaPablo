import { Button, Grid2 as Grid, Typography } from "@mui/material"
import Image from "next/image"
import { CustomTypography } from "../CustomTypography/CustomTypography"
import { isMobile } from "react-device-detect";



export const ConfirmSection = () => {
  return (
    <Grid container size={12} py={3} spacing={2} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', backgroundColor: 'primary.light' }}>
      <Image
        alt="check-gif"
        src='/list.png'
        width={isMobile ? 75 : 75}
        height={isMobile ? 75 : 75}
      />
      <CustomTypography variant="h5" color="primary.main" letterSpacing={1} align="center" label="CONFIRMACION DE ASISTENCIA" />
      <CustomTypography variant="h5" color="primary.main" letterSpacing={1} fontFamily={'kalam'} align="center" fontStyle={"italic"} label="Esperamos que puedas acompañarnos en este momento tan especial!" />
      <CustomTypography variant="h6" color="primary.main" letterSpacing={1} sx={{ width: isMobile ? '80%' : '40%', textAlign: 'center' }} label="Te pedimos que completes este formulario antes del 1 de mayo de 2025. Si fuiste invitado/a con un acompañante" />
      <CustomTypography variant={isMobile ? 'h6' : 'h5'} color="primary.main" letterSpacing={1} align="center" sx={{ textDecoration: 'underline' }} label="completar un formulario por persona" />

      <Grid size={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          target="_blank"
          href={'https://docs.google.com/forms/u/0/d/1PJd6ewR2oaz-Tj00kTdw_Q01WcFqM5nl4UpC86lp5Wc/edit?hl=ES'}
          sx={{ mt: 2, borderRadius: 12, px: 3 }}>
          <Typography variant={isMobile ? 'subtitle1' : 'h6'} align="center" letterSpacing={2}>
            CONFIRMAR ASISTENCIA
          </Typography>
        </Button>
      </Grid>
    </Grid>
  )
}