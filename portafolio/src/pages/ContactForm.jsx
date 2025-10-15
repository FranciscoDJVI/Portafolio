import { useForm } from "react-hook-form";
import { sendDataforEmail } from "../api/email.api";
import { useParams } from "react-router-dom";

export function ContactForm() {
  const { register, handleSubmit } = useForm();
  const params = useParams();
  console.log(params);
  const onSubmit = async (data) => {
    console.log(data);
    await sendDataforEmail(data);
  };
  return (
    <div className="flex flex-col flex-wrap gap-3">
      <form onSubmit={handleSubmit(onSubmit)}>
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
          placeholder="Comentario..."
          rows="4"
          {...register("message", { required: "true" })}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
