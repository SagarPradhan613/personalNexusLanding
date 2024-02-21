import { ComponentProps } from '../../../utils/types';
import { DEFAULT_COLORS } from '../../../utils/colors';

const white: string = DEFAULT_COLORS.White;

const Button = ({ background = DEFAULT_COLORS.black, children, color = white, padding = ".8rem 1.2rem", borderRadius = "30px", fullWidth = false,  border, borderColor,onClick }: ComponentProps) => {
    return (
        <button style={{
            background: background,
            padding: padding,
            borderRadius: borderRadius,
            width: fullWidth ? '100%' : 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            border: border ? `1px solid ${borderColor}` : 'none',
            color: color, // Assign color directly
            position: 'relative',
            cursor: 'pointer',
            fontFamily:'SEN medium',
            whiteSpace: 'nowrap',
            zIndex:1000
        }} className={`hover-scale btn btn-white btn-animate` } onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
