import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" }),
});
type FormData = z.infer<typeof schema>;
const ExpenseTracker = function () {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = function (data: FieldValues) {};

  return (
    <>
      <div className="flex flex-col justify-center items-center p-6">
        <form
          className="shadow-sm border-2 border-solid rounded-md p-6 w-2/5 mb-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="flex justify-center border-2 border-solid p-3 rounded-md bg-blue-500 mb-3 text-white shadow-sm ">
            Expense Tracker
          </h2>

          <div className="mb-3 flex flex-col gap-2">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              className="border-solid border-2 rounded-md text-xl p-2"
            />
          </div>
          <div className="mb-3 flex flex-col gap-2">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              name="amount"
              className="border-solid border-2 rounded-md text-xl p-2"
            />
          </div>
          <div className="mb-6 flex flex-col gap-2">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              className="border-solid border-2 rounded-md text-xl bg-white p-3"
            >
              <option value="Groceries">Groceries</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>
          <button
            type="submit"
            className="border-solid border-2 bg-blue-600 pt-2 pb-2 pl-8 pr-8 w-full text-white rounded-md"
          >
            Submit
          </button>
        </form>
        <div className="item-center p-6 rounded-md border-2 border-solid w-2/5">
          <table className=" table w-full">
            <thead className="table-header-group text-center">
              <tr>
                <th className="border-2 border-solid p-4">Description</th>
                <th className="border-2 border-solid p-4">Amount</th>
                <th className="border-2 border-solid p-4">Category</th>
                <th className="border-2 border-solid p-4"></th>
              </tr>
            </thead>
            <tbody className="border-2 border-separate text-center border-solid">
              <tr>
                <td className="border-2 border-solid">salam</td>
                <td className="border-2 border-solid">$50</td>
                <td className="border-2 border-solid">Eshak</td>
                <td className="border-2 border-solid">
                  <button className="bg-red-500 pl-4 pr-4 p-3 rounded-md border-2 text-white">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ExpenseTracker;
