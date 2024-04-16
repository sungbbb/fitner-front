import { Box, Container, Stack } from "@chakra-ui/react";
import { testimonials } from "./data";
import { Testimonial } from "./Testimonial";
import { motion } from "framer-motion";

export const TestimonialWithRating = () => (
  <Box as="section" py={{ base: "16", md: "24" }}>
    <Container>
      <Stack
        direction={{ base: "column", lg: "row" }}
        align={{ base: "center", lg: "stretch" }}
        spacing="16"
      >
        {testimonials.map((testimonial, id) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              y: { duration: 1 },
              delay: id * 0.5,
            }}
          >
            <Testimonial key={id} {...testimonial} />
          </motion.div>
        ))}
      </Stack>
    </Container>
  </Box>
);
