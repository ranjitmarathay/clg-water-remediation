import { Button, Container } from "@mui/material";
import { useNavigate } from 'react-router-dom';


export default function GetQuoteButton(props){
  let navigate = useNavigate();

  if (props.footer){
    return ( 
      <Button variant="contained" color={props.color ? props.color : "success"} onClick={() => navigate('/quote')} sx={{ marginBottom: '20px', fontSize : '1.2rem' }}>
        Request a Quote
      </Button>
    )
  } else{
    return (
      <Container maxWidth="lg" sx={{ marginTop: 4, textAlign: "center" }}>
        <Button variant="contained" color={props.color ? props.color : "success"} onClick={() => navigate('/quote')} sx={{ marginBottom: '20px', fontSize : '1.2rem' }}>
          {props.text ? props.text : "Request A Quote"}
        </Button>
      </Container>
    )
  }
}
