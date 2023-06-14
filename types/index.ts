import { MouseEventHandler } from "react";

export interface SubmitBtnProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    btntype: "submit" | "button";
    label?: string;
}

export interface InputProps {
    inputtype: "email";
    name?: string;
    id: string;
    placeholder?: string;
  }

export interface LabelProps {
    htmlfor: string;
    value: string;
  }

export interface SubscribeFormProps {
  labelProps: LabelProps;
  inputProps: InputProps;
  buttonProps: SubmitBtnProps
}

export interface FrmContainerProps {
  Imgsrc: string;
  Imgalt: string;
  subscribeform: SubscribeFormProps;
}