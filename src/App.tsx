import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import "./App.css";
import { Button, TextField } from "@mui/material";
import { useEffect } from "react";
const offices = [
  { label: "Building Management Office", value: "Building Management Office" },
  {
    label: "Information Technology and Resource Office",
    value: "Information Technology and Resource Office",
  },
  {
    label: "Engineering and Science Laboratory Office",
    value: "Engineering and Science Laboratory Office",
  },
];
const purposes = [
  {
    label: "Academic Purposes - Assignment & Activities",
    value: "Academic Purposes - Assignment & Activities",
  },
  { label: "Organization Purposes", value: "Organization Purposes" },
  {
    label: "Academic Purposes - Midterms & Finals",
    value: "Academic Purposes - Midterms & Finals",
  },
  { label: "Special Events", value: "Special Events" },
  { label: "Others", value: "Others" },
];

interface InputFormFields {
  selectedOffice: { label: string; value: string };
  selectedPurpose: { label: string; value: string };
  specificPurposeInputText: string;
}

function App() {
  const { control, watch, handleSubmit } = useForm<InputFormFields>();
  const selectedPurpose = watch("selectedPurpose");

  const onSubmit = (data: InputFormFields) => {
    console.log("submit hit with data:", data);
  };

  useEffect(() => {
    console.log("selected purpose changed to:", selectedPurpose);
  }, [selectedPurpose]);

  return (
    <div className="App" style={{ backgroundColor: "grey", color: "white" }}>
      <h1>Test Screen</h1>
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
    </div>
  );
}

export default App;
