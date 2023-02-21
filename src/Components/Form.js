import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm({ setActive }) {
  const [state, handleSubmit] = useForm("mbjeooka");

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email: </label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        onClick={() => {
          state.succeeded ? setActive(true) : setActive(false);
          console.log(state.errors);
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
