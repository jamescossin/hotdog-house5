import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, Heading, Text, HStack, IconButton, Link, Image } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="xl" color="red.600">Contact Hot Dog House</Heading>
          <Text fontSize="lg" color="gray.600">We'd love to hear from you!</Text>
        </Box>

        <Box>
          <Image 
            src="http://stock.calucid.com/fetch/calucid/hotdog-house5/restaurant-exterior" 
            alt="Hot Dog House Exterior" 
            borderRadius="md"
          />
        </Box>

        <Box bg="gray.100" p={6} borderRadius="md">
          <Heading as="h2" size="lg" color="red.600">Our Location</Heading>
          <Text fontSize="md" mt={2}>123 Main Street, YourTown, USA</Text>
          <Text fontSize="md">Phone: (123) 456-7890</Text>
          <Text fontSize="md">Email: <Link color="red.500" href="mailto:contact@hotdoghouse.com">contact@hotdoghouse.com</Link></Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" color="red.600">Follow Us</Heading>
          <HStack spacing={4} mt={2}>
            <IconButton as={Link} href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} size="lg" colorScheme="red" />
            <IconButton as={Link} href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} size="lg" colorScheme="red" />
            <IconButton as={Link} href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="red" />
          </HStack>
        </Box>

        <Box bg="gray.100" p={6} borderRadius="md">
          <Heading as="h2" size="lg" color="red.600">Get in Touch</Heading>
          <VStack spacing={4} mt={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your Name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your Email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your Message" />
            </FormControl>
            <Button colorScheme="red" size="lg">Send Message</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;