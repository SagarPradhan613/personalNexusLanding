import { ComponentProps } from '../../../utils/types';
import { DEFAULT_COLORS } from '../../../utils/colors';


const IconButton = ({ background = DEFAULT_COLORS.black, children, color, borderRadius = "50%", icon }: ComponentProps) => {
    return (
        <button style={{
            background: background,
            borderRadius: borderRadius,
            width: '35px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            border: 'none',
            color: color,
            position: 'relative',
            height: '35px',
            fontFamily: 'SEN medium',
            whiteSpace: 'nowrap',
            zIndex: 1000
        }} className="hover-scale btn btn-white btn-animate">
            {children}
            <div style={{ position: 'absolute', right: '5px', top: 'auto', bottom: 'auto' }}>
                {icon}
            </div>
        </button>
    );
};

export default IconButton;
