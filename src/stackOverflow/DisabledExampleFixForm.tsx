import { Button, TextField } from "@mui/material";
import { useEffect, useState, ReactNode } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { offices, purposes } from "./helpers/constants";
import type { DisabledExampleFix_InputFormFields } from "./helpers/types";

/**
 *
 */
export const DisabledExampleFix = () => {
  const { control, watch, handleSubmit } =
    useForm<DisabledExampleFix_InputFormFields>();
  const selectedPurpose = watch("selectedPurpose");
  const onSubmit = (data: DisabledExampleFix_InputFormFields) => {
    console.log("submit hit with data:", data);
  };

  useEffect(() => {
    console.log("selected purpose changed to:", selectedPurpose);
  }, [selectedPurpose]);
  return (
    <div className="w-full h-full flex justify-content-center align-items-center">
      <h5>hook form + react-select example</h5>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ color: "black" }}>
            <Controller
              name="selectedOffice"
              control={control}
              render={({ field }) => (
                <Select
                  options={offices}
                  ref={field.ref}
                  value={offices.find((c) => c.value === field.value.value)}
                  onChange={field.onChange}
                />
              )}
            />
            <Controller
              name="selectedPurpose"
              control={control}
              render={({ field }) => (
                <Select
                  options={purposes}
                  ref={field.ref}
                  value={offices.find((c) => c.value === field.value.value)}
                  onChange={field.onChange}
                />
              )}
            />
            <TextField
              label="Enter Specific Purpose"
              variant="filled"
              fullWidth
              style={{
                backgroundColor:
                  selectedPurpose.value === "Others" ? "red" : "white",
              }}
              disabled={selectedPurpose.value === "Others" ? false : true}
            />
            {/*
              Or if you want it to be a part of the control (suggested) use this!!
               <Controller
                control={control}
                name="specificPurposeInputText"
                render={({ field }) => (
                  <TextField
                    label="Enter Specific Purpose"
                    variant="filled"
                    value={field.value}
                    onChange={field.onChange}
                    fullWidth
                    style={{
                      backgroundColor:
                        selectedPurpose.value === "Others" ? "red" : "white",
                    }}
                    disabled={selectedPurpose.value === "Others" ? false : true}
                  />
                )}
              /> */}
          </div>
          <div style={{ backgroundColor: "black", color: "white" }}>
            <Button type="submit">SUBMIT</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
