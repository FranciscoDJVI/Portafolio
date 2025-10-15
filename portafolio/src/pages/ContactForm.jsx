import { useForm } from "react-hook-form";
import { sendDataforEmail } from "../api/email.api";

export function ContactForm() {
  const { register, handleSubmit } = useForm();
  const params = useParams();
  console.log(params);
  const onSubmit = (data) => {
    console.log(data);
    sendDataforEmail(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="example@gmail.com"
          {...register("email", { required: "true" })}
        />
        <input
          type="text"
          placeholder="Asunto"
          {...register('subject,{required:"true"}')}
        ></input>
        <textarea
          placeholder="Comentario..."
          rows="4"
          {...register("comment", { required: "true" })}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
