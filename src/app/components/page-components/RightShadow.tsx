import useIsMobile from '@/app/hooks/useIsMobile'
import Image from '../utility-components/image/Image'
import { IMAGE_COLLECTIONS } from '@/app/utils/images'

const RightShadow = () => {
  const isMobile = useIsMobile()
  return (
    <>
    {
      !isMobile && <Image src={IMAGE_COLLECTIONS.RightShadow} width='600px'  />
    }
    </>
   
  )
}

export default RightShadow
