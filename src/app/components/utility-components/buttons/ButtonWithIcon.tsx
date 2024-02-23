import { ComponentProps } from '../../../utils/types';
import { DEFAULT_COLORS } from '../../../utils/colors';
import { useState } from 'react';

const white: string = DEFAULT_COLORS.White

const ButtonWithIcon = ({ background = DEFAULT_COLORS.black, children, color = white, padding = ".8rem 4rem .8rem 1.2rem", borderRadius = "25px", fullWidth = false, icon, onClick, type = "button" }: ComponentProps) => {

    return (
        <button style={{
            padding: padding,
            borderRadius: borderRadius,
            width: fullWidth ? '100%' : 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            border: 'none',
            position: 'relative',
            fontFamily: 'SEN medium',
            whiteSpace: 'nowrap',
            fontSize: '18px',
            zIndex: 999,
            cursor: 'pointer'
        }} className={background === DEFAULT_COLORS.White ? 'white-btn' : background === DEFAULT_COLORS.Blue ? 'blue-btn' : 'white-btn'} onClick={onClick} type={type}>
            {children}
            <div className='icon'>
                {icon}
            </div>
        </button>
    );
};

export default ButtonWithIcon;
