import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text, isDisabled }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="w-full text-center mt-6">
      <button
        type="submit"
        className={`font-bold text-center border py-1 md:py-2 w-[40%] rounded-md border-[#585B74] text-gray-400 hover:bg-gray-500 hover:text-white ${
          isSubmitting || isDisabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={isSubmitting || isDisabled}
      >
        {isSubmitting || isDisabled ? "Submitting..." : text}
      </button>
    </div>
  );
};

export default SubmitBtn;
