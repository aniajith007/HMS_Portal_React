import Input from "./Input";

const HeroMain = () => {
  return (
    <div className="hero min-h-screen bg-base-200 ">
    <div className="hero-content flex-col lg:flex-row">
      <img src="logo512.png" className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">Welcome Back!</h1>
        <p className="py-6">Please enter you're valuable rating here!!</p>        
        <Input name="CC NO " type="text" placeholder="Enter CC NO" label = "CCNO"/>
      </div>
    </div>
  </div>    
    
  );
};
export default HeroMain;