import { useForm } from "react-hook-form";

export function ContactForm() {
  const { register } = useForm();
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="example@gmail.com"
          {...register("email", { required: "true" })}
        />
        <textarea placeholder="Comentario..." rows="4" />
        {...register("comment", { required: "true" })}
        <button>Enviar</button>
      </form>
    </div>
  );
}
