import { DrawerScreenProps } from '@react-navigation/drawer'
//import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'

/* interface Props extends StackScreenProps<any, any> { }; */
interface Props extends DrawerScreenProps<any, any> { };

export const Pagina1Screen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button
                    title='Menu'
                    onPress={() => navigation.toggleDrawer()}
                />
            )
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>

            <Button
                title='Ir a pagina 2'
                onPress={() => navigation.navigate('Pagina2')}
            />
            <Text
                style={{
                    ...styles.title,
                    marginVertical: 20,
                    marginLeft: 5,
                    fontSize: 20
                }}
            >Navegar con argumentos</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6'
                    }}
                    onPress={() => navigation.navigate('Persona', {
                        id: 1,
                        nombre: 'Pedro'
                    })}
                >
                    <Text style={styles.botonGrandeTexto}>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427'
                    }}
                    onPress={() => navigation.navigate('Persona', {
                        id: 2,
                        nombre: 'Maria'
                    })}
                >
                    <Text style={styles.botonGrandeTexto}>Maria</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}
