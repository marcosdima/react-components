import BaseForm from "./components/BasicForm";
import emailDomain from "./utils/enums/emailDomain";
import fieldType from "./utils/enums/fieldType";

function App() {
  const fields = [
    {
      type: fieldType.CHAR,
      name: 'username',
      label: 'UserName',
      defaultValue: '123123123',
      required:true,
      placeholder: 'Ingrese un username...',
      row: 0,
      col: 0,
    },
    {
      type: fieldType.CHAR,
      name: 'firstname',
      required:true,
      settings: {
        maxLength: 4,
        onlyLetters: true,
      },
      row: 0,
      col: 1,
    },
    {
      type: fieldType.EMAIL,
      name: 'e-mail',
      required:true,
      settings: {
        validDomains: [emailDomain.GMAIL],
        countryCodes: ['.ar', '.uru'],
      },
      row: 0,
      col: 2,
    },
    {
      type: fieldType.NUMBER,
      name: 'age',
      required:true,
      placeholder: '18...110',
      settings: {
        min: 18,
        max: 110,
      },
      row: 0,
      col: 3,
    },
    {
      type: fieldType.IMAGE,
      name: 'perfil',
      required:true,
      row: 1,
      col: 0,
    },
    {
      type: fieldType.PASSWORD,
      name: 'password',
      settings: {
        minLength: 8,
        alphaNumeric: true,
        signs: true,
      },
      required:true,
      row: 1,
      col: 1,
    },
    {
      type: fieldType.SELECTOR,
      name: 'estado',
      required: true,
      settings: {
          values: [{label: 'casa', value: 1}, {label: 'roto', value: 2}],
      },
      row: 1,
      col: 2,
    },
    {
      type: fieldType.TEXT_AREA,
      name: 'descripcion',
      required: true,
      placeholder: 'Escriba una descripción...',
      settings: {
        minLength: 4,
      },
      row: 2,
      col: 0,
    },
    {
      type: fieldType.SEARCH_LOCATION,
      name: 'location',
      required: true,
      settings: {
          appendAtEnd: 'Buenos Aires, Argentina',
          defaultValue: 'Las Heras 1, Luján',
      },
      row: 2,
      col: 1,
    },
  ];
  
  return (
    <BaseForm
      fields={fields}
      // eslint-disable-next-line no-console
      onSubmit={(data) => console.log(data)}
      observeThis={{
        // eslint-disable-next-line no-console
        estado: (values) => console.log(values),
      }}
      style={{width: '100%', heigth: '100%'}}
      language="ES"
    />
  );
}

export default App;
