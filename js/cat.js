import React, {useState} from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ScrollView, Linking, WebView } from 'react-native';
import { NativeBaseProvider, Image, Button} from "native-base"; 

import { useNavigation } from "@react-navigation/native";

import {
  useFonts,
  PaytoneOne_400Regular
} from '@expo-google-fonts/paytone-one'
import {
  Roboto_400Regular,
} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';
//Freepik, Cute dog with books in bed, (n.d.). [Online]. Available: https://www.freepik.com/free-photo/cute-dog-with-books-bed_13402708.htm. [Accessed: 2- Oct- 2021].
import study_dog from "../assets/study_dog.jpg";
//McCann Dog Training, Puppy First Day Home Tips - Professional Dog Training Tips, 2018. [Online]. Available: https://www.youtube.com/watch?v=-_5xd0pSy28. [Accessed: 2- Oct- 2021].
import youtube1 from "../assets/yt1.jpg";
//Petco, 6 Tips for Bringing a New Cat Home (Petco), 2020. [Online]. Available: https://www.youtube.com/watch?v=-H0zq475mGA. [Accessed: 2- Oct- 2021].
import youtube2 from "../assets/yt2.jpg";
//In Ruff Company, How to PREP for a RESCUE DOG | What to Expect (FIRST NIGHT), 2020. [Online]. Available: https://www.youtube.com/watch?v=rMUPeTda69s. [Accessed: 2- Oct- 2021].
import youtube3 from "../assets/yt3.jpg";
//Howdini, Cat Adoption & Rescue: Tips for Adopting a Cat from a Shelter, 2012. [Online]. Available: https://www.youtube.com/watch?v=jPhGpktH56Q. [Accessed: 2- Oct- 2021].
import youtube4 from "../assets/yt4.jpg";


// import Iframe from 'react-iframe';
// import YoutubePlayer from 'react-native-youtube-iframe';




