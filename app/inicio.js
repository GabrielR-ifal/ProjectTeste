import { Text, SafeAreaView, StyleSheet, View, Image } from 'react-native';

// You can import supported modules from npm


// or any files within the Snack

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.partezinha}></View>
        <View style={styles.partesuperior}>
          <View style={styles.partesuperiorinterna}>
            <Image source={require('../assets/LogodoHS.png')} style={styles.logo}/>
            <Image source={require('../assets/botaoposts.png')} style={styles.image}/>
            <Image source={require('../assets/chataovivo.png')} style={styles.image}/>
            <Image source={require('../assets/inicio.png')} style={styles.image}/>
            <Image source={require('../assets/botaoconfiguracoes.png')} style={styles.image}/>
          </View>
      </View>

      <View>
        <View style={styles.notif}>
          <Text style={{color:'white'}}>Notificações</Text>
        </View>
        <View style={styles.bloco}>
          <View style={styles.divbesouro}>
          <Image style={styles.imagem} source={require('../assets/besouro.jpeg')}/>
            <Text>Besouro177 lhe mencionou em um post!!</Text>
          </View>

          <View style={styles.divbesouro}>
          <Image style={styles.imagem} source={require('../assets/besouro.jpeg')}/>
            <Text>Besouro177 curtiu seu post mais recente!!</Text>
          </View>
        </View>
      </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  notif: {
    // paddingTop: 15,
    alignItems:'center',
    marginTop: 15,
    //paddingBottom: 20,
    marginLeft: 5,
    backgroundColor: 'purple',
    height: 20,
    width: 150,
    borderRadius: 50,
  },
  bloco: {
    paddingLeft: 15,
    //flex: 0,
    gap: 15,
  },
  divbesouro: {
    // width: '295px',
    borderRadius: 5,
    backgroundColor: 'lightgray',
   // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingLeft: 10,
  },
  imagem: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  logo: {
    // height: '88px',
    // width: '88px',
    borderRightWidth: 5,
    borderRightColor: 'white',
  },
  image: {
    // height: '40px',
    // width: '46px',
    borderRightWidth: 3,
    borderRightColor: 'white',
  },
  partesuperiorinterna: {
    //flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
  },
  partesuperior: {
    backgroundColor: 'purple',
    borderRadius: 10,
    // height: '100px',
    // width: 100,
    //marginTop: '-13px',
  },
  partezinha: {
    backgroundColor: 'purple',
    // width: 100,
    // height: '25px',
  },
  container: {
    backgroundColor: 'white',
    padding: 8,
  },
  // paragraph: {
  //   margin: 24,
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
});

