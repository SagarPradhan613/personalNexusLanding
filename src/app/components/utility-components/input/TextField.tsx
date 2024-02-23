import { ComponentProps } from '../../../utils/types';
import { DEFAULT_COLORS } from '../../../utils/colors';

const Light: string = DEFAULT_COLORS.Light

const TextField = ({ background = DEFAULT_COLORS.black, padding = ".8rem 1.2rem", borderRadius = "30px", fullWidth = false, border, borderColor, placeholder, onChangeText, value }: ComponentProps) => {
    return (
        <textarea style={{
            background: background,
            padding: padding,
            borderRadius: borderRadius,
            width: fullWidth ? '90%' : 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            border: border ? `1px solid ${borderColor}` : 'none',
            color: Light,
            position: 'relative',
            resize: 'none',
            fontFamily: "SEN medium"
        }} className="input-outline-remove" placeholder={placeholder} rows={6} onChange={onChangeText} value={value} />

    );
};

export default TextField;
