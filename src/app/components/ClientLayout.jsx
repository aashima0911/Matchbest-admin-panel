"use client";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ChatbotButton from "@/app/components/ChatbotButton";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import LanguageWatcher from "@/app/components/LanguageWatcher";

export default function ClientLayout({ children }) {
  console.log("ClientLayout: Rendering with Redux Provider and PersistGate");

  // Clear corrupted Redux state on component mount
  React.useEffect(() => {
    const currentState = store.getState();
    console.log("ClientLayout: Current Redux state:", currentState);

    if (currentState.language && currentState.language.selected) {
      console.log("ClientLayout: Found corrupted state with 'selected' property, clearing...");
      // Dispatch a clean language reset
      store.dispatch({
        type: 'language/setLanguage',
        payload: {
          code: currentState.language.code || "en",
          country: currentState.language.country || "United States",
          name: currentState.language.name || "English",
          flag: currentState.language.flag || "🇺🇸"
        }
      });
    }
  }, []);

  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <LanguageWatcher />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ChatbotButton />
      <WhatsAppButton />
      </PersistGate>
    </Provider>
  );
}
