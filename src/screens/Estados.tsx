import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import { Button } from "../components/Button";

import tw from 'twrnc'

export function Estados({ route, navigation }: any) {

    const [ estados, setEstados ] = useState([])

    const { id } = route.params

    useEffect(() => {
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setEstados(data.filter((estado: any) => estado.regiao.id === id))
            })
            .catch((err) => console.log(err))
    })
    return (
        <ScrollView>
            <View style={tw`flex justify-center items-center my-10`}>
                {estados.map((estado:any) => (
                    <Button
                    key={estado.id}
                    estado={estado.nome}
                    sigla={estado.sigla}
                    onPress={() => navigation.navigate('Municipios', {id: estado.id})}/>
                ))}
            </View>
        </ScrollView>
    )
}
