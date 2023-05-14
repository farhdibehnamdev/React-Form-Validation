import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  name: z.string().min(3),
  age: z.number({ invalid_type_error: "Age field is required" }).min(18),
});
type FormData = z.infer<typeof schema>;

const SimpleForm = function () {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>
        <div className="mb-3 flex flex-col justify-center gap-3 w-96">
          <label htmlFor="age" className="font-mono text-lg">
            Age
          </label>
          <input
            {...register("age", { valueAsNumber: true })}
            id="age"
            type="text"
            className="rounded-md  border-s-4 border-2 border-r-4 border-solid  p-2 text-md"
          />
          {errors.age && <p className="text-red-600">{errors.age.message}</p>}
        </div>

        <button
          disabled={!isValid}
          className={
            isValid
              ? "bg-blue-600 rounded-md font-bold text-white p-3"
              : "bg-slate-200 rounded-md font-bold text-white p-3"
          }
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default SimpleForm;
