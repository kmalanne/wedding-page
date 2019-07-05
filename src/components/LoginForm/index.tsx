import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

export interface LoginFormProps {
  onLogin: (code: string) => void;
}

export const LoginForm = (props: LoginFormProps) => {
  const { onLogin } = props;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as any;

    const code = target.code.value;
    onLogin(code);
  };

  return (
    <div className="login-container">
      <Form onSubmit={onSubmit}>
        <input type="hidden" value="prayer" />
        <Form.Group controlId="inputName1">
          <Form.Control
            type="text"
            name="code"
            placeholder="Syötä koodisi"
            autoComplete="off"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Kirjaudu
        </Button>
      </Form>
    </div>
  );
};

// export class LoginForm extends Component<LoginFormProps, {}> {
//   onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const target = e.target as any;

//     const code = target.code.value;
//     this.props.onLogin(code);
//   };

//   render() {
//     return (
//       <div className="login-container">
//         <Form onSubmit={this.onSubmit}>
//           <input type="hidden" value="prayer" />
//           <Form.Group controlId="inputName1">
//             <Form.Control
//               type="text"
//               name="code"
//               placeholder="Syötä koodisi"
//               autoComplete="off"
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Kirjaudu
//           </Button>
//         </Form>
//       </div>
//     );
//   }
// }
