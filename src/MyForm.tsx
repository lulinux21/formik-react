import React from 'react';
import { withFormik, FormikProps } from 'formik';

export interface FormValues {
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

interface MyFormProps {
  handleSubmit: (values: FormValues, actions: unknown) => void;
  onBlurCep: (ev: React.FocusEvent<HTMLInputElement>, setFieldValue: FormikProps<FormValues>['setFieldValue']) => void;
}

const MyForm = (props: MyFormProps & FormikProps<FormValues>) => {
  const { isValid, handleSubmit, onBlurCep } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control-group">
        <label>Cep</label>
        <input name="cep" type="text" onBlur={(ev: React.FocusEvent<HTMLInputElement>) => onBlurCep(ev, props.setFieldValue)}  value={props.values.cep} onChange={props.handleChange} />
      </div>
      <div className="form-control-group">
        <label>Logradouro</label>
        <input name="logradouro" type="text"  value={props.values.logradouro} onChange={props.handleChange}  />
      </div>
      <div className="form-control-group">
        <label>Número</label>
        <input name="numero" type="text" value={props.values.numero} onChange={props.handleChange}/>
      </div>
      <div className="form-control-group">
        <label>Complemento</label>
        <input name="complemento" type="text" value={props.values.complemento} onChange={props.handleChange} />
      </div>
      <div className="form-control-group">
        <label>Bairro</label>
        <input name="bairro" type="text"  value={props.values.bairro} onChange={props.handleChange}/>
      </div>
      <div className="form-control-group">
        <label>Cidade</label>
        <input name="cidade" type="text" value={props.values.cidade} onChange={props.handleChange}/>
      </div>
      <div className="form-control-group">
        <label>Estado</label>
        <select name="uf" onChange={props.handleChange} value={props.values.uf}>
          <option value="">Selecione o Estado</option>
          <option value="SP">São Paulo</option>
          <option value="SC">Santa Catarina</option>
        </select>
      </div>
      <button type="submit" disabled={!isValid}>Enviar</button>
    </form>
  );
};

const EnhancedForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: () => ({
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
  }),

  handleSubmit: (values, actions) => {
    actions.props.handleSubmit(values, actions);
  },

  validateOnMount: true,

})(MyForm);

export default EnhancedForm;
