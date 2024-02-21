import Container from '../utility-components/container/Container'
import { DEFAULT_COLORS } from '@/app/utils/colors'
import Flex from '../utility-components/flex/Flex'
import Input from '../utility-components/input/Input'
import TextField from '../utility-components/input/TextField'
import ButtonWithIcon from '../utility-components/buttons/ButtonWithIcon'
import IconButton from '../utility-components/buttons/IconButton'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from '@mui/material'
import Text from '../utility-components/text/Text'

const ContactForm = () => {
    return (
        <Container background={DEFAULT_COLORS.White} fullWidth maxWidth='400px' borderRadius='30px' padding='1.5rem' >
            <Flex flexDirection="column">
               <Text color={DEFAULT_COLORS.black} fontSize='24px' lineHeight='35px'>Contact Us</Text>
                <Input background={DEFAULT_COLORS.White} border borderColor={DEFAULT_COLORS.Light} fullWidth borderRadius='17px' placeholder='Enter Name' color={DEFAULT_COLORS.Light} />
                <Input background={DEFAULT_COLORS.White} border borderColor={DEFAULT_COLORS.Light} fullWidth borderRadius='17px' placeholder='Enter Email' />
                <TextField background={DEFAULT_COLORS.White} border borderColor={DEFAULT_COLORS.Light} fullWidth borderRadius='17px' placeholder='Message' />
                <Box mt="1rem" mb="2rem" width="100%">

                <ButtonWithIcon fullWidth background={DEFAULT_COLORS.Blue} icon={<IconButton background={DEFAULT_COLORS.White} color={DEFAULT_COLORS.Blue}><ArrowForwardIcon /></IconButton>}>Get Started</ButtonWithIcon>
                </Box>
            </Flex>
        </Container>
    )
}

export default ContactForm
