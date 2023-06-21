import { errInputProps } from "@/styles/atom/form-input";
import { FocusEventHandler, MouseEventHandler } from "react";

export interface SubmitBtnProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    btntype: "submit" | "button";
    label?: string;
}

export interface InputProps {
    inputtype: string
    name: string
    id: string
    placeholder?: string
    autocomplete?: string
    onBlur?: FocusEventHandler<HTMLInputElement>
    errdisplay?: string
  }

export interface LabelProps {
    htmlfor: string;
    lvalue?: string;
    display?: string;
    text?: string;
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