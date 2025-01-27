import { Box, Button, Container, Input, Spinner, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit =()=>{
        setIsLoading(true);
        setTimeout(()=>{
            setIsLoading(false);
            navigate("/listening")
        },1500);
    };

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
                <Button colorScheme="blue" onClick={handleSubmit}>Submit
                    {isLoading && <Spinner size="xs" ml="4" />}
                </Button>
            </Stack>
        </Container>
        </>
    );
}