import Button from "@/components/Button";


const SuccessPage = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-lg text-center max-w-sm">
        <div className="flex justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-[#8fb4ff]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M17.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L9 13.586l7.293-7.293a1 1 0 0 1 1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="text-xl font-bold mb-2">Transaction Successful</h2>
        <p className="text-gray-600 mb-4">
          Your payment has been processed and confirmed. Thank you for your
          purchase!
        </p>
        <div className="flex justify-center">
          <Button href="/" placeholder="Return to Homepage" color="secondary"/>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
