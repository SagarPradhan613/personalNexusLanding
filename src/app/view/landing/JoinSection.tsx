import { Box, Container, Grid } from '@mui/material'
import ButtonWithIcon from '@/app/components/utility-components/buttons/ButtonWithIcon'
import IconButton from '@/app/components/utility-components/buttons/IconButton'
import ContainerBox from '@/app/components/utility-components/container/Container'
import Flex from '@/app/components/utility-components/flex/Flex'
import Text from '@/app/components/utility-components/text/Text'
import { DEFAULT_COLORS } from '@/app/utils/colors'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Image from '@/app/components/utility-components/image/Image'
import { IMAGE_COLLECTIONS } from '@/app/utils/images'
import JoinCard from '@/app/components/page-components/cards/JoinCard'
import useIntersectionAnimation from '@/app/hooks/useIntersectionAnimation'
import LeftShadow from '@/app/components/page-components/LeftShadow'
import useIsMobile from '@/app/hooks/useIsMobile'
import Gif from '../../../assets/images/join-gif1crop.gif'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface TargetProps {
    scrollToTarget: () => void;
}



const JoinSection = ({ scrollToTarget }: TargetProps) => {
    const boxRef = useIntersectionAnimation();
    const isMobile = useIsMobile()
    return (
        <Box mx="10px" my="2rem" ref={boxRef} position="relative" >
            <Box position="absolute" left="0px" top="0px">
                <LeftShadow />
            </Box>
            <ContainerBox background={DEFAULT_COLORS.Dark_Light} style={{ height: isMobile ? "100%" : "95vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid item lg={4} sm={4} xs={12}>
                            <Box m={{ xs: '1rem', sm: '4rem' }} display={'flex'} justifyContent={'center'} alignItems={{ xs: 'center', sm: 'start' }} flexDirection={'column'}>
                                <Flex gap="10px" justifyContent='start' style={{ marginBottom: '1rem' }}>
                                    <Text textAlign='start' fontSize={isMobile ? '40px' : '55px'} lineBrake>How to</Text>
                                    <Text textAlign='start' fontSize={isMobile ? '40px' : '55px'} isGradient>Join?</Text>
                                </Flex>
                                <Text textAlign={isMobile ? 'center' : 'start'} fontSize='16px' maxWidth='250px' lineHeight='19px' color={DEFAULT_COLORS.Light}>Within a few clicks you can become a part of Nexus, we’ve made the joining process as easy as it can be.</Text>
                                <Box mt="3rem">
                                    <ButtonWithIcon icon={<IconButton background={DEFAULT_COLORS.Blue} color={DEFAULT_COLORS.White}><ArrowForwardIcon sx={{ color: DEFAULT_COLORS.White }} /></IconButton>} background={DEFAULT_COLORS.White} color={DEFAULT_COLORS.black} onClick={() => scrollToTarget()}>Join Now</ButtonWithIcon>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={8} sm={8} xs={12}>
                            <Box m={{ xs: '0rem', sm: '4rem' }}>
                                <Image src={IMAGE_COLLECTIONS.JoinSection} width='100%' />
                            </Box>
                        </Grid>
                    </Grid>
                    <Box mb="4rem">
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}>
                            <JoinCard image={IMAGE_COLLECTIONS.JoinMini1} hoverImage={IMAGE_COLLECTIONS.JoinGif1} title='Sign up' description='Sign up with socials or manually' />
                            <JoinCard image={IMAGE_COLLECTIONS.JoinMini2} hoverImage={IMAGE_COLLECTIONS.JoinMiniGif2} title='Fill Details' description='Fill in your profile details' />
                            <JoinCard image={IMAGE_COLLECTIONS.JoinMini3} hoverImage={IMAGE_COLLECTIONS.JoinMiniGif3} title='Confirm' description='Confirm your email' />
                            <JoinCard image={IMAGE_COLLECTIONS.JoinMini4} hoverImage={IMAGE_COLLECTIONS.JoinMiniGif4} title='Done!' description="Congratulations, it's done!" />
                        </Box>

                    </Box>
                </Container>
            </ContainerBox>
        </Box>
    )
}

export default JoinSection
