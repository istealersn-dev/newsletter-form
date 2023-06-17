import { ChangeEventHandler, MouseEventHandler } from "react";

export interface SubmitBtnProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    btntype: "submit" | "button";
    label?: string;
}

export interface InputProps {
    inputtype: "email";
    name?: string;
    id: string;
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>
  }

export interface LabelProps {
    htmlfor: string;
    value: string;
  }

export interface SubscribeFormProps {
  labelProps: LabelProps
  inputProps: InputProps
  buttonProps: SubmitBtnProps
}

export interface FrmContainerProps {
  subscribeform: SubscribeFormProps;
  children: React.ReactNode;
}

export interface HeroProps {
  heading: string
  description: string
  livalues: string[]
  formDetails: SubscribeFormProps
}