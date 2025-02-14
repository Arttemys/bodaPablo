import styles from './CountDownSection.module.css'
import { CustomTypography } from "../CustomTypography/CustomTypography"
import { isMobile } from "react-device-detect";


export const TimerHeader = () => {
  return <div className={styles.timerHeader}>
    <CustomTypography
      variant={isMobile ? 'h5' : 'h4'}
      label="24 de mayo de 2025"
      color="white"
      letterSpacing={2}
    />
    <CustomTypography
      variant={isMobile ? 'h5' : 'h4'}
      label="¡Nos casamos!"
      color="white"
      fontStyle={"italic"}
      mb={3}
      fontFamily={'kalam'}
      align='center'
    />
    <CustomTypography
      variant={isMobile ? 'h5' : 'h4'}
      label="¡Los invitamos a celebrar nuestro matrimonio!"
      color="white"
      align='center'
    />
    <CustomTypography
      variant={isMobile ? 'h5' : 'h4'}
      label="Faltan..."
      color="white"
      letterSpacing={2}
    />
  </div>
}