import React from 'react';
import { NativeBaseProvider, AspectRatio, Box, Center, Container, Flex, HStack, VStack, Stack, ZStack, Text, Image, Heading, Divider } from "native-base";

const Inicio = () => {
    return (
        <NativeBaseProvider>
            <Center w="100%" flex={1} bg="green.100" p="2">
                {/* Encabezado Principal */}
                <Heading mb="4" size="md" textAlign="center" color="green.500">
                    Componentes de NativeBase
                </Heading>
                {/* Sección de Imagen */}
                <Center w="75%" flex={1} bg="green.100" p="4">
                {/* Centrar el AspectRatio que contiene la imagen */}
                <AspectRatio ratio={16 / 9} w="90%" mb="150" borderRadius="lg">
                    <Image
                        source={require('../../assets/Rectangle60.png')} // Ruta relativa a tu archivo de imagen
                        alt="Imagen real"
                        borderRadius="lg" 
                    />
                </AspectRatio>
                <Divider my="4" />
            </Center>
                {/* Contenedor Simple */}
                <Box bg="primary.500" p="3" w="90%" borderRadius="lg" alignItems="center" mb="4">
                    <Text color="white">PASE DE LISTA </Text>
                </Box>
                <Divider my="4" />
                {/* Flex y HStack */}
                <VStack space={3} w="90%" alignItems="center" mb="4">
                    <Heading size="sm" color="secondary.500">Distribución Flex y HStack</Heading>
                    <Flex direction="row" justify="space-around" w="60%">
                        <Box bg="green.800" size="16" borderRadius="full" />
                        <Box bg="green.800" size="16" borderRadius="full" />
                        <Box bg="green.800" size="16" borderRadius="full" />
                    </Flex>
                    <HStack space={2} w="100%">
                        <Box bg="green.700" p="3" flex={1} borderRadius="lg" alignItems="center">
                            <Text color="white">GRUPO 1</Text>
                        </Box>
                        <Box bg="green.700" p="3" flex={1} borderRadius="lg" alignItems="center">
                            <Text color="white">GRUPO 2</Text>
                        </Box>
                    </HStack>
                </VStack>
                <Divider my="4" />        
            </Center>
        </NativeBaseProvider>
    );
};

export default Inicio;
