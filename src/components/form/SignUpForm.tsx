"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  //import router
  const router = useRouter();
  // Define schema
  const FormSchema = z
    .object({
      email: z
        .string()
        .min(1, {
          message: "Email is required",
        })
        .email("Invalid email"),
      password: z.string().min(1, "Password is requied").min(8, "Password must have 8 characters"),
      confirmPassword: z.string().min(1, "You must CONFIRM YOUR PASSWORD"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Passwords do NOT MATCH",
    });

  // Initialize form with resolver
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    });

    if (response.ok) {
      alert("Account Creation Successful!");
      router.push("/auth/sign-in");
    } else {
      alert("Sign up failed");
    }

    console.log("Form Submitted: ", values);
  };

  return (
    <div className="flex py-48 justify-center min-h-screen">
      <FormProvider {...form}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email goes here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password goes here" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm your password</FormLabel>
                  <FormControl>
                    <Input placeholder="Confirm Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Sign up!</Button>
            <p className="text-center text-sn text-gray-600 mt-2">
              If you have an account you can{" "}
              <Link className="text-blue-500 hover:underline" href="/auth/sign-in">
                Sign in
              </Link>
            </p>
          </form>
        </Form>
      </FormProvider>
    </div>
  );
};

export default SignUpForm;
