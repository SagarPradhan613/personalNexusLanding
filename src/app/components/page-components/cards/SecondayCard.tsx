
import { Grid } from '@mui/material'
import Container from '../../utility-components/container/Container'
import { DEFAULT_COLORS } from '@/app/utils/colors'
import Image from '../../utility-components/image/Image'
import Button from '../../utility-components/buttons/Button'
import Text from '../../utility-components/text/Text'
import Flex from '../../utility-components/flex/Flex'

interface ImageProps {
    image: string
    description: string
}

const SecondayCard = ({ image, description }: ImageProps) => {

    return (
        <Container background={DEFAULT_COLORS.Dark_Light} width='100%' maxWidth='350px' borderRadius='25px' >
            <Grid container>
                <Grid item lg={4} sm={4} xs={4}>
                    <Button background={DEFAULT_COLORS.Blue} borderRadius='15px' padding='2rem 1.3rem' >
                        <Image src={image} width='40px' />
                    </Button>
                </Grid>
                <Grid item lg={8} sm={8} xs={8}>
                    <Flex style={{width:'100%', height:'100%'}}>
                    <Text fontSize='20px' lineHeight='25px'>{description}</Text>
                    </Flex>
                </Grid>
            </Grid>
        </Container>
    )
}

export default SecondayCard
