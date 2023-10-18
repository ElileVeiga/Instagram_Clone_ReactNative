import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,

} from 'react-native';

import {
    User2,
    Lock,
    PlusSquare,
    AlignJustify,
    Search,
    Heart,
    UserCircle2,
    AtSign,
    Home,
    Compass,
    Film,
    Zap,
    Send,
    Bookmark,
    MessageCircle,
} from 'lucide-react-native';

import Buttom_Tabs_Component from '../../components/Buttom_Tabs_Component/Buttom_Tabs_Component';

function Instagram_Clone(User, props) {
    return (
        <View style={styles.Container}>
            <View
                style={styles.Left}
            >
                <Image
                    style={styles.Logo_Instagram}
                    source={require('../../../assets/Untitled.png')}
                />
                <View
                    style={styles.Left_Menu}
                >
                    <View style={styles.Item_Menu}>
                        <View
                            style={styles.Icons_Menu}
                        >
                            <Home />
                        </View>
                        <TouchableOpacity
                            style={styles.Text_Menu}
                        >Pagina Inicial</TouchableOpacity>
                    </View>
                    <View
                        style={styles.Item_Menu}
                    >
                        <View
                            style={styles.Icons_Menu}
                        >
                            <Search />
                        </View>
                        <TouchableOpacity
                            style={styles.Text_Menu}
                        >Pesquisa</TouchableOpacity>
                    </View>
                    <View
                        style={styles.Item_Menu}
                    >
                        <View
                            style={styles.Icons_Menu}
                        >
                            <Compass />
                        </View>
                        <TouchableOpacity
                            style={styles.Text_Menu}
                        >Explorar</TouchableOpacity>
                    </View>
                    <View
                        style={styles.Item_Menu}
                    >
                        <View
                            style={styles.Icons_Menu}
                        >
                            <Film />
                        </View>
                        <TouchableOpacity
                            style={styles.Text_Menu}
                        >Reels</TouchableOpacity>
                    </View>
                    <View
                        style={styles.Item_Menu}
                    >
                        <View
                            style={styles.Icons_Menu_Zap}
                        >
                            <Zap />
                        </View>
                        <TouchableOpacity
                            style={styles.Text_Menu}
                        >Mensagens</TouchableOpacity>
                    </View>
                    <View
                        style={styles.Item_Menu}
                    >
                        <View
                            style={styles.Icons_Menu}
                        >
                            <Heart />
                        </View>
                        <TouchableOpacity
                            style={styles.Text_Menu}
                        >Notificações</TouchableOpacity>
                    </View>
                    <View
                        style={styles.Item_Menu}
                    >
                        <View
                            style={styles.Icons_Menu}
                        > <PlusSquare /> </View>
                        <TouchableOpacity
                            style={styles.Text_Menu}
                        >Criar</TouchableOpacity>
                    </View>
                    <View
                        style={styles.Item_Menu}
                    >
                        <View
                            style={styles.Icons_Menu}
                        >
                            <UserCircle2 />
                        </View>
                        <TouchableOpacity
                            style={styles.Text_Menu}
                        >Perfil</TouchableOpacity>
                    </View>
                </View>
                <View
                    style={styles.Two_Menu}
                >
                    <View
                        style={styles.Item_Menu}
                    >
                        <View
                            style={styles.Icons_Menu}
                        >
                            <AtSign />
                        </View>
                        <TouchableOpacity
                            style={styles.Text_Menu}
                        >Threads</TouchableOpacity>
                    </View>
                    <View
                        style={styles.Item_Menu}
                    >
                        <View
                            style={styles.Icons_Menu}
                        >
                            <AlignJustify />
                        </View>
                        <TouchableOpacity
                            style={styles.Text_Menu}
                        >Mais</TouchableOpacity>
                    </View>
                </View>
            </View>
            <View
                style={styles.Center}
            >
                <View style={styles.Story_Center}>
                    <View style={styles.Profile}>
                        <View style={styles.Circle_Center}></View>
                        <Text>Teste</Text>
                    </View>
                    <View style={styles.Profile}>
                        <View style={styles.Circle_Center}></View>
                        <Text>Teste</Text>
                    </View>
                    <View style={styles.Profile}>
                        <View style={styles.Circle_Center}></View>
                        <Text>Teste</Text>
                    </View>
                    <View style={styles.Profile}>
                        <View style={styles.Circle_Center}></View>
                        <Text>Teste</Text>
                    </View>
                    <View style={styles.Profile}>
                        <View style={styles.Circle_Center}></View>
                        <Text>Teste</Text>
                    </View>
                    <View style={styles.Profile}>
                        <View style={styles.Circle_Center}></View>
                        <Text>Teste</Text>
                    </View>
                    <View style={styles.Profile}>
                        <View style={styles.Circle_Center}></View>
                        <Text>Teste</Text>
                    </View>
                </View>
                <View style={styles.Feed}>
                    <View style={styles.Publicate}>
                        <View style={styles.Circle_Profile}></View>
                        <Text>Teste</Text>
                        <Text>2 h</Text>
                        <View style={styles.Hamburguer}>
                            <View style={styles.Poiter}></View>
                            <View style={styles.Poiter}></View>
                            <View style={styles.Poiter}></View>
                        </View>
                    </View>
                    <View style={styles.Image}></View>
                    <View style={styles.Acotions}>
                        <View style={styles.Acotions_left}>
                            <Heart />
                            <MessageCircle />
                            <Send />
                        </View>
                        <View style={styles.Acotions_right}>
                            <Bookmark />
                        </View>
                    </View>
                    <View style={styles.Like}>
                        <Text>Curtido por</Text>
                        <Text style={{fontWeight:500}}>Teste</Text>
                        <Text>e</Text>
                        <Text style={{fontWeight:500}}>outras pessoas</Text>
                    </View>
                    <View style={styles.Coments}>
                        <Text style={{fontWeight:500}}>Teste</Text>
                        <Text>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI...</Text>
                        <Text>mais</Text>
                    </View>
                </View>
            </View>
            <View
                style={styles.Right}
            >
                <View style={styles.Right_Profile}>
                    <View style={styles.Right_Profile_Image}></View>
                    <View>
                    <Text style={{fontWeight:500}}>Teste</Text>
                    <Text>@teste123</Text>
                    </View>
                    <Text style={{color:'blue', marginLeft:150}}>Mudar</Text>
                </View>
                <View style={styles.Sugestion}>
                    <Text>Sugestões para você</Text>
                    <Text style={{marginLeft:150, fontWeight:500}}>ver tudo</Text>
                </View>
                <View style={styles.Right_Profile}>
                    <View style={styles.Right_Profile_Image}></View>
                    <View>
                    <Text style={{fontWeight:500}}>Teste</Text>
                    <Text>@teste123</Text>
                    </View>
                    <Text style={{color:'blue', marginLeft:150}}>Seguir</Text>
                </View>
                <View style={styles.Right_Profile}>
                    <View style={styles.Right_Profile_Image}></View>
                    <View>
                    <Text style={{fontWeight:500}}>Teste</Text>
                    <Text>@teste123</Text>
                    </View>
                    <Text style={{color:'blue', marginLeft:150}}>Seguir</Text>
                </View>
                <View style={styles.Right_Profile}>
                    <View style={styles.Right_Profile_Image}></View>
                    <View>
                    <Text style={{fontWeight:500}}>Teste</Text>
                    <Text>@teste123</Text>
                    </View>
                    <Text style={{color:'blue', marginLeft:150}}>Seguir</Text>
                </View>
                <View style={styles.Right_Profile}>
                    <View style={styles.Right_Profile_Image}></View>
                    <View>
                    <Text style={{fontWeight:500}}>Teste</Text>
                    <Text>@teste123</Text>
                    </View>
                    <Text style={{color:'blue', marginLeft:150}}>Seguir</Text>
                </View>
                <Text style={styles.Text_descriptions1}>Sobre - Ajuda - Imprensa - API - Carreiras - Privacidade</Text>
                <Text style={styles.Text_descriptions2}>Termos - Localizações - Idioma - Meta Verified</Text>
                <Text style={styles.Text_end}>© 2023 INSTAGRAM FROM META</Text>
            </View>
        </View>
    );
}

