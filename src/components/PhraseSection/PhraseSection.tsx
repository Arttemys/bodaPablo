import { Box, Grid2 as Grid } from "@mui/material"
import { CustomTypography } from "../CustomTypography/CustomTypography"

import { useState } from "react";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import styles from '@/components/PlaceSection/PlaceSection.module.css'
import Link from "next/link";


interface sections {
  title: string,
  value: string,
  src: string,
  url?: string,
  cbu?: string,
  alias?: string,
  text: string
}

export const PhraseSection = () => {

  const sections: { [key: string]: sections } = {
    DRESS_CODE: {
      title: 'Dress Code',
      value: 'dress_code',
      url: 'https://www.instagram.com/williamsfutbol5yeventos?igsh=MXA3ajR0bmtoNG92cA==',
      src: '/party.gif',
      text: `Además, les compartimos la dirección del salón: Gral. Bartolomé Mitre 2102, Funes, Santa Fe. 
            Nos encantaría contar con su presencia y agradecemos profundamente su apoyo y amor.
            ¡Nos vemos en nuestro gran día!`
    },
    GIFT: {
      title: 'Regalo',
      value: 'gift',
      src: '/gift.gif',
      cbu: '0000003100083745283862',
      alias: 'boda.candepablo (mercado pago)',
      text: 'En lugar de regalos tradicionales, si lo desean, pueden ayudarnos con la luna de miel.'
    }
  }

  return <Grid sx={{ height: 'auto', backgroundColor: 'white' }}>
    <Grid size={12}>
      <div className={styles.hDivider}>
        <div className={styles.shadow}></div>
      </div>
    </Grid>
    <Grid container spacing={5} size={12} py={5} px={isMobile ? 2 : 16} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid size={12}>
        <CustomTypography variant={isMobile ? 'h5' : 'h4'} color="primary" fontWeight={300} letterSpacing={2} align="center" label="¿Dudas?" />
        <CustomTypography variant={isMobile ? 'h5' : 'h4'} color="primary" fontWeight={400} letterSpacing={2} align="center" label="Te contamos todos los detalles" mt={1} fontFamily={'kalam'} />
      </Grid>

      {Object.values(sections).map((section) => {
        return (
          <Grid key={section.title} size={isMobile ? 12 : 4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center', mt: isMobile ? 2 : 0 }}>
              <Image
                alt="wedding-dress"
                src={section.src}
                width={80}
                height={80}
              />
              <CustomTypography variant={isMobile ? 'h6' : 'h5'} color="primary" fontWeight={isMobile ? 400 : 300} align="center" label={section.text} />
              {section.cbu && <CustomTypography variant="h6" color="primary" fontWeight={700} label={`CBU: ${section.cbu}`} mt={1} />}
              {section.alias && <CustomTypography variant="h6" color="primary" fontWeight={700} label={`Alias: ${section.alias}`} />}
              {section.url && <Link href={section.url} target="_blank"><CustomTypography variant="h6" color="primary" sx={{ textDecoration: 'underline' }} fontWeight={700} label='Salon Williams' mt={1} /></Link>}
            </Box>
          </Grid>
        )
      })}

      <Grid size={isMobile ? 12 : 4} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', mt: isMobile ? 2 : 0 }}>
          <Image
            alt="camera-gif"
            src='/camera.gif'
            width={70}
            height={70}
          />
          <CustomTypography variant={isMobile ? 'h6' : 'h5'} color="primary" fontWeight={isMobile ? 400 : 300} align="center" label="Ayuda a que crezcan nuestros recuerdos. Publica tus fotos en redes sociales el dia de la boda con nuestro hashtag #BodaCyP" />
        </Box>
      </Grid>
    </Grid>
  </Grid >
}