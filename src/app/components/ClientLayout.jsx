"use client";
import React, { memo, Suspense } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import LanguageWatcher from "@/app/components/LanguageWatcher";

// Dynamic imports for non-critical components
const ChatbotButton = dynamic(() => import("@/app/components/ChatbotButton"), {
  ssr: false,
  loading: () => null,
});
const WhatsAppButton = dynamic(() => import("@/app/components/WhatsAppButton"), {
  ssr: false,
  loading: () => null,
});

const MemoizedNavbar = memo(Navbar);
const MemoizedFooter = memo(Footer);
const MemoizedLanguageWatcher = memo(LanguageWatcher);

function ClientLayoutInner({ children }) {
  const pathname = usePathname();

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

  const hideNavbar = pathname === '/matchbest-byteplus-webinar';

  return (
    <>
      <MemoizedLanguageWatcher />
      {!hideNavbar && <MemoizedNavbar />}
      <main className="flex-1">{children}</main>
      <MemoizedFooter />
      <ChatbotButton />
      <WhatsAppButton />
    </>
  );
}

export default function ClientLayout({ children }) {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ClientLayoutInner>{children}</ClientLayoutInner>
    </PersistGate>
    </Provider>
  );
}
