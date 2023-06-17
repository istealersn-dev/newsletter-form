
import { HeroProps } from '@/types';
import data from './subscribe.json'

const formElements = data.content.form_elements;

export const heroProps: HeroProps = {
    heading: "Stay updated!",
    description: "Join 60,000+ product managers receiving monthly updates on:",
    livalues: [
      "Product discovery and building what matters",
      "Measuring to ensure updates are a success",
      "And much more!"
    ],
    formDetails: {
        labelProps: {
            htmlfor: data.content.form_elements.label.htmlfor,
            value: data.content.form_elements.label.value
          },
          inputProps: {
            inputtype: "email",
            name: formElements.input.name,
            id: formElements.input.id,
            placeholder: formElements.input.placeholder
          },
          buttonProps: {
            onClick: () => {},
            btntype: "submit",
            label: formElements.button.label
          }}
    }