import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';

export default function DashAccordion() {
  const [recommend,setRecommend] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/recommend/5')
    .then(res=> setRecommend(res.data))
    .catch(err=> console.log(err))
  }, []);

  const createAccordion = (item)=>{
    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{item.antecedents.split("'")[1]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {item.consequents.split("'")[1]}
          </Typography>
        </AccordionDetails>
      </Accordion>
    )
  }

  return (
    <div>
      {recommend.map((item)=>createAccordion(item))}
    </div>
  );
}