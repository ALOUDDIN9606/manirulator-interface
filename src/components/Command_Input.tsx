import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, Container } from '@mui/material';

interface CommandInputProps {
  onSubmit: (command: string) => void;
}

const Command_Input: React.FC<CommandInputProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<{ command: string }>();

  const handleFormSubmit: SubmitHandler<{ command: string }> = data => {
    onSubmit(data.command);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <TextField
          fullWidth
          label="Commands"
          placeholder="Enter commands (e.g., LLLLPPPPONNNB)"
          {...register('command', { required: true })}
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Command_Input;
