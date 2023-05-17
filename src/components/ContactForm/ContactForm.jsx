import { useEffect } from 'react';
import { useSelector } from 'react-redux';
//import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { useAddContactMutation } from 'redux/contacts/contactsApi';
import { useForm, Controller, useFormState } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Box, Button } from '@mui/material';
import { CustomTextField } from '../CustomTextField/CustomTextField';
import { contactValidation, phoneValidation } from '../../services/validation';
import ReactInputMask from 'react-input-mask';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const [addContact] = useAddContactMutation();

  const { control, handleSubmit, reset, formState, setError } = useForm();
  const { errors } = useFormState({
    control,
  });

  const { isValid } = formState;

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: '', number: '' });
    }
  }, [formState, reset, isValid]);

  //console.log(contacts);
  const handleAddContact = data => {
    if (contacts.find(contact => contact.name === data.name)) {
      setError('name', {
        type: 'custom',
        message: `Контакт з ім'ям ${data.name} вже є в списку`,
      });
      return;
    }
    toast.promise(addContact(data).unwrap(), {
      loading: 'Намагаюсь додати новий контакт',
      success: `Контакт " ${data.name} " додано`,
      error: error => `${error?.data?._message}`,
    });
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          width: '100%',
        }}
        component="form"
        onSubmit={handleSubmit(handleAddContact)}
      >
        <Controller
          control={control}
          name="name"
          rules={contactValidation}
          defaultValue={''}
          render={({ field }) => (
            <CustomTextField
              label="ім'я"
              color="formInput"
              onChange={e => field.onChange(e)}
              value={field.value}
              fullWidth={true}
              error={!!errors.name?.message}
              helperText={errors?.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="number"
          rules={phoneValidation}
          defaultValue={''}
          render={({ field: { value, onChange } }) => (
            <ReactInputMask
              mask="(099)-999-99-99"
              value={value}
              onChange={e => onChange(e)}
            >
              {inputProps => (
                <CustomTextField
                  {...inputProps}
                  label="Телефон"
                  color="formInput"
                  type="tel"
                  fullWidth={true}
                  error={!!errors.number?.message}
                  helperText={errors?.number?.message}
                />
              )}
            </ReactInputMask>
          )}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{
            maxWidth: '120px',
            borderRadius: '8px',
          }}
        >
          Додати
        </Button>
      </Box>
    </>
  );
};

export default ContactForm;
