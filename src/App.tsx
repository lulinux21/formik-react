import React from 'react';
import MyFormWithFormik, { FormValues } from './MyForm';

const App: React.FC = () => {
  const handleSubmit = (values: FormValues) => {
    console.log(values); // Aqui você pode lidar com os dados do formulário, por exemplo, enviá-los para um servidor
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <MyFormWithFormik handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
