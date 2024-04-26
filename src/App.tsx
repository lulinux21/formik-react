import React from 'react';
import EnhancedForm, { FormValues } from './MyForm'; // Importe a interface FormValues também
import { FormikProps } from 'formik';

const App = () => {
  function onSubmit(values: FormValues, actions: unknown) {
    console.log('SUBMIT', values);
  }

  function onBlurCep(ev: React.FocusEvent<HTMLInputElement>, setFieldValue: FormikProps<FormValues>['setFieldValue']) {
    const { value } = ev.target;
    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('logradouro', data.logradouro);
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('uf', data.uf);
      });
  }

  return (
    <div className="App">
      <EnhancedForm handleSubmit={onSubmit} onBlurCep={onBlurCep} />
    </div>
  );
};

export default App;
