import React, { Component } from "react";
import { View , Text , StyleSheet , Image,Dimensions , TouchableWithoutFeedback  } from "react-native";
import config from "../../config";


class Post extends Component{
 constructor(){
     super();
     this.state={
         liked: false,
       screenWidth:  Dimensions.get("window").width
     };
 }
   likeToggled(){
       this.setState({
        liked: !this.state.liked
       });
} 
 render() {
        const imageHeight=Math.floor(this.state.screenWidth*1.1);
        const imageSelection = this.props.item % 2 === 0 ? "https://wallpaperbrowse.com/media/images/4052451-images.jpg" : "https://wallpaperbrowse.com/media/images/4052451-images.jpg"
        const imageuri=imageSelection + imageHeight;
        const likeIconColor=this.state.liked ? "rgb(252,61,57)": null;
           return (
        <View style={{flex:1, width:"100%"}}>
                <View style={styles.userBar}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                <Image
                    style={styles.ProfilPict}
                    source = {{
                        uri:"https://images7.alphacoders.com/411/411820.jpg"
                    }}
                />
                 <Text style={{marginLeft:10}}>Uygulama Deneme</Text>
                </View>
                <View style={{alignItems:"center"}}>
                <Text style={{fontSize:28}}>...</Text></View>
                </View>
                <TouchableWithoutFeedback  
                onPress={()=>{
                   this.likeToggled();
                }}>
                <Image  style={{width:this.state.screenWidth, height: imageHeight}}
                source = {{
                    uri: imageuri
                }}
                />
                
                </TouchableWithoutFeedback>
                <View style={styles.iconBar}>
                
                    {/* tintColor değiştirilip iptal veya yok et yapılacak. */}
                        <View><Text style={styles.likedislike}>999</Text></View>
                    <Image style ={[styles.icon ,{tintColor:likeIconColor}] } source={config.images.likeIcon}/>
                        
                        <View><Text style={styles.likedislike}>999</Text></View>
                    <Image style ={styles.icon} source={config.images.chatIcon}/>
                        
                        <View><Text style={styles.likedislike}>999</Text></View>
                    <Image style ={styles.icon} source={config.images.likeIcon}/>
                    

                </View>
               </View>
        );
      }
}
const styles = StyleSheet.create({
    tempNav: { 
        width: 100 + "%",
        height: config.styleConstant.rowHeight,
        backgroundColor:"rgb(250,250,250)",
        borderBottomColor:"rgb(233,233,233)",
        borderBottomWidth:StyleSheet.hairlineWidth,
        justifyContent:"center",
        alignItems:"center"
    },
    userBar:{
        width:100+"%",
        height:50,
        backgroundColor: "rgb(255,255,255)",
        paddingHorizontal:10,
        flexDirection:"row",
        justifyContent : "space-between"
    },
   ProfilPict:{
    width:40,
    height:40,
    borderRadius:20,
   },
   iconBar:{
       height:config.styleConstant.rowHeight,
       width:100+"%",
       borderColor:"rgb(233,233,233)",
       borderTopWidth:StyleSheet.hairlineWidth,
       borderBottomWidth:StyleSheet.hairlineWidth,
       flexDirection:"row",
       justifyContent:"center"
      
   },
   icon:{
      paddingHorizontal:5,
      height:40,
      width:40,
      marginRight:22
   },
   likedislike:{
    height:config.styleConstant.rowHeight,
    flexDirection:"row",
    fontSize:18,
    paddingTop:7  
    
},
  });
export default Post;