// Const for the Cat component, THIS IS FOR PAGE BASIC KNOWLEDGE 
const Cat = () => {
  const navigation = useNavigation();

    // contents boolean variable with useState function to be triggered by button click 
    //  "Example to Hide Show View  Component in React Native on button Click", Expo, 2021. [Online]. Available: https://snack.expo.dev/@kkevranian/example-to-hide-show-view-component-in-react-native-on-button-click. [Accessed: 21- Oct- 2021].
    const [content1, setContent1] = useState(false);
    const [content2, setContent2] = useState(true);

  let [fontsLoaded, error] = useFonts({
    Roboto_400Regular,
    PaytoneOne_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ScrollView>
     
      <NativeBaseProvider>
      
        
        <View >
            {/* Top image for the Basic Knowledge page */}
            <Image
            source={study_dog}
            style={{ height: 250}}
            alt="study_dog"
            />

            {/* container for main contents */}
            <View style={styles.cardbox} >

                                  
              <View style={styles.header}>
                <Text style={{fontSize:20, fontFamily: "PaytoneOne_400Regular", }}>Basic Knowledge
                    </Text>
              </View>

              {/* <Iframe width="560" height="315" src="https://www.youtube.com/embed/bdFJ4H3WL3Q" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></Iframe> */}
                
              {/* drop-down button to make the corresponding contents visible */}
              <TouchableOpacity style={styles.card} onPress={() => setContent1(!content1)} > 
                <Text style={styles.subt}>
                      Expenses
                  </Text>
              </TouchableOpacity>
              {content1 ?
                (
                  <View style={styles.paragraph}>
                        
                    <Text style={styles.tex1}>
                      Although adopting a pet will save you money when compared to buying from a breeder, it is necessary to consider the ongoing costs of owning a pet. Financial struggles is one of the main reasons people have to put their pet up for adoption, so consider if you are prepared for the expenses that come along with being a pet owner. Some of the potential costs you may encounter include:
    
                    </Text>
                    <Text style={styles.tex2}>
                        {'\u2022'} food & toys {"\n"}
                        {'\u2022'} vaccinations and medications  {"\n"}
                        {'\u2022'} vet appointments {"\n"}
                        {'\u2022'} pet insurance (optional) {"\n"}
                        {'\u2022'} council registration {"\n"}
                        {'\u2022'} grooming & training  {"\n"}
                        {'\u2022'} health conditions related to particular breeds {"\n"}
    
                    </Text>
    
                    <Text style={styles.tex1}>
                    In the first year alone, a cat or dog will cost you between $3,000 and $6,000. After your first year together expect to pay at least $1,627 each year for a dog and $962 each year for a cat.
                    (Source: Pet Ownership in Australia report, Animal Medicines Australia) {"\n"}
    
                    For further financial advice, consult the   
                    <Text style={{color: '#6495ed',fontWeight:'500'}}
                          onPress={() => Linking.openURL('https://moneysmart.gov.au/getting-a-pet')}>
                            {' '} Australian Money Smart website {"\n"}{"\n"}
                    </Text>
                  
    
                    </Text>
    
    
                  </View>
                ) : null}

              
              
              {/* drop-down button to make the corresponding contents visible */}
              <TouchableOpacity style={styles.card} onPress={() => setContent2(!content2)} > 
                <Text style={styles.subt}>
                     Bringing them home
                  </Text>
              </TouchableOpacity>
              {content2 ?
                (
                  <View style={styles.paragraph}>
                        
                        <Text style={styles.tex1}>
                  During the first few days can be a stressful time for both you and your new pet as you learn more about each other and start establishing routines. Here are some videos to get you started on preparing for your new family member:
                </Text>

                <Text style={{fontSize: 14, fontWeight: "bold", color: "#777",}}> 
                   {"\n   "}LINK TO YOUTUBE VIDEOS
                   {"\n"} {"\n"}
                 </Text>
                  
                  {/* Youtube link with corresponding youtube thumbnails */}
                  {/* "Puppy First Day Home Tips - Professional Dog Training Tips", Youtube, 2018. [Online]. Available: https://www.youtube.com/watch?v=-_5xd0pSy28. [Accessed: 27- Oct- 2021]. */}
                 <TouchableOpacity style={styles.imgbox} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=-_5xd0pSy28')} > 
                  <Image
                    source={youtube1}
                    style={{ height: 180, width: 300 }}
                    alt="youtube video link1"
                    
                    />
                  <Text style={{color: '#6495ed',fontWeight:'500'}}
                        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=-_5xd0pSy28')}>
                         Puppy First Day Home Tips {"\n"}{"\n"}
                  </Text>

                 </TouchableOpacity>
                  
                 {/* "6 Tips for Bringing a New Cat Home", Youtube, 2014. [Online]. Available: https://www.youtube.com/watch?v=-_5xd0pSy28. [Accessed: 27- Oct- 2021]. */}
                 <TouchableOpacity style={styles.imgbox} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=-H0zq475mGA')} > 
                  <Image
                    source={youtube2}
                    style={{height: 180, width: 300 }}
                    alt="youtube video link2"
                    
                    />
                    <Text style={{color: '#6495ed',fontWeight:'500'}}
                        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=-H0zq475mGA')}>
                           6 Tips for Bringing a New Cat Home {"\n"}{"\n"}
                  </Text>
                 </TouchableOpacity>

                 {/* "How to PREP for a RESCUE DOG | What to Expect (FIRST NIGHT)", Youtube, 2020. [Online]. Available: https://www.youtube.com/watch?v=rMUPeTda69s. [Accessed: 27- Oct- 2021]. */}
                 <TouchableOpacity style={styles.imgbox} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=rMUPeTda69s')} > 
                  <Image
                    source={youtube3}
                    style={{ height: 180, width: 300}}
                    alt="youtube video link3"
                  />
                   <Text style={{color: '#6495ed',fontWeight:'500'}}
                        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=rMUPeTda69s')}>
                          How to prepare for a RESCUE DOG {"\n"}{"\n"}
                  </Text>
                 </TouchableOpacity>

                 {/* "Cat Adoption & Rescue: Tips for Adopting a Cat from a Shelter", Youtube, 2012. [Online]. Available: https://www.youtube.com/watch?v=jPhGpktH56Q. [Accessed: 27- Oct- 2021]. */}
                 <TouchableOpacity style={styles.imgbox} onPress={() => Linking.openURL('https://www.youtube.com/watch?v=jPhGpktH56Q')} > 
                    <Image
                      source={youtube4}
                      style={{ height: 180, width: 300 }}
                      alt="youtube video link4"
                    />
                    <Text style={{color: '#6495ed',fontWeight:'500'}}
                          onPress={() => Linking.openURL('https://www.youtube.com/watch?v=jPhGpktH56Q')}>
                           Tips for Adopting a Cat from a Shelter {"\n"}{"\n"}
                    </Text>
                 </TouchableOpacity>
                 

               
    
                  </View>
                ) : null}


              

            </View>
            

            
            
        </View>
      

      </NativeBaseProvider>
    </ScrollView>



  );
};

//style sheet for View, texts, touchoubleobject, etc..
const styles = StyleSheet.create({
  cardbox: {

    alignItems: 'center',
    justifyContent: 'flex-start', 
    paddingLeft: 10,
    paddingRight: 10
    
  },
  paragraph: {
    textAlign: "left",
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    color: "#545871",
    width: 300,
  },
  header: {
    textAlign: "center",
    padding: 10,
    
  },  
  subt: {
    fontSize: 14,
    fontWeight: "bold",
    width:290,
    
  },
  tex1: {
    color: "#777", 
    paddingTop: 5, 
    paddingLeft: 5,
    
  },
  tex2: {
    color: "#777", 
    paddingTop: 5, 
    paddingLeft: 15,
    
  }, 
  card: {
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#DDDDDD",
    
  },
  imgbox: {
    alignItems: 'center',
    justifyContent: 'flex-start', 
    // paddingLeft: 10,
    // paddingRight: 10
  },
 
 
});

export default Cat;
