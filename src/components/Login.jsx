import { Box, Button, Container, Input, Stack } from "@chakra-ui/react";

export const Login = () => {
    return (
        <>
        <Container maxW='md'>
            <Stack spacing={3}>
            <Box w='400px' h='40px' >
                <Input placeholder="enter email"/>
            </Box>
            <Box>
                <Input placeholder="enter password"/>
            </Box>
                <Button colorScheme="blue">Submit</Button>
            </Stack>
        </Container>
        </>
    );
}