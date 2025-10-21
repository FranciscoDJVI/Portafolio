import { useForm } from "react-hook-form";
import { sendDataforEmail } from "../api/email.api";
import { toast } from "react-hot-toast";

export function ContactForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      await sendDataforEmail(data);
      toast.success("Email envidado", {
        position: "bottom-right",
        style: { background: "transparent", color: "#000000" },
      });
    } catch (error) {
      toast.error("Email no envidado", {
        position: "bottom-right",
        style: { background: "transparent", color: "#000000" },
      });
      console.error(error);
    }
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
