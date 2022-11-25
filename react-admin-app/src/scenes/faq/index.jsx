import { Box, useTheme, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const mockFaqData = [
  {
    id: 1,
    summary: "An Imortant Question",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vel, consequatur atque, inventore fugiat voluptatem corrupti adipisci perspiciatis quod fuga sequi at nostrum nemo error culpa ex, debitis tempore beatae",
  },

  {
    id: 2,
    summary: "An Imortant Question",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vel, consequatur atque, inventore fugiat voluptatem corrupti adipisci perspiciatis quod fuga sequi at nostrum nemo error culpa ex, debitis tempore beatae",
  },

  {
    id: 3,
    summary: "An Imortant Question",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vel, consequatur atque, inventore fugiat voluptatem corrupti adipisci perspiciatis quod fuga sequi at nostrum nemo error culpa ex, debitis tempore beatae",
  },

  {
    id: 4,
    summary: "An Imortant Question",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vel, consequatur atque, inventore fugiat voluptatem corrupti adipisci perspiciatis quod fuga sequi at nostrum nemo error culpa ex, debitis tempore beatae",
  },

  {
    id: 5,
    summary: "An Final Question",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vel, consequatur atque, inventore fugiat voluptatem corrupti adipisci perspiciatis quod fuga sequi at nostrum nemo error culpa ex, debitis tempore beatae",
  },
];

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px"  sx={{ overflowY: "scroll", height: { xs: "130vh", sm: "100vh" } }} >
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      {mockFaqData?.map((faq) => (
        <Accordion key={faq.id} defaultExpanded >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {faq.summary}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>{faq.details}</AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
