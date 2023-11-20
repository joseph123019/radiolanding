'use client';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';

interface FacebookButtonProps {
  url: string;
}

const FacebookButton: React.FC<FacebookButtonProps> = ({ url }) => (
  <FacebookIcon
    style={{ cursor: 'pointer', display: 'block', margin: 'auto' }}
    onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
    fontSize="large"
  />
);

export default FacebookButton;
