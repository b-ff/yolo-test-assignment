import React, {
  FC,
  FormEventHandler,
  ReactElement,
  SyntheticEvent,
  useCallback,
  useState,
} from "react";
import styled from "styled-components";
import { FormButton } from "./FormButton";
import { FormInput } from "./FormInput";

const CURRENCY_CODE_INPUT_NAME: string = "currency-code";

type AddCurrencyFormProps = {
  onSubmit: Function;
};

export const AddCurrencyForm: FC<AddCurrencyFormProps> = ({
  onSubmit,
}: AddCurrencyFormProps): ReactElement => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange: FormEventHandler = useCallback(
    (event: SyntheticEvent): void => {
      const inputElement = event.target as HTMLInputElement;
      setInputValue(inputElement.value);
    },
    [setInputValue]
  );

  const handleSubmit: FormEventHandler = useCallback(
    (event: SyntheticEvent): void => {
      const currencyCode: FormDataEntryValue | undefined = [
        ...new FormData(event.target as HTMLFormElement),
      ]
        .find(
          ([name]: [string, FormDataEntryValue]) =>
            name === CURRENCY_CODE_INPUT_NAME
        )
        ?.pop();

      setInputValue("");
      onSubmit(currencyCode);
      event.preventDefault();
    },
    [onSubmit]
  );

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormInput
        name={CURRENCY_CODE_INPUT_NAME}
        label="Cryptocurrency code"
        value={inputValue}
        onChange={handleInputChange}
      />
      <StyledFormButton type="submit" disabled={!Boolean(inputValue)}>
        Add
      </StyledFormButton>
      <StyledParagraph>
        Use of this service is subject to terms and conditions.
      </StyledParagraph>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 370px;
  padding: 40px 50px;
  background-color: var(--secondary-background-color);
  color: var(--secondary-font-color);
  border-radius: 3px;
`;

const StyledFormInput = styled(FormInput)`
  width: 100%;
  margin-bottom: 10px;
`;

const StyledFormButton = styled(FormButton)`
  width: 100%;
  margin-bottom: 45px;
`;

const StyledParagraph = styled.small`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 14px;
`;
