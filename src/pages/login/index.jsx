import React, { useEffect, useState } from 'react';
import { Box, Flex, FormControl, FormLabel, Input, Image, Select, Button } from '@chakra-ui/react';


import Logo from "@/assets/img/logo.png";
import Main from "@/assets/img/login.png";

const Login = () => {
    const [users, setUsers] = useState();


    // Function to collect data
    const getApiData = async () => {
      const response = await fetch(
        "http://localhost:9000/students"
      ).then((response) => response.json())
  
      setUsers(response.results);
    };
  
    useEffect(() => {
      getApiData([]);
    }, []);

  return (
    <Box
    bgColor="secondary"
    fontFamily="mukta"
    >
        <Box 
        maxW="540px"
        minH="100vh"
        margin="auto"
        backgroundColor="background"
        position="relative"  
        >
            <Flex
            p="3rem 0"
            backgrounColor="background"
            display="flex"
            alignItems="center"
            justify="center"
            >
                <Flex
                display="flex"
                alignItems="center"
                justifyContent="center"
                paddingBottom="2px"
                >
                    <Image 
                    src={Logo} 
                    alt="" 
                    srcset="" 
                    />
                </Flex>
            </Flex>
            <Flex
            p="3rem 0"
            backgrounColor="background"
            display="flex"
            alignItems="center"
            justify="center"
            >
                <Flex
                display="flex"
                alignItems="center"
                justifyContent="center"
                paddingBottom="2px"
                >
                    <Image 
                    src={Main} 
                    alt="" 
                    srcset="" 
                    />
                </Flex>
            </Flex>
            <Flex
            backgroundColor="background"
            fontSize="1rem"
            fontWeight="700"
            pb="3rem"
            >
                <FormControl 
                id="form_Form" 
                display="grid"
                rowGap="24px"
                margin="0px 24px"
                >
                    <Box>
                        <FormLabel>Username</FormLabel>
                        <Select 
                        name="username" 
                        id="username_id"
                        className='theSelect'
                        width="100%"
                        background="#FFFFFF"
                        border="1px solid #CCCCCC"
                        borderRadius="8px"
                        height="3rem"
                        focusBorderColor='black'
                        mode="multiple"
                        >
                            <option value="" disable selected hidden>Pilih salah satu</option>
                            {users && 
                            users.map((user) => (
                                <option value = {user.nis}>{user.nis}    -   {user.nama}</option>
                            ))};
                        </Select>
                    </Box>
                    <Box>
                        <FormLabel>Password</FormLabel>
                        <Input 
                        class="Input" 
                        id="password_id"
                        placeholder='Masukkan Password'
                        type="password"
                        width="100%"
                        background="#FFFFFF"
                        border="1px solid #CCCCCC"
                        borderRadius="8px"
                        height="3rem"
                        focusBorderColor='black'
                        />
                    </Box>
                    <Box>
                        <Button
                        type="submit" 
                        variant="primary"
                        >
                            Login
                        </Button> 
                    </Box>
                </FormControl>
            </Flex>
        </Box>
    </Box>
  )
}

export default Login;