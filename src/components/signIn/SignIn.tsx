import * as React from 'react';
import { SignInForm } from '../signInForm/SignInForm';

interface IProps {
  onSubmit: (v: string) => void
}

export const SignIn: React.FunctionComponent<IProps> = () => {
  return <div className={'sign-in'}>
    <SignInForm className={'sign-in__form'}/>
  </div>
}
