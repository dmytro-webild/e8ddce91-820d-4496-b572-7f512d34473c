import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontWeight?: string | number;
  fill?: string;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  fontSize = 24,
  fontWeight = 700,
  fill = 'currentColor',
}) => {
  return (
    <svg
      viewBox={`0 0 ${text.length * fontSize * 0.6} ${fontSize * 1.5}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y={fontSize}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fill={fill}
        dominantBaseline="central"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
