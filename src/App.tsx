import { useForm, FieldValues } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = function (data: FieldValues) {
    console.log(data);
  };
  return (
    <form
      className="flex flex-col items-center justify-center p-6 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="border-solid border-2 p-4 rounded-md shadow-sm">
        <div className="mb-3 flex flex-col gap-3 w-96">
          <label htmlFor="name" className="font-mono text-lg">
            Name
          </label>
          <input
            {...register("name", { required: true, minLength: 3 })}
            id="name"
            type="text"
            className="rounded-md border-solid border-s-4 border-2 border-r-4 text-md p-2"
          />
          {errors.name?.type === "required" && (
            <p>The name field is required.</p>
          )}
          {errors.name?.type === "minLength" && (
            <p>The name must be at least 3 characters.</p>
          )}
        </div>
        <div className="mb-3 flex flex-col justify-center gap-3 w-96">
          <label htmlFor="age" className="font-mono text-lg">
            Age
          </label>
          <input
            {...register("age")}
            id="age"
            type="text"
            className="rounded-md  border-s-4 border-2 border-r-4 border-solid  p-2 text-md"
          />
        </div>

        <button
          className="bg-blue-600 rounded-md font-bold text-white p-3"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default App;
