function Random()
{

  let random =Math.round(Math.random()*10);

 return <h1 style={{'background-color':"red"}}>Random number is :  {random}</h1>
}

export default Random;