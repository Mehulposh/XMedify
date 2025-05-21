import React, { useState } from "react";
import { Box, Button, Typography, Grid, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { format, add, isEqual, startOfDay } from 'date-fns'

function dateList(){
  const Today = startOfDay(new Date());
  const dates = [];

  for(let i =0;i<7;i++){
    dates.push(add(Today, { days: i }));
  }

  return dates;
}


const SlotBooking = ({confirmBooking}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState("");
  const [datesList , setDatesList] = useState(dateList());

  const customDate = (day) => {
    if(isEqual(day,selectedDate)){
      return 'Today';
    }
    else if(isEqual(day,add(selectedDate,{days:1}))){
      return 'Tomorrow';
    }
    else{
      return format(day ,"E ,d   LLL");
    }
  };
  
  const slots = {
    Morning: ["11:30 AM"],
    Afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    Evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  const totalSlots = slots.Afternoon.length + slots.Evening.length + slots.Morning.length;

 const handleDateSelect = (day) => {
    setSelectedDate(day);
    if (selectedSlot) {
      // Pass updated booking details to parent
      const bookingDetails = {
        date: datesList.find((d) => d.day === day)?.date || day,
        time: selectedSlot,
      };
      confirmBooking(bookingDetails);
    }
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    if (selectedDate) {
      // Pass updated booking details to parent
      const bookingDetails = {
        date: datesList.find((d) => d.day === selectedDate)?.date || selectedDate,
        time: slot,
      };
      confirmBooking(bookingDetails);
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: '100%', mx: "auto" }}>
      {/* Date Navigation */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <IconButton>
          <ArrowBackIos sx={{color: 'rgba(42, 167, 255, 1)', border: '1px solid rgba(224, 224, 228, 1)', p: 2, borderRadius: 10}}/>
        </IconButton>
        <Box sx={{ display: "flex", justifyContent: "space-around", flex: 1 , overflowX: 'auto'}}>
          {datesList.map((date, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                cursor: "pointer",
                color: selectedDate === date.day ? "black" : "gray",
              }}
              onClick={() => handleDateSelect(date.day)}
            >
              <Typography variant="subtitle1" component='p' fontWeight="bold">
                {customDate(date)}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: selectedDate === date.day ? "green" : "gray" }}
              >
                {totalSlots} Slots Available
              </Typography>
              {selectedDate === date.day && (
                <Box
                  sx={{
                    width: "100%",
                    height: "3px",
                    backgroundColor: "rgba(42, 167, 255, 1)",
                    mx: "auto",
                    mt: 1,
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
        <IconButton>
          <ArrowForwardIos sx={{color: 'rgba(42, 167, 255, 1)', border: '1px solid rgba(224, 224, 228, 1)', p: 2, borderRadius: 10}}/>
        </IconButton>
      </Box>

      {/* Time Slots */}
      {Object.keys(slots).map((period, index) => (
        <Box key={index} sx={{ mb: 3 , display: 'flex', justifyContent: 'flex-start' , alignItems: 'center' ,gap: 2, borderBottom: '1px solid rgba(240, 240, 245, 1)' ,p:2}}>
          <Typography variant="p" component='p' fontWeight="400" fontSize="16px" color="rgba(65, 65, 70, 1)">
            {period}
          </Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {slots[period].map((slot, idx) => (
              <Grid item key={idx}>
                <Button
                  variant={selectedSlot === slot ? "contained" : "outlined"}
                  
                  onClick={() => handleSlotSelect(slot)}
                  sx={{
                    borderRadius: 2,
                    px: 3,
                    py: 1,
                    textTransform: "none",
                    backgroundColor: selectedSlot === slot ? 'rgba(42, 167, 255, 1)' : "white",
                    color: selectedSlot === slot ? "white" : "rgba(42, 167, 255, 1)",
                    borderColor: 'rgba(42, 167, 255, 1)',
                  }}
                >
                  {slot}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default SlotBooking;
