import { useToast } from "react-native-toast-notifications";

// type: "normal | success | warning | danger | custom",

const showToast = (message, type) => {
  const toast = useToast();

  useEffect(() => {
    toast.show(message, {
      type,
      placement: "top",
      duration: 3000,
      offset: 30,
      animationType: "slide-in",
    });
  }, []);
};

export { showToast };
