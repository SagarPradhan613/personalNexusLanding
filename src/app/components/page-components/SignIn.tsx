import { Box } from '@mui/material'
import { DEFAULT_COLORS } from '@/app/utils/colors'
import Text from '../utility-components/text/Text'
import Button from '../utility-components/buttons/Button'
import GoogleIcon from '@mui/icons-material/Google';
import Flex from '../utility-components/flex/Flex';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import Input from '../utility-components/input/Input';
import ButtonWithIcon from '../utility-components/buttons/ButtonWithIcon';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '../utility-components/buttons/IconButton';

const SignIn = () => {
    return (
        <Box sx={{
            backgroundColor: DEFAULT_COLORS.White,
            color: DEFAULT_COLORS.black,
            width: '100%',
            maxWidth: '400px',
            padding: '2rem',
            borderRadius: '25px',
            margin: '10px',
            marginTop: {
                xs: '1rem', sm: "4rem"
            }
        }}>
            <Text color={DEFAULT_COLORS.black} fontFamily='SEN Bold' fontSize='30px' textAlign="center">Sign up</Text>
            <Box mb="2rem">

            <Text color={DEFAULT_COLORS.Light} fontSize='15px' textAlign='center' lineHeight='20px'>Your Nexus experience is one click away</Text>
            </Box>
            <Button fullWidth background={DEFAULT_COLORS.Blue}><GoogleIcon /> Continue with Google</Button>
            <Flex style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                <Button fullWidth background={DEFAULT_COLORS.Blue}><XIcon /></Button>
                <Button fullWidth background={DEFAULT_COLORS.Blue}><FacebookIcon /></Button>
                <Button fullWidth background={DEFAULT_COLORS.Blue}><GitHubIcon /></Button>
            </Flex>
            <Button fullWidth background={DEFAULT_COLORS.White} color={DEFAULT_COLORS.Blue} border borderColor={DEFAULT_COLORS.Light}>Explore More Login Options</Button>
            <Text color={DEFAULT_COLORS.Light} fontSize='13px' textAlign='center'>We do not store any personal information</Text>
            <Box mt="2rem">

            <Input background={DEFAULT_COLORS.White} border borderColor={DEFAULT_COLORS.Light} color={DEFAULT_COLORS.Light} fullWidth placeholder='Enter Your Email' />
            </Box>
            <Box mt={'2rem'}>

                <ButtonWithIcon icon={<IconButton background={DEFAULT_COLORS.White} color={DEFAULT_COLORS.Blue}> <ArrowForwardIcon sx={{color:DEFAULT_COLORS.Blue}} /></IconButton>} fullWidth background={DEFAULT_COLORS.Blue} >Continue </ButtonWithIcon>
            </Box>
        </Box >

    )
}

export default SignIn
