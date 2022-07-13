import { useEffect, useState } from 'react'
import { ScrollView, View, Text } from 'react-native'

import tw from 'twrnc'

export function Municipios({ route }: any) {

    const [ municipios, setMunicipios ] = useState([])

    const {id} = route.params

    useEffect(() => {
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/municipios", {
            method: "GET",
            headers: {
                'Content-Type':'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setMunicipios(data.filter((municipio: any) => municipio.microrregiao.mesorregiao.UF.id === id))
            })
            .catch((err) => console.log(err))
    })
    return (
        <ScrollView>
            <View style={tw`flex justify-center items-center my-5`}>
                {municipios.map((municipio:any) => (
                    <View style={tw`bg-blue-700 h-12 w-40 flex justify-center items-center rounded-lg mt-5 p-2`}>
                        <Text style={tw`text-white text-center`} key={municipio.id}>{municipio.nome}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}