import React from 'react';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  variant?: 'light' | 'dark' | 'transparent';
  division?: 'infrastructure' | 'water' | 'group' | string;
  height?: string | number;
};

export default function Logo({
  className = '',
  style,
  height = '56px'
}: Props) {
  return (
    <a
      href="/"
      className={className}
      aria-label="Agro Foundries Home"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        height,
        ...style
      }}
    >
      <img
        src="/AFlogo.png"
        alt="Agro Foundries Logo"
        style={{
          height,
          maxHeight: '100%',
          width: 'auto',
          objectFit: 'contain',
          objectPosition: 'left center',
          display: 'block'
        }}
      />
    </a>
  );
}
