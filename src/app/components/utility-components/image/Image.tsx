import { ComponentProps } from '@/app/utils/types'

const Image = ({ref, src, width = "100px",style,  }: ComponentProps) => {
    return (
        <img src={src} width={width} alt='image' loading='lazy' style={style} ref={ref} />
    )
}

export default Image
