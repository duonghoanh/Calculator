import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ButtonCalculator from '../ButtonCalculator';
import CalculatorDisplay from '../CalculatorDisplay';



export default function CalculatorScreen() {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         display: "",
    //     };
    // }
    // render() {        
    const [resultText, setResultText] = useState("");
    const [calcText, setCalcText] = useState("");
    const onButtonClick = (text) => {
        console.log(text)

        setResultText(resultText + text);
    };
    const onOperationClick = (text) => {
        let operation = ["C", "+", "-", "*", "÷", "%"];
        if (text == "C") {
            setResultText("");
            setCalcText("");
            return;
        }
        if (text == "⇐") {
            return setResultText(resultText.toString().substring(0, resultText.length - 1))
        }
        if (text == "=") {
            return resultAnswer();
        }
        if (operation.includes(resultText.toString().split("").pop())) return;
        console.log(text);
        setResultText(resultText + text);
    };
    const resultAnswer = () => {
        setCalcText(eval(resultText))
    }

    return (
        //View tổng

        <View style={styles.container}>
            <View style={styles.displayContainer}>
                {/* <CalculatorDisplay display={this.state.display} /> */}
                <View style={styles.displayView}>
                    <Text style={styles.displayText}>
                        {resultText}
                    </Text>
                </View>
                <View style={styles.displayReturn}>
                    <Text style={styles.displayText}>
                        {calcText}
                    </Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => onOperationClick("C")} style={styles.viewTouchableOpacity}><Text style={styles.textNumber}>C </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => onOperationClick("%")} style={styles.viewTouchableOpacity}><Text style={styles.textNumber}>% </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => onOperationClick("⇐")} style={styles.viewTouchableOpacity}><Text style={styles.textNumber}>◀ </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => onOperationClick("/")} style={styles.viewTouchableOpacity}><Text style={[styles.textNumber, { color: "#69fff0" }]}>÷ </Text></TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => onButtonClick("7")} style={styles.viewTouchableOpacity}><Text style={styles.textNumber}>7 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => onButtonClick("8")} style={styles.viewTouchableOpacity}><Text style={styles.textNumber}>8 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => onButtonClick("9")} style={styles.viewTouchableOpacity}><Text style={styles.textNumber}>9 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => onOperationClick("*")} style={styles.viewTouchableOpacity}><Text style={[styles.textNumber, { color: "#69fff0" }]}>× </Text></TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => onButtonClick("4")} style={styles.viewTouchableOpacity}><Text style={styles.textNumber}>4 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => onButtonClick("5")} style={styles.viewTouchableOpacity}><Text style={styles.textNumber}>5 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => onButtonClick("6")} style={styles.viewTouchableOpacity}><Text style={styles.textNumber}>6 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => onOperationClick("-")} style={styles.viewTouchableOpacity}><Text style={[styles.textNumber, { color: "#69fff0" }]}>- </Text></TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => onButtonClick("1")} style={styles.viewTouchableOpacity}><Text style={styles.textNumber}>1 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => onButtonClick("2")} style={styles.viewTouchableOpacity}><Text style={styles.textNumber}>2 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => onButtonClick("3")} style={styles.viewTouchableOpacity}><Text style={styles.textNumber}>3 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => onOperationClick("+")} style={styles.viewTouchableOpacity}><Text style={[styles.textNumber, { color: "#69fff0" }]}>+ </Text></TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => onButtonClick("00")} style={styles.viewTouchableOpacity}><Text style={styles.textNumber}>00 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => onButtonClick("0")} style={styles.viewTouchableOpacity}><Text style={styles.textNumber}>0 </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => onButtonClick(".")} style={styles.viewTouchableOpacity}><Text style={styles.textNumber}>, </Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => onOperationClick("=")} style={styles.viewTouchableOpacity}><Text style={[styles.textNumber, { color: "#69fff0" }]}>= </Text></TouchableOpacity>
                </View>
                {/* <View style={styles.button}>
                        <ButtonCalculator onPress={()=>this.onButtonClick} title="C" color="#7492f2" backgroundColor="#e9f5f4" />
                        <ButtonCalculator title="%" color="#7492f2" backgroundColor="#e9f5f4" />
                        <ButtonCalculator title="◀" color="#7492f2" backgroundColor="#e9f5f4" />
                        <ButtonCalculator title="÷" color="#7492f2" backgroundColor="#e9f5f4" />

                    </View>
                    <View style={styles.button}>
                        <ButtonCalculator  title="7" onPress={()=>this.onButtonClick} color="#7492f2" backgroundColor="#e9f5f4" />
                        <ButtonCalculator title="8" color="#7492f2" backgroundColor="#e9f5f4" />
                        <ButtonCalculator title="9" color="#7492f2" backgroundColor="#e9f5f4" />
                        <ButtonCalculator title="×" color="#7492f2" backgroundColor="#e9f5f4" />

                    </View>
                    <View style={styles.button}>
                        <ButtonCalculator title="4" color="#7492f2" backgroundColor="#e9f5f4" />
                        <ButtonCalculator title="5" color="#7492f2" backgroundColor="#e9f5f4" />
                        <ButtonCalculator title="6" color="#7492f2" backgroundColor="#e9f5f4" />
                        <ButtonCalculator title="-" color="#7492f2" backgroundColor="#e9f5f4" />

                    </View>
                    <View style={styles.button}>
                        <ButtonCalculator title="1" color="#7492f2" backgroundColor="#e9f5f4" />
                        <ButtonCalculator title="2" color="#7492f2" backgroundColor="#e9f5f4" />
                        <ButtonCalculator title="3" color="#7492f2" backgroundColor="#e9f5f4" />
                        <ButtonCalculator title="+" color="#7492f2" backgroundColor="#e9f5f4" />

                    </View>
                    <View style={styles.button}>
                        <ButtonCalculator title="00" color="#7492f2" backgroundColor="#e9f5f4" />
                        <ButtonCalculator title="0" color="#7492f2" backgroundColor="#e9f5f4" />
                        <ButtonCalculator title="," color="#7492f2" backgroundColor="#e9f5f4" />
                        <ButtonCalculator title="=" color="#7492f2" backgroundColor="#e9f5f4" />

                    </View> */}
            </View>
        </View>
    );
}
//}
const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: "space-between",
        // userSelect:'none', 
    },

    buttonContainer: {
        marginBottom: 5,


        backgroundColor: "#e9f5f4",

    },

    displayContainer: {
        flex: 1,
        justifyContent: "flex-end",
    },

    container: {
        //flex: 1,
        backgroundColor: 'white',
        width: "100%",
        height: "100%",
        justifyContent: "flex-end"
    },

    viewTouchableOpacity: {
        alignItems: 'center',
        justifyContent: "space-between",
        width: "25%",
        height: 70,
    },

    textNumber: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    displayView: {
        backgroundColor: '#dbfffb',
        height: "70%",
        marginTop: 10,
        paddingTop: 15,
    },

    displayText: {
        textAlign: "right",
        fontSize: 50,
        color: 'black'

    },
    displayReturn: {
        height: "30%",
        backgroundColor: '#ffffff',


    }

})