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

export default function Signup() {
  const formSchema = z.object({
    firstName: z
      .string()
      .min(3, { message: "نام باید حداقل ۳ کاراکتر باشد." })
      .max(50),
    lastName: z
      .string()
      .min(3, { message: "نام خانوادگی باید حداقل ۳ کاراکتر باشد." })
      .max(50),
    phoneNumber: z
      .string()
      .min(3, { message: "شماره تلفن باید بین ۳ تا ۱۱ کاراکتر باشد." })
      .max(11),
    password: z
      .string()
      .min(2, { message: "رمز عبور باید حداقل ۲ کاراکتر باشد." })
      .max(50)
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      password: ""
    }
  });

  const { watch, handleSubmit, control, formState } = form;
  const { errors } = formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("http://localhost:8000/api/signup/", {
        first_name: values.firstName,
        last_name: values.lastName,
        phone_number: values.phoneNumber,
        password: values.password
      });
      if (response.status === 201) {
        console.log("ثبت‌نام موفقیت‌آمیز بود!");
      }
    } catch (error: any) {
      console.error("خطا در ثبت‌نام:", error);
    }
  };

  const getInputClass = (fieldName: keyof z.infer<typeof formSchema>) => {
    const isValid = !errors[fieldName] && watch(fieldName)?.length > 0;
    return `InputAuth ${isValid ? "border-2 border-[#087c58]" : ""}`;
  };

  return (
    <div
      className="Signup flex justify-center items-center h-[70vh] mt-[3vw]"
      dir="rtl"
    >
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="Form space-y-4 p-6 w-80 backdrop-blur-[50px] rounded-2xl"
        >
          <h2 className="text-lg font-semibold mb-4 text-center">ثبت‌نام</h2>

          <FormField
            control={control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>نام</FormLabel>
                <FormControl>
                  <Input
                    className={getInputClass("firstName")}
                    placeholder="نام"
                    {...field}
                  />
                </FormControl>
                {errors.firstName && (
                  <FormMessage>{errors.firstName.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>نام خانوادگی</FormLabel>
                <FormControl>
                  <Input
                    className={getInputClass("lastName")}
                    placeholder="نام خانوادگی"
                    {...field}
                  />
                </FormControl>
                {errors.lastName && (
                  <FormMessage>{errors.lastName.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>شماره تلفن</FormLabel>
                <FormControl>
                  <Input
                    className={getInputClass("phoneNumber")}
                    placeholder="شماره تلفن"
                    {...field}
                  />
                </FormControl>
                {errors.phoneNumber && (
                  <FormMessage>{errors.phoneNumber.message}</FormMessage>
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

          <div className="SignButtons flex flex-row justify-center items-center">
            <Button
              type="button"
              className="SignCancel mx-4 px-8 mt-3 text-white py-2 rounded bg-[#b71833] hover:bg-[#751424] transition-all duration-3000"
              onClick={() => console.log("خروج کلیک شد!")}
            >
              خروج
            </Button>
            <Button
              type="submit"
              className="SignSubmit mx-4 px-8 mt-3 text-white py-2 rounded bg-[#087c58] hover:bg-[#0d4b37] transition-all duration-3000"
            >
              ثبت‌نام
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
