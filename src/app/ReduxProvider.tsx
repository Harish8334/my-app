'use client';
import { Provider } from "react-redux";
import { store } from "../../store";

 // ✅ This ensures Redux can run in Next.js



export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
     
        {children}
     
    </Provider>
  );
}
