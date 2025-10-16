import { useForm } from "react-hook-form";
import { sendDataforEmail } from "../api/email.api";

export function ContactForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    await sendDataforEmail(data);
  };
  return (
    <div className="contact-div">
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="example@gmail.com"
          {...register("email_contact", { required: "true" })}
        />
        <input
          type="text"
          placeholder="Asunto"
          {...register("subject", { required: "true" })}
        ></input>
        <textarea
          placeholder="Mensaje..."
          rows="4"
          {...register("message", { required: "true" })}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
