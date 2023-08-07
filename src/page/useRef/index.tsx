import { z, ZodType } from "zod";
import { FormData } from "../../types/use-form-zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ExampleWithUseForm() {
  const schema: ZodType<FormData> = z
    .object({
      //if there is min or max we can edit error message like this
      firstName: z
        .string()
        .min(5, "First name must be at least 5 characters")
        .max(30, "First name must be at most 30 characters"),

      //if we want to edit error message without min max it would be like this if it string
      lastName: z.string().refine((value) => {
        return value.length >= 5 && value.length <= 30;
      }, "LastName length must between 5 to 30"),

      //if we want to check email
      email: z.string().email(),

      //if we want to check number
      age: z.number().min(10).max(90),
      password: z.string().min(5).max(30),
      confirmPassword: z.string().min(5).max(30),
    })

    //if we want to check form two data in the input
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password do not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: FormData) => {
    console.log(data);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h1>Example With Use Form and Zod</h1>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        onSubmit={handleSubmit(submitData)}
      >
        <label>FirstName</label>
        <input type="text" placeholder="FirstName" {...register("firstName")} />
        {errors.firstName && (
          <span style={{ color: "red" }}>{errors.firstName.message}</span>
        )}
        <label>LastName</label>
        <input type="text" placeholder="LastName" {...register("lastName")} />
        {errors.lastName && (
          <span style={{ color: "red" }}>{errors.lastName.message}</span>
        )}
        <label>Email</label>
        <input type="text" placeholder="Email" {...register("email")} />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}
        <label>Age</label>
        <input
          type="number"
          placeholder="Age"
          {...register("age", { valueAsNumber: true })}
        />
        {errors.age && (
          <span style={{ color: "red" }}>{errors.age.message}</span>
        )}
        <label>Password</label>
        <input type="text" placeholder="Password" {...register("password")} />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password.message}</span>
        )}
        <label>Confirm Password</label>
        <input
          type="text"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span style={{ color: "red" }}>{errors.confirmPassword.message}</span>
        )}
        <input type="submit" />
      </form>
    </div>
  );
}
