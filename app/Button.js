import { TouchableOpacity } from "react-native"

export default function Button() {
    return (
        <view>
            <TouchableOpacity onPress={() => {
            console.log('bonjour'); }}>
            Button
    </TouchableOpacity>
        </view>
    )
}