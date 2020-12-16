import React, { useRef, useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { navigate } from "gatsby";
import { gql, useMutation, useQuery } from "@apollo/client";
import Header from '../components/Header';
import Lolly from '../components/Lolly';

const createLollyMutation = gql`
  mutation createLolly($recipientName: String!, $message: String!, $senderName: String!, $flavourTop: String!, $flavourMiddle: String!,$flavourBottom: String!) {
    createLolly(recipientName: $recipientName, message: $message, senderName: $senderName, flavourTop: $flavourTop, flavourMiddle: $flavourMiddle,flavourBottom: $flavourBottom) {
        message
        lollyPath
    }
  }
`
const initialValues = {
  to: "",
  message: "",
  from: "",
};

export default function CreateNew() { 
  const [flavours, setFlavours] = useState({
    flavourTop: "#d52358",
    flavourMiddle: "#e95946",    
    flavourBottom: "#deaa43",
  })
  

  const [createLolly, { data }] = useMutation(createLollyMutation);

  const onSubmit = async (values, actions) => {
    console.log("values = ", values);
    console.log('actions ====> ', actions)
    const result = await createLolly({
        variables: {
            recipientName: values.recipientName,
            message: values.message,
            senderName: values.senderName,
            flavourTop: flavours.flavourTop,
            flavourMiddle: flavours.flavourMiddle,
            flavourBottom: flavours.flavourBottom,
        }
    })
      console.log("result = ", result);

    await actions.resetForm({
      values: {
        recipientName: "",
        message: "",
        senderName: "",
      },
    });  
  }

    


  return (
    <div className="container">
      <Header />

     <div className="lollyFormDiv">
      <div>
        <Lolly
          fillLollyTop={flavours.flavourTop}
          fillLollyMiddle={flavours.flavourMiddle}
          fillLollyBottom={flavours.flavourBottom}
        />
      </div>

       <div className="lollyFlavourDiv">
        <label htmlFor="flavourTop" className="colorPickerLabel">
          <input
            type="color"
            value={flavours.flavourTop}
            className="colorPicker"
            name="flavourTop"
            id="flavourTop"
            onChange={(e) => {
              setFlavours({
                ...flavours,
                flavourTop: e.target.value,
              });
            }}
          />          
        </label>

        <label htmlFor="flavourTop" className="colorPickerLabel">
          <input
            type="color"
            value={flavours.flavourMiddle}
            className="colorPicker"
            name="flavourTop"
            id="flavourTop"
            onChange={(e) => {
              setFlavours({
                ...flavours,
                flavourMiddle: e.target.value,
              });
            }}
          />
        </label>

        <label htmlFor="flavourTop" className="colorPickerLabel">
          <input
            type="color"
            value={flavours.flavourBottom}
            className="colorPicker"
            name="flavourTop"
            id="flavourTop"
            onChange={(e) => {
              setFlavours({
                ...flavours,
                flavourBottom: e.target.value,
              });
            }}
          />
        </label>
       </div>

        <div className="lollyFrom">
         <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}          
         >
          <Form>
            <p className="textFeildLabel">to:</p>
            <div style={{ paddingBottom: "8px" }}>
              <Field
                name="recipientName"
                type="text"
                label="Title"
                className="textFeild"
                placeholder="Recipient name"
              />
            </div>

            <div style={{ paddingBottom: "8px" }}>
              <p className="textFeildLabel">say something nice:</p>
              <Field
                style={{ resize: "none" }}
                className="textFeild"
                as="textarea"
                rows="7"
                name="message"
                type="text"
                label="Title"
                placeholder="Message..."
              />
            </div>  

            <div style={{ paddingBottom: "12px" }}>
              <p className="textFeildLabel">from:</p>
              <Field
                name="senderName"
                type="text"
                label="Title"
                className="textFeild"
                placeholder="Sender name"
              />
            </div>

            <div className="form-btn">
              <button> freeze </button>
            </div>             
          </Form>
         </Formik>
         </div>
        </div>
     </div>      
  )  

}