// import * as React from 'react';
import { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';

export default function AccordionDash() {
  const [recommend,setRecommend] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/recommend/5')
    .then(res=> {console.log(res.data);setRecommend(res.data)})
    .catch(err=> console.log(err))
  }, []);

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>TEACUP AND SAUCER & ROSES REGE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          GREEN REGENCY TEACUP AND SAUCER
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header"
        >
          <Typography>JUMBO BAG</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          JUMBO BAG RED RETROSPOT
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>WOODLAND CHARLOTTE BAG</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          StrawBerry CHARLOTTE BAG
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}