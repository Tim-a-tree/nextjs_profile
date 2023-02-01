import { motion }  from 'framer-motion';
import {chakra, shouldForwardProp} from '@chakra-ui/system';

const AboutMeMotion = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop);
  }
})

const AboutMe = ({children, delay=0}) => {
    return (
        <AboutMeMotion
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        >
            {children}
        </AboutMeMotion>
    )
}

export default AboutMe;
    