"use client";

import { FormProvider, useForm } from "react-hook-form";

import Typography from "@/components/Typography";
import Input from "@/components/form/Input";

export default function FormSandbox() {
  const methods = useForm();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-200">
      <div className="flex flex-col">
        <Typography
          as="h1"
          variant="h3"
          font="Inter"
          weight="bold"
          className="text-gray-900"
        >
          Form Sandbox
        </Typography>
        <FormProvider {...methods}>
          <form className="w-[600px]">
            <Input id="Test" label="Haloo" placeholder="Ini placeholder" />
          </form>
        </FormProvider>
      </div>
    </main>
  );
}
