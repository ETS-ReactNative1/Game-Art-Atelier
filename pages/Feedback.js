import { sendEmail } from './SendEmail';
import React from 'react';
import { View, Button, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Feedback() {

    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');


    const doSending = () => {
        sendEmail(
            'henfriman.second@gmail.com', subject, content,
        {cc:'henfriman.second@gmail.com'}
        ).then(() => {
            console.log('Mail App Opened');
        });
    }
    
    return (
        <View style={styles.container}>
            <View style={{margin: 3, flex: 7, paddingLeft: 0}}>
                <Text style={{fontSize: 17, paddingLeft: 20}}>Would you like to send us feedback?</Text>
                <Text style={{fontSize: 17, paddingLeft: 20, paddingBottom: 30}}>Let us know!</Text>
                <Text style={{paddingLeft: 12, paddingBottom: 10}}>Step 1: Write your subject and message.</Text>
                <Text style={{paddingLeft: 12, paddingBottom: 10}}>Step 2: Press the Send button to open your mail application</Text>
                <Text style={{paddingLeft: 12}}>Step 3. Finish the sending process in your mail application.</Text>
            </View>
            <View style={{flex: 11}}>
                <Text style={{fontSize: 18}}>Subject</Text>
                <TextInput style={styles.textbox} placeholder="Subject"
                    onChangeText={subject => setSubject(subject)}/>
                <Text style={{fontSize: 18}}>Content</Text>
                <TextInput style={styles.textbox} placeholder="Content"
                    onChangeText={content => setContent(content)}/>
                <Ionicons style={{paddingLeft: '24%'}} 
                    name="mail-outline" 
                    size={40} 
                    color="red"
                    onPress={doSending}>
                </Ionicons>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: 100,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      flexDirection: 'row',
      padding: 100,
    },
    textbox: {
       fontSize: 18, 
       width: 200, 
       height: 100,
       borderWidth: 4,
       borderColor: '#9D2933',
       paddingLeft: 10,
       margin: 7
    },
});