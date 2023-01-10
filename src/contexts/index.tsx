import React from 'react';
import { FormCtxProvider } from './FormCtxProvider';

// here you can add more providers

type Props = {
  children: React.ReactNode;
};

const AppProviders = ( {children} : Props) => {
  return (
    <FormCtxProvider>
        {children}
    </FormCtxProvider>
  )
}

export default AppProviders;