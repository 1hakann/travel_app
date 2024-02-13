import { TextInput, Text, View, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./signin.style";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { WidthSpacer, HeightSpacer, ReuseableText, ReusebleButton } from "../../components";
import { Formik } from "formik";
import { signinSchema } from "../../utils/validations/signin.schema";

const Signin = () => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);

  const errorLogin = () => {
    Alert.alert("Invalid Form", "Please provide all required fields", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "Continue",
        onPress: () => {},
      },
      { defaultIndex: 1 },
    ]);
  };

  const login = async (values) => {
    setLoader(true);

    try {
      const endpoint = "http://localhost:5003/api/login";
      const data = values;

      const response = await axios.post(endpoint, data);
      if (response.status === 200) {
        setLoader(false);
        setResponseData(response.data);
        await AsyncStorage.setItem("id", JSON.stringify(responseData.id));
        await AsyncStorage.setItem("token", JSON.stringify(responseData.token));

      
        navigation.replace("Bottom");
      } else {
        Alert.alert("Error Logging in ", "Please provide valid credentials ", [
          {
            text: "Cancel",
            onPress: () => {},
          },
          {
            text: "Continue",
            onPress: () => {},
          },
          { defaultIndex: 1 },
        ]);
      }
    } catch (error) {
      Alert.alert(
        "Error ",
        "Oops, Error logging in try again with correct credentials",
        [
          {
            text: "Cancel",
            onPress: () => {},
          },
          {
            text: "Continue",
            onPress: () => {},
          },
          { defaultIndex: 1 },
        ]
      );
    } finally {
      setLoader(false);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={signinSchema}
        onSubmit={(value) => {
          login(values);
        }}
      >
        {({
          handleChange,
          touched,
          handleSubmit,
          values,
          errors,
          isValid,
          setFieldTouched,
        }) => (
          <View style={{ paddingTop: 30 }}>
            <View style={styles.wrapper}>
              <Text style={styles.label}>Email</Text>
              <View>
                <View
                  style={styles.inputWrapper(
                    touched.email ? COLORS.lightBlue : COLORS.lightGrey
                  )}
                >
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={20}
                    color={COLORS.gray}
                  />

                  <WidthSpacer width={10} />

                  <TextInput
                    placeholder='Enter email'
                    onFocus={() => { setFieldTouched('email') }}
                    onBlur={() => { setFieldTouched('email', "") }}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />

                </View>
                {touched.email && errors.email && (
                  <Text style={styles.errorMessage}>{errors.email}</Text>
                )}
              </View>
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.label}>Password</Text>
              <View>
                <View
                  style={styles.inputWrapper(
                    touched.password ? COLORS.lightBlue : COLORS.lightGrey
                  )}
                >
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={20}
                    color={COLORS.gray}
                  />

                  <WidthSpacer width={10} />

                  <TextInput
                    secureTextEntry={obsecureText}
                    placeholder='Enter password'
                    onFocus={() => { setFieldTouched('password') }}
                    onBlur={() => { setFieldTouched('password', "") }}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={{ flex: 1 }}
                  />


                  <TouchableOpacity onPress={() => {
                    setObsecureText(!obsecureText)
                  }}>
                    <MaterialCommunityIcons
                      name={obsecureText ? "eye-outline" : "eye-off-outline"}
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <HeightSpacer height={20} />

            <ReusebleButton
              onPress={isValid ? handleSubmit : errorLogin}
              btnText={"SIGN IN"}
              width={SIZES.width - 40}
              backgroundColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
            />

          </View>
        )}
      </Formik>
    </View>
  )
}

export default Signin