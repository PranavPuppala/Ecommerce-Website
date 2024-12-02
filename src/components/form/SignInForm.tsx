"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

// Define schema
const FormSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email("Invalid email"),
  password: z.string().min(1, "Password is required").min(8, "Password must have 8 characters"),
});

const SignInForm = () => {
  const router = useRouter();

  // Initialize form with resolver
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false, //prevents auto redirect
    });

    if (signInData?.error) {
      alert("User does not exist.");
    } else {
      router.push("/");
    }

    console.log(signInData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
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
                    <Input placeholder="Enter Email" {...field} />
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
                    <Input placeholder="Enter password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Sign In</Button>
            <p className="text-center text-sn text-gray-600 mt-2">
              If you don't have an account you can{" "}
              <Link className="text-blue-500 hover:underline" href="/auth/sign-up">
                Sign up
              </Link>
            </p>
          </form>
        </Form>
      </FormProvider>
    </div>
  );
};

export default SignInForm;
