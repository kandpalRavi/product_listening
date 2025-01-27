import { Box, Img, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import axios from "axios"
import { useEffect, useState } from "react"

export const Listening =()=>{
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=1&limit=20")
            .then((res)=>setData(res.data.data))
            .catch((e)=>alert(e))
    },[])
   

    console.log(data); 


    return (
        <>
            <SimpleGrid columns = {[1,2,4,4]} spacing = {10} >
                {
                    data && data.map((item)=>{
                        return(
                            <Box >
                                <Stack>
                                    <Img boxSize="100px" src={item.image}/>
                                    <Text>{item.brand}</Text>
                                    <Text>{item.category}</Text>
                                    <Text>{item.price}</Text>
                                    <Text>{item.title}</Text>
                                </Stack>
                            </Box>
                        )
                    })
                }
            </SimpleGrid>
        </>
    )
}