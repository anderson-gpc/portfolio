const sendForm = async (
  e: React.FormEvent,
  form: React.RefObject<HTMLFormElement>,
  setEnviado: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault();

  if (!form.current) return;

  const formData = new FormData(form.current);

  try {
    await fetch(import.meta.env.VITE_EMAIL, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });
  } catch (error) {
    console.log(error);
  } finally {
    form.current.reset();
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
    }, 3000);
  }
};

export default sendForm;