export default Instagram_Clone;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    Left: {
        height: '100%',
        width: 300,
        borderWidth: 1,
        borderColor: '#D0D4CA'
    },
    Logo_Instagram: {
        marginLeft: 30,
        marginTop: 20,
        width: 80,
        height: 30
    },
    Left_Menu: {
        marginTop: 100,
        marginLeft: 30,
    },
    Item_Menu: {
        marginVertical: 10,
        flexDirection: 'row'
    },
    Icons_Menu: {
        width: 20,
        height: 20
    },
    Icons_Menu_Zap: {
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#000',
        width: 20,
        height: 20
    },
    Text_Menu: {
        marginLeft: 10,
        fontWeight: '480',
        fontSize: 18
    },
    Two_Menu: {
        marginTop: 350,
        marginLeft: 30,
    },
    Center: {
        height: '100%',
        width: 600,
        borderWidth: 1,
        borderColor: '#D0D4CA',
    },
    Story_Center: {
        marginLeft: 30,
        marginTop: 30,
        gap: 20,
        flexDirection: 'row',
        height: 60,
    },
    Profile: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    Circle_Center: {
        borderWidth: 3,
        borderColor: '#000',
        backgroundColor: 'red',
        width: 60,
        height: 60,
        borderRadius: 60,
    },
    Feed: {
        marginTop: 50,
        marginHorizontal: 50
    },
    Publicate: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5
    },
    Circle_Profile: {
        borderWidth: 2,
        borderColor: '#000',
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor: 'red'
    },
    Hamburguer: {
        flexDirection: 'row',
        gap: 3,
        marginLeft: 380
    },
    Poiter: {
        backgroundColor: "#000",
        width: 5,
        height: 5,
        borderRadius: 10,
    },
    Image: {
        marginTop: 20,
        width: 500,
        height: 580,
        backgroundColor: 'red'
    },
    Acotions: {
        marginTop:20,
        marginBottom:20,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    Acotions_left:{
        flexDirection:'row',
        gap:15,
        marginLeft:5
    },
    Like:{
        gap:5,
        flexDirection:'row'
    },
    Coments:{
        gap:5,
        flexDirection:'row',
        flexWrap:'wrap',
    },
    Right: {
        height: '100%',
        width: 380,
        borderWidth: 1,
        paddingTop:150,
        paddingLeft:30,
        borderColor: '#D0D4CA',
    },
    Right_Profile:{
        marginTop:10,
        marginBottom:10,
        gap:10,
        flexDirection:'row',
    },
    Right_Profile_Image:{
        backgroundColor:'red',
        width:40,
        height:40,
        borderRadius:50,
    },
    Sugestion:{
        marginTop:20,
        marginBottom:20,
        flexDirection:'row',
    },
    Text_descriptions1:{
        marginTop:30,
        fontSize:12,
    },
    Text_descriptions2:{
        fontSize:12
    },
    Text_end:{
        marginTop:20
    },
});
