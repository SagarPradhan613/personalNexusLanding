import { IMAGE_COLLECTIONS } from "@/app/utils/images"
import Button from "../utility-components/buttons/Button"
import Flex from "../utility-components/flex/Flex"
import Image from "../utility-components/image/Image"


const Header = () => {
  return (
    <Flex style={{ padding: '1rem', position: 'absolute', top: '0px', left: '0px', right: '0px', zIndex: '100' }}>
      <Button>
        <Image src={IMAGE_COLLECTIONS.NexusIcon} width="100px" />
      </Button>

    </Flex>
  )
}

export default Header
