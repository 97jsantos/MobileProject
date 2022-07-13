import { useEffect, useState } from "react"
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import tw from 'twrnc'

import { Button } from '../components/Button'


export function Regioes({ navigation }: any) {

    const [ regioes, setRegioes ] = useState([])

    useEffect(() => {
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setRegioes(data)
                console.log(data)
            })
            .catch((err) => console.log(err))
    },[])

    return (
        <ScrollView>
            <View style={tw`flex justify-center items-center`}>
                {regioes.map((regiao:any) => (
                    <Button
                    key={regiao.id}
                    estado={regiao.nome}
                    sigla={regiao.sigla}
                    onPress={() => navigation.navigate('Estados', {id: regiao.id})}/>
                ))}
            </View>
        </ScrollView>
    )
}