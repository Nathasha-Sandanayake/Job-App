import './App.css'

const users=[
  {
    avatar:'https://img.freepik.com/premium-vector/cute-boy-multitasking-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3973.jpg?w=360',
    name:'Yuki Hayashi', 
    designation:'Java Developer', 
    salary:15000,
    code:1
  },

  {
    avatar:'https://img.freepik.com/premium-vector/cute-boy-working-computer-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4024.jpg?w=360',
   name:'Jonathan King',
   designation:'Angular Developer', 
   salary:20000,
   code:2
  },

  {
    avatar:'https://img.freepik.com/premium-vector/cute-girl-working-laptop-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3975.jpg?w=360',
    name:'Machiko Watanabe',
    designation:'React Developer',
    salary:25000,
    code:3
  },

  {
    avatar:'https://img.freepik.com/premium-vector/cute-man-working-office-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated_138676-5701.jpg?semt=ais_hybrid',
    name:'Simon Patterson', 
    designation:'Electron Developer', 
    salary:35000,
    code:4
  }

  ];


function UserManager(){
return(
  <div className='wrapper'>
   <SearchForm/>
   <hr/>
    {users.map((user)=>{
        return <User {...user} key={user.code}/>
    })};

  </div>
);
}

const SearchForm=()=>{
    const manageChangeEvent=(e)=>{
          console.log(e.target.value);
    }

    const manageClickEvent=(e)=>{
          console.log('Click Event');
    }

    const manageSubmitEvent=(e)=>{
      e.preventDefault();
      console.log('Click Event');
}

    return (
    <div className='search-outer'>
        <form onSubmit={manageSubmitEvent}>  
            <input type="search" onChange={manageChangeEvent}/> &nbsp;
            <button type="submit" onClick={manageClickEvent}>Search Now</button>
        </form>
    </div>
  )
}

const User=(props)=>{
  console.log(props);
  const {avatar,name,designation,salary}=props;
  
  return(
    <div className='user-outer'>
      <Avatar avatar={avatar}/>
      <UserData name={name} designation={designation} salary={salary}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </UserData> 
    </div>
  )

}

const Avatar=({avatar})=>{
  return(
    <div className='avatar-outer'>
    <img src={avatar} alt="Worker">
    </img>
    </div>
  )
}

const UserData=({name,designation,salary,children})=>{

  return(
  <div className='user-data'>
    <UserName name={name}/>
    <Designation designation={designation}/>
    <Salary salary={salary}/>
    <p>
      {children}
    </p>
    <button style={{cursor:'pointer'}} onClick={(e)=>{console.log(name)}}>Print Data</button>
  </div>
)
 }



const UserName=({name})=>{
  const inlineStyle={
    color:'#2980b9',
    margin:0
  }
  
  return(
    <h1 style={inlineStyle}>{name}</h1>
  )
}

const Designation=({designation})=>{
  return(
    <h3 style={{fontStyle:'italic',margin:0}}>{designation}</h3>
  )
}

const Salary=({salary})=>{
  return(
    <h3 style={{fontStyle:'italic',margin:0}}>{salary}</h3>
  )
}
export default UserManager;
