import { Box } from '@mui/material'
import { ComponentProps } from '../../../utils/types'


const Flex = ({ className, alignItems = "center", justifyContent = "center", children, style, flexDirection = "row", gap = "1rem", }: ComponentProps) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent,
            alignItems,
            gap,
            flexDirection,
        }} style={style} className={className}>
            {children}
        </Box>
    )
}

export default Flex