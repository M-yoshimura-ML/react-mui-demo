import React from "react";
import { Stack, TextField } from "@mui/material";
// import { DatePicker } from "@mui/lab";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

export const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  return (
    <Stack spacing={2} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        openTo="day"
        views={["month", "year", "day"]}
        minDate={dayjs("2020-12-28")}
        renderInput={(params: any) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
      />
      <TimePicker
        label="Time Picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedTime}
        onChange={(newValue) => {
            setSelectedTime(newValue)
        }}
      />
    </Stack>
  );
};
