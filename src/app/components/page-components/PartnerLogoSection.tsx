import { Box } from '@mui/material'
import Flex from '../utility-components/flex/Flex'
import Image from '../utility-components/image/Image'
import { IMAGE_COLLECTIONS } from '@/app/utils/images'
import useIsMobile from '@/app/hooks/useIsMobile'

const PartnerLogoSection = () => {
  const isMobile = useIsMobile()
  return (
    <Box mt="3rem">
      <Flex flexDirection="column" gap="3rem">
        <Flex gap="2rem">
          <Image src={IMAGE_COLLECTIONS.partner1} width={isMobile ? '100px' : '200px'} />
          <Image src={IMAGE_COLLECTIONS.partner2} width={isMobile ? '100px' : '200px'} />
        </Flex>
        <Flex gap="4rem">
          <Image src={IMAGE_COLLECTIONS.partner3} width={isMobile ? '50px' : '70px'} />
          <Image src={IMAGE_COLLECTIONS.partner4} width={isMobile ? '30px' : '40px'} />
          <Image src={IMAGE_COLLECTIONS.partner5} width={isMobile ? '30px' : '40px'} />
        </Flex>
      </Flex>
    </Box>
  )
}

export default PartnerLogoSection
