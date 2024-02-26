import { Box, BoxProps } from '@mui/material';
import { DEFAULT_COLORS } from '@/app/utils/colors';
import { ComponentProps } from '@/app/utils/types';
import { forwardRef } from 'react';

const Container = forwardRef<HTMLDivElement, ComponentProps & BoxProps>(
  function Container(
    {
      children,
      width,
      maxWidth,
      background,
      borderRadius = "15px",
      padding = "10px",
      fullWidth,
      ...otherProps
    },
    ref
  ) {
    return (
      <Box
        sx={{
          border: `1px solid ${DEFAULT_COLORS.Light}`,
          borderRadius,
          padding,
          background,
          width: fullWidth ? '100%' : width,
          maxWidth,
        }}
        ref={ref}
        {...otherProps}
      >
        {children}
      </Box>
    );
  }
);

Container.displayName = 'Container';

export default Container;
