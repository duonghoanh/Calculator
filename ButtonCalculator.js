// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// export default class ButtonCalculator extends React.Component {
//     static defaultProps = {
//         onPress: function (text) {this.props.text },
//         title: "",
//         color: 'red',
//         backgroundColor: '#c6f7f4',
//     }
//     render() {
//         var bt = this.props.backgroundColor;
//         return (
//             <TouchableOpacity onPress={this.props.onPress} style={[styles.container, { backgroundColor: bt }]}>
//                 <Text style={[styles.text, { color: this.props.color }]}  >
//                     {this.props.title}
//                 </Text>
//             </TouchableOpacity>
//         );
//     }

// }
// const styles = StyleSheet.create({
//     container: {
//         alignItems: 'center',
//        justifyContent:"space-between",
//         width: "25%",
//         height: 70,
//         // margin:1,
//         // backgroundColor:'#aef2d7',
//     },
//     text: {

//         fontSize: 30,
//         fontWeight: 'bold',
//     }
// })