import { ComponentProps } from '../../../utils/types';
import { DEFAULT_COLORS } from '../../../utils/colors';

const white: string = DEFAULT_COLORS.White

const ButtonWithIcon = ({ background = DEFAULT_COLORS.black, children, color = white, padding = ".8rem 4rem .8rem 1.2rem" , borderRadius = "25px", fullWidth = false, icon,onClick }: ComponentProps) => {
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
            border: 'none',
            color: color,
            position: 'relative',
            fontFamily:'SEN medium',
            whiteSpace: 'nowrap',
            fontSize:'18px',
            zIndex:1000,
            cursor: 'pointer'
        }} className="hover-scale btn btn-white btn-animate" onClick={onClick}>
            {children}
            <div style={{ position: 'absolute', right: '5px', top: 'auto', bottom: 'auto' }}>
                {icon}
            </div>
        </button>
    );
};

export default ButtonWithIcon;
