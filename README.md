# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Newsletter sign-up form with success message solution](#frontend-mentor---newsletter-sign-up-form-with-success-message-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)


### Links

- Solution URL: [View Code](https://github.com/istealersn-dev/newsletter-form)
- Live Site URL: [Newsletter Form](https://newsletter-form-green.vercel.app/)

## My process

### Built with

- Mobile-first workflow
- [Next.js](https://nextjs.org/) - React framework with Typescript
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

In this project, I learned how to implement a functional newsletter subscription form with a success message in React, while also utilizing TypeScript to ensure type safety throughout the project. The main highlight was integrating real-time form validation using regular expressions.

Here is a piece of JavaScript I used for form validation:

```tsx
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (emailRegx.test(inputValue)) {
            setIsSubmitted(true)
            setInputValue('')
        } else {
            setdisValue('block')
        }
    }
```
This code snippet tests the user's input against a regular expression that matches the pattern of an email address. If the input doesn't match, the error message is displayed.

### Continued development

While I have gained a good understanding of form handling in React and TypeScript, I plan to continue exploring more advanced patterns and use-cases, particularly in relation to form validation and error handling.

### Useful resources

- [Next.JS + Styled Components](https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components) - This helped me understand establishing ServerStylesheet generation by creating a global registry

## Author

- Frontend Mentor - [@istealersn-dev](https://www.frontendmentor.io/profile/istealersn-dev)
