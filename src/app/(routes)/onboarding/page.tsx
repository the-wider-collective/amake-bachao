"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

type Props = {};

const formSchema = z.object({
  areaOfResidence: z.string(),
  allowLocationTracking: z.boolean(),
});

const Onboarding = (props: Props) => {
  const onboardingForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      areaOfResidence: "",
      allowLocationTracking: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <h3 className="scroll-m-20 border-b pt-4 pb-4 text-2xl font-semibold tracking-tight first:mt-0 mb-4 text-center">
        User Registration
      </h3>
      <Form {...onboardingForm}>
        <form
          onSubmit={onboardingForm.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <FormField
            control={onboardingForm.control}
            name="areaOfResidence"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select area of residence</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={onboardingForm.control}
            name="allowLocationTracking"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <div className="space-y-0.5">
                  <FormLabel>Turn on live location?</FormLabel>
                  <FormDescription>
                    Opt-in, for sending and receiving more accurate alerts.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Finish setup</Button>
        </form>
      </Form>
    </>
  );
};

export default Onboarding;
