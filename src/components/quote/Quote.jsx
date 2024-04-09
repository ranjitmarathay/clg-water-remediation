import { Container, Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";
import EnterAddress from "./EnterAddress";
import PickTimeDay from "./PickTimeDay";
import SelectServices from "./SelectServices";
import ContactInfo from "./ContactInfo";
import PickDayOfWeek from "./PickDayOfWeek";
import useMediaQuery from '@mui/material/useMediaQuery';
import EnterSquareFootage from "./EnterSquareFootage";
import { useTheme } from '@mui/material/styles';
/* global google */


export default function Quote() {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [quoteValue, setQuoteValue] = useState(0);
  const [timeSaved, setTimeSaved] = useState(0);
  
  const [selectedServices, setSelectedServices] = useState([
    {service: 'Water Mitigation', selected: false},
    {service: 'Water Extraction', selected: false},
    {service: 'General Plumbing', selected: false},
    {service: 'Water Damage Build Back', selected: false},
    // {service: 'Service 5', selected: false}
  ]);

  const [selectedDays, setSelectedDays] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false
  });

  const [timeOfDay, setTimeOfDay] = useState("");

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [message, setMessage] = useState("");

  const [address, setAddress] = useState("");
  
  const [squareFootage, setSquareFootage] = useState(0);

  const handleServicesChange = (event) => {
    const selectedValues = event.target.value;
    let newSelectedServices = selectedServices.map((service) => {
      if (selectedValues.includes(service.service)) {
        return { ...service, selected: true };
      } else {
        return { ...service, selected: false };
      }
    });
    setSelectedServices(newSelectedServices);
  };


  const handleTimeChange = (event) => {
    console.log("Time of Day", event.target.value);
    setTimeOfDay(event.target.value);
  };

  const handleDayChange = (event) => {
    setSelectedDays({
      ...selectedDays,
      [event.target.name]: event.target.checked
    });
  };

  function calculateDistance(originAddress, destinationTown) {
    return new Promise((resolve, reject) => {
      var service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [originAddress],
          destinations: [destinationTown],
          travelMode: 'DRIVING',
          unitSystem: google.maps.UnitSystem.IMPERIAL,
        },
        function(response, status) {
          if (status === 'OK') {
            var results = response.rows[0].elements;
            var distance = results[0].distance;
            var distanceText = distance.text;
            var distanceValue = distance.value;
            console.log('Distance: ' + distanceText + ' (' + distanceValue + ' meters)');
            resolve([distanceValue, distanceText]);
          } else {
            console.log('Error: ' + status);
            reject(status);
          }
        }
      );
    });
  }
  
  const generateQuote = async () => {
    let numSelectedServices = selectedServices.filter(service => service.selected).length;
    let numSelectedDays = Object.values(selectedDays).filter(day => day).length;
    console.log("Generating Quote", numSelectedServices, numSelectedDays, address, timeOfDay, name, email, phone, message);
  
    if(numSelectedServices > 0 && numSelectedDays > 0 && address !== "" && timeOfDay !== "" && name !== "" && email !== "" && phone !== "" && message !== "") {
      console.log("Generating Quote", selectedServices, selectedDays, address, timeOfDay, name, email, phone, message);
      let days = Object.keys(selectedDays).filter(day => selectedDays[day]).join(", ");
      let services = selectedServices.map(service => service.service).join(", ");
  
      var quoteValue = 0;
      var timeSaved = 0;
  
      try {
        const [distanceValue, distanceText] = await calculateDistance("111 E Cesar Chavez St, Austin, TX 78701", address);

        console.log("Distance", distanceValue, distanceText);
  
        if (distanceValue <= 48280) {
          quoteValue += 50;
        } else if (distanceValue > 48280 && distanceValue <= 96560) {
          quoteValue += 200;
        } else {
          alert("We are sorry, but we can only provide quotes within 60 miles of your location.");
          return;
        }
  
        if (timeOfDay === "Morning") {
          quoteValue += 50;
          timeSaved += 1.5;
        } else if (timeOfDay === "Afternoon") {
          quoteValue += 75;
          timeSaved += 1.5;
        } else if (timeOfDay === "Evening") {
          quoteValue += 100;
          timeSaved += 1.5;
        }
  
        if (selectedDays.saturday || selectedDays.sunday) {
          quoteValue += 60;
          timeSaved += 2;
        }
  
        if (services.includes("Water Mitigation")) {
          quoteValue += 3100;
          timeSaved += 12;
        } else if (services.includes("Water Extraction")) {
          quoteValue += 1125;
          timeSaved += 22.5;
        } else if (services.includes("General Plumbing")) {
          quoteValue += 1150;
          timeSaved += 11.5;
        } else if (services.includes("Water Damage Build Back")) {
          quoteValue += 1175;
          timeSaved += 12;
        }

        quoteValue += 11 * squareFootage; 
  
        // alert(`Your quote is $${quoteValue} for ${days} and ${services}`);
        setQuoteValue(quoteValue)
        setTimeSaved(timeSaved)
      } catch (error) {
        console.error('Error calculating distance:', error);
      }
    } else {
      alert("Please fill out all required fields");
    }
  };
  

  return (
   <Container>
     <Typography variant="h5" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" } }} marginTop={2} color="#000000">
        Just 5 Easy Steps To Get A Quote
     </Typography>
     <Box>
      <Typography
        variant="body1"
        sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.3rem" } }}
        marginTop={2}
        color="#000000"
      >
        1. Select Services
      </Typography>
        <SelectServices handleServicesChange={handleServicesChange} selectedServices={selectedServices} setSelectedServices={setSelectedServices}/>
     </Box>
     <Box>
     <Typography
        variant="body1"
        sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.3rem" } }}
        marginTop={2}
        color="#000000"
      >
        2. Enter Address
      </Typography>
        <EnterAddress address={address} setAddress={setAddress}/>
        <EnterSquareFootage squareFootage={squareFootage} setSquareFootage={setSquareFootage}/>
     </Box>
     <Box>
      <Typography
          variant="body1"
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.3rem" } }}
          marginTop={2}
          color="#000000"
        >
          3. Select Time of Day Preference
        </Typography>
        <PickTimeDay selectedTime={timeOfDay} handleTimeChange={handleTimeChange} />
     </Box>
     <Box>
      <Typography
          variant="body1"
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.3rem" } }}
          marginTop={2}
          color="#000000"
        >
          4. Select Day of Week Preference
        </Typography>
        <PickDayOfWeek selectedDays={selectedDays} handleDayChange={handleDayChange}/>
      </Box>
     <Box>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.3rem" } }}
          marginTop={2}
          color="#000000"
        >
          5. Enter Contact Info
        </Typography>
        <ContactInfo name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} message={message} setMessage={setMessage}/>
     </Box>
     <Box sx={{paddingTop: "25px", paddingBottom: "25px"}}>
        <Button 
          variant="contained"
          onClick={() => generateQuote()}  
          sx={{
            fontSize: "1.2rem",
            padding: "12px 24px",
            borderRadius: "8px",
          }}
        >
          Generate Instant Quote
        </Button>
     </Box>
    <Box sx={{ paddingTop: "25px", paddingBottom: "25px" }}>
        {quoteValue !== 0 && (
          <Box sx={{ textAlign: "center", marginTop: "20px" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#000000",
              }}
            >
              Your Quote: ${quoteValue}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem", lg: "1.1rem" }, marginTop: "10px" }}
            >
              You saved over ${quoteValue*.25} and {timeSaved} hours!
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem", lg: "1.1rem" }, marginTop: "10px" }}
            >
              To capture these savings, give us a call now.
              {/* <a href={`mailto:youremail@example.com?subject=Quote&body=Your quote is $${quoteValue}`}>email me a copy of this quote</a> */}
            </Typography>
            <Typography 
              variant="body1"
              sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.5rem", lg: "1.5rem" }, marginTop: "10px" }}
            >
              (512) 456-7890
            </Typography>
          </Box>
        )}
    </Box>


   </Container>
  );
}