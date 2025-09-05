import React from 'react';

export default function DownloadButton({ file, children }) {
  return (
    <a
      href={file}
      download
      style={{
        display: 'inline-block',
        margin: '1rem 0',
        padding: '0.6rem 1.2rem',
        backgroundColor: '#0078e7',
        color: 'white',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
      }}
    >
      {children}
    </a>
  );
}
