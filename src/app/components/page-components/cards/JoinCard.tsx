import { RefObject, useState } from 'react'; // Import RefObject
import Container from '../../utility-components/container/Container';
import Flex from '../../utility-components/flex/Flex';
import Text from '../../utility-components/text/Text';
import { Box } from '@mui/material';
import { DEFAULT_COLORS } from '@/app/utils/colors';
import IconButton from '../../utility-components/buttons/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useIntersectionAnimation from '@/app/hooks/useIntersectionAnimation';
import useIsTab from '@/app/hooks/useIsTab';

interface JoinCardProps {
    image: string;
    hoverImage: string;
    title: string;
    description: string;
}

const JoinCard = ({ image, hoverImage, title, description }: JoinCardProps) => {
    const boxRef = useIntersectionAnimation() as RefObject<HTMLDivElement>;

    const [hovered, setHovered] = useState(false)
    const isTab = useIsTab()

    const onMouse = () => {

        setHovered(true)
    }
    const offMouse = () => {

        setHovered(false)

    }
    return (

        <Container borderRadius='30px' padding='1rem 1.5rem' ref={boxRef} onMouseOver={onMouse} onMouseLeave={offMouse} height={'4.5rem'} fullWidth maxWidth="280px" style={{ margin: '5px' }}>
            <Flex justifyContent='space-between'>
                <Flex>
                    <Box width="60px" height="60px" position="relative">
                        <img src={image} width='50px' loading='eager' style={{ opacity: hovered ? '0' : '1', position: 'absolute', left: '0px', top: '0px', marginTop: '.5rem' }} />
                        <img src={hoverImage} width='50px' loading='eager' style={{ opacity: hovered ? '1' : '0', position: 'absolute', left: '0px', top: '0px', marginTop: '.5rem' }} />
                    </Box>
                    <Box height="50px">
                        <Text lineHeight='24px' >{title}</Text>
                        <Text fontSize={isTab ? '12px' : '14px'} color={DEFAULT_COLORS.Light} lineHeight='20px'>{description}</Text>
                    </Box>
                </Flex>
                <Box mt="10px">
                    <IconButton icon={<ArrowForwardIcon sx={{ color: DEFAULT_COLORS.White }} />} background={DEFAULT_COLORS.Blue} color={DEFAULT_COLORS.White} />
                </Box>
            </Flex>

        </Container>

    )
}

export default JoinCard;
