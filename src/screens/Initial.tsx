import { View } from "native-base";
import { InputText } from "../components/InputText/InputText";
import { getJokesOfTheWeek } from "../services/jokesService";

export function Initial() {
    getJokesOfTheWeek();

    return (
        <View
            backgroundColor={"white"}
            flex={1}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <InputText placeHolderText='Nome Completo' />
            <InputText placeHolderText='E-mail' />
            <InputText placeHolderText='Senha' />
            <InputText placeHolderText='Confirmar Senha' />
        </View>
    );
}
