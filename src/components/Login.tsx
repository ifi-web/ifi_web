import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const formSchema = z.object({
    username: z
      .string()
      .min(3, { message: "نام کاربری باید حداقل ۳ کاراکتر باشد." })
      .max(50),
    password: z
      .string()
      .min(2, { message: "رمز عبور باید حداقل ۲ کاراکتر باشد." })
      .max(50)
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      username: "",
      password: ""
    }
  });

  const { watch, handleSubmit, control, formState } = form;
  const { errors } = formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("http://localhost:8000/api/login/", {
        username: values.username,
        password: values.password
      });

      if (response.status === 200) {
        console.log("User logged in:", response.data.username);
      }
    } catch (error: any) {
      console.error("Login failed:", error);
    }
  };

  const getInputClass = (fieldName: keyof z.infer<typeof formSchema>) => {
    const isValid = !errors[fieldName] && watch(fieldName)?.length > 0;
    return `InputAuth ${isValid ? "border-2 border-[#087c58]" : ""}`;
  };

  return (
    <div className="Login flex justify-center items-center h-[70vh]">
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="Form p-6 w-80 backdrop-blur-[50px] rounded-2xl"
          dir="rtl"
        >
          <h2 className="text-lg font-semibold mb-4 text-center">ورود</h2>

          <FormField
            control={control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>نام کاربری</FormLabel>
                <FormControl>
                  <Input
                    className={getInputClass("username")}
                    placeholder="نام کاربری"
                    {...field}
                  />
                </FormControl>
                {errors.username && (
                  <FormMessage>{errors.username.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>رمز عبور</FormLabel>
                <FormControl>
                  <Input
                    className={getInputClass("password")}
                    type="password"
                    placeholder="رمز عبور"
                    {...field}
                  />
                </FormControl>
                {errors.password && (
                  <FormMessage>{errors.password.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <Link to="/signup">
            <h1 className="flex flex-row items-center text-sm text-right mt-3 text-[#ffffffb3]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 mx-1"
              >
                <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
              </svg>
              حساب کاربری ندارید؟
            </h1>
          </Link>

          <div className="flex flex-row justify-center items-center mt-4">
            <Button
              type="submit"
              className="w-full bg-[#087c58] text-white py-2 rounded hover:bg-[#0d4b37] transition-all duration-3000"
            >
              ورود
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Login;
z;
