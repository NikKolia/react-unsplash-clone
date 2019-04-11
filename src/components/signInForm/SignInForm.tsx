import * as React from 'react';
import { Form, Text } from 'informed';

interface IProps {
  className?: string
}

export class SignInForm extends React.Component<IProps> {
  render() {
    return <Form >
      <Text field={'email'}/>
      <Text field={'password'}/>
      <button type={'submit'}>Submit</button>
    </Form>
  }
}
