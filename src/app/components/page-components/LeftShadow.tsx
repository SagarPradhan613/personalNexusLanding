import useIsMobile from '@/app/hooks/useIsMobile'
import Image from '../utility-components/image/Image'
import { IMAGE_COLLECTIONS } from '@/app/utils/images'

const LeftShadow = () => {
    const isMobile = useIsMobile()
    return (
        <Image src={IMAGE_COLLECTIONS.LeftShadow} width={isMobile ? '100px' : '600px'} />
    )
}

export default LeftShadow
