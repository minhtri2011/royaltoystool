import React from "react";
import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";

const InputWithFloatingLabel = (props) => {
    const {label}=props
    
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    props.onChange(name, label, value);
  };

  return (
    <FormControl variant="floating">
      <Input placeholder=" " {...props} onChange={handleInputChange} />
      <FormLabel>{label}</FormLabel>
    </FormControl>
  );
};

export default InputWithFloatingLabel;
