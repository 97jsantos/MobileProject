import { Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc'

interface ButtonProps {
    estado: any
    sigla: any
    onPress: any
}

export function Button({ estado, sigla, onPress }:ButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={tw`bg-blue-700 h-20 w-80 flex justify-center items-center rounded-xl mt-5`}>
            <Text style={tw`text-2xl text-white`}>{estado} - {sigla}</Text>
        </TouchableOpacity>
    )
}