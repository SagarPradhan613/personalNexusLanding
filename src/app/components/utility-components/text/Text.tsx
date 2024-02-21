import { Typography, TypographyProps } from "@mui/material";
import { ComponentProps } from "../../../utils/types";
import { DEFAULT_COLORS } from "../../../utils/colors";


const Text = ({
  fontSize = "20px",
  color,
  fontFamily = "SEN medium",
  maxWidth,
  lineHeight = "50px",
  isGradient,
  children,
  textAlign,
  lineBrake

}: ComponentProps) => {
  return (
    <Typography
      color={color}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontWeight={800}
      lineHeight={lineHeight}
      textAlign={textAlign as TypographyProps['textAlign']} // Correctly typing textAlign
      maxWidth={maxWidth}
      whiteSpace={lineBrake ? 'nowrap' : 'normal'}
      sx={isGradient ? {
        background: `-webkit-linear-gradient(${DEFAULT_COLORS.Text_Gradient})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      } : {}}
    >
      {children}
    </Typography>
  );
};

export default Text;
