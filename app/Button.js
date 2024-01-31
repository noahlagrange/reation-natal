import { TouchableOpacity } from "react-native"

export default function Button() {
    return (
            <TouchableOpacity onPress={() => {
            console.log('bonjour'); }}>
            Button
    </TouchableOpacity>
    )
}