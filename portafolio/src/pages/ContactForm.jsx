export function ContactForm() {
  return (
    <div>
      <form>
        <input
          type="text"
          name="email"
          value="email"
          placeholder="example@gmail.com"
        >
          Correo
        </input>
        <textarea placeholder="Comentario...">Comentario</textarea>
      </form>
    </div>
  );
}
