import { useForm } from "react-hook-form";

export function ContactForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
