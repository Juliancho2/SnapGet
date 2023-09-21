import React from 'react';

type Props={
    children:React.ReactNode,
    styles?:string
}

const Text = ({ children, styles }:Props) => {
  return (
        <p className={styles}>
            {children}
        </p>
  );
};

export default Text;
