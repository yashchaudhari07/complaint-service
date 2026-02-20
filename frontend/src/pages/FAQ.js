import React from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../components/Header';
import Footer from '../components/Footer';

const faqs = [
  {
    question: 'How do I submit a complaint?',
    answer:
      'You can submit a complaint by navigating to the "Submit Complaint" page from your dashboard. Fill in the required details, and click "Submit".',
  },
  {
    question: 'How can I track the status of my complaint?',
    answer:
      'You can track the status of your submitted complaints on the "My Complaints" page. The status of each complaint will be displayed next to it.',
  },
  {
    question: 'What do the different complaint statuses mean?',
    answer:
      'The statuses indicate the current stage of your complaint: "Pending" (awaiting review), "In Progress" (being addressed), "Resolved" (action taken), or "Rejected" (invalid or duplicate).',
  },
  {
    question: 'Can I add more information to a complaint after submitting it?',
    answer:
      'Once a complaint is submitted, you cannot edit it directly. However, you can add comments or updates by viewing the complaint details.',
  },
];

const FAQ = () => {
  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Box>
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default FAQ;
