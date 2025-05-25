
const LoadingSpinner = () => {
	return (
		<div className='h-screen  flex items-center justify-center relative overflow-hidden'>
			{/* Simple Loading Spinner */}
			<div
				className='w-16 h-16 border-4 border-t-4 border-t-green-500 border-green-200 rounded-full animate-spin duration-300 transition-all'
			/>
		</div>
	);
};

export default LoadingSpinner;