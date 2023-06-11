import React, { useRef, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackConsole,
  useSandpack,
  useSandpackClient,
  Sandpack,
} from "@codesandbox/sandpack-react";
import useCodeEditorStore from "../../store/CodeEditorStore";

function CodeEditor() {
  const { clientID, setClientID, content, setContent } = useCodeEditorStore();
  const { sandpack } = useSandpack();
  console.log(sandpack);
  const handleUpdates = () => {
    sandpack.updateCurrentFile("// test");
    setContent("hello");
  };
  // const newFiles = { "/index.js": "// hey" };

  // for the time being firebase will be out until websocket solution is made
  // const [config, setConfig] = useState({
  //   apiKey: import.meta.env.VITE_apiKey,
  //   authDomain: import.meta.env.VITE_authDomain,
  //   databaseURL: import.meta.env.VITE_databaseURL,
  //   projectId: import.meta.env.VITE_projectID,
  //   storageBucket: import.meta.env.VITE_storageBucket,
  //   messagingSenderId: import.meta.env.VITE_messagingSenderId,
  //   appId: import.meta.env.VITE_appID,
  // });
  // const [firepadRef, setFirePadRef] = useState(null);
  // const [firebaseApp, setFirebaseApp] = useState(initializeApp(config));
  // const [db, setDb] = useState(getDatabase(firebaseApp));
  // const [dbRef, setDbRef] = useState(ref(db));

  useEffect(() => {
    const test = async () => {
      sandpack.updateCurrentFile("// test");
      // console.log(sandpack);
      await setClientID(sandpack);
    };

    test();
  }, []);
  return (
    <>
      <SandpackLayout>
        <SandpackCodeEditor
          // showTabs={true}
          showLineNumbers={true}
          template="vanilla"
          showRunButton={true}
        />
        <SandpackConsole standalone={true} resetOnPreviewRestart={true} />
        <SandpackCodeEditor
          showTabs={true}
          showLineNumbers={true}
          template="vanilla"
        />
        <SandpackConsole standalone={true} resetOnPreviewRestart={true} />
      </SandpackLayout>
      <button type="button" onClick={handleUpdates}>
        test
      </button>
    </>
  );
}

const ListenerIframeMessage = () => {
  const { sandpack } = useSandpack();

  const sender = () => {
    Object.values(sandpack.clients).forEach((client) => {
      client.iframe.contentWindow.postMessage("Hello world", "*");
    });
  };

  return <button onClick={sender}>Send message</button>;
};

// use this to validate input !

// function replaceInvalidCharacters(str, replaceStr) {
//   return str.replace(/[ ./#$[\] ]/g, replaceStr);
// }

// template for generating session keys
// const getExampleRef = () => {
// var ref = getDatabase().ref();
//   var hash = window.location.hash.replace(/#/g, "");
//   if (hash) {
//     ref = ref.child(hash);
//   } else {
//     ref = ref.push(); // generate unique location.
//     window.location = window.location + "#" + ref.key; // add it as a hash to the URL.
//   }
//   if (typeof console !== "undefined") {
//     console.log("Firebase data: ", ref.toString());
//   }
//   return ref;
// };

export default CodeEditor;