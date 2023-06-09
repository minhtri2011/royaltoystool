import React from "react";
import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
const InputWithFloatingLabel = React.forwardRef((props, ref) => {
  const { label } = props;

  const handleInputChange = (e) => {
    const { name, value, id } = e.target;
    props.onChange(name, value, id);
  };

  return (
    <FormControl variant="floating">
      <Input
        placeholder=" "
        {...props}
        onChange={handleInputChange}
        ref={ref}
      />
      <FormLabel className="!bg-transparent">{label}</FormLabel>
    </FormControl>
  );
});

export default InputWithFloatingLabel;

