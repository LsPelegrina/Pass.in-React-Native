import { Text, TouchableOpacity, ActivityIndicator, TouchableOpacityProps} from "react-native"

type Props = TouchableOpacityProps & {
  title: string
  isLoading?: boolean
}

export function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      disabled={isLoading}
      className="w-full h-14 bg-orange-500 items-center justify-center rounded-lg"
      {...rest}
    >
        { isLoading ? ( <ActivityIndicator className="text-green-500"/>
        ) : (
          <Text className="">{title}</Text>
        )}
    </TouchableOpacity>
  )
}