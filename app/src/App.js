import './App.css'

const user1={avatar:'https://img.freepik.com/premium-vector/cute-boy-multitasking-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3973.jpg?w=360', name:'Yuki Hayashi', designation:'Java Developer', salary:15000};
const user2={avatar:'https://img.freepik.com/premium-vector/cute-boy-working-computer-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4024.jpg?w=360', name:'Jonathan King', designation:'Angular Developer', salary:20000};
const user3={avatar:'https://img.freepik.com/premium-vector/cute-girl-working-laptop-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3975.jpg?w=360', name:'Machiko Watanabe', designation:'React Developer', salary:25000};
const user4={avatar:'https://img.freepik.com/premium-vector/cute-man-working-office-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated_138676-5701.jpg?semt=ais_hybrid', name:'Simon Patterson', designation:'Electron Developer', salary:35000};

function UserManager(){
return(
  <div className='wrapper'>
      <User avatar={user1.avatar} name={user1.name} designation={user1.designation} salary={user1.salary}/>  
      <User avatar={user2.avatar} name={user2.name} designation={user2.designation} salary={user2.salary}/>
      <User avatar={user3.avatar} name={user3.name} designation={user3.designation} salary={user3.salary}/>
      <User avatar={user4.avatar} name={user4.name} designation={user4.designation} salary={user4.salary}/>
  </div>
);
}

const User=(props)=>{
  const {avatar}=props;
  const {name}=props;
  const {designation}=props;
  const {salary}=props;
  
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
  console.log(children);
return(
  <div className='user-data'>
    <UserName name={name}/>
    <Designation designation={designation}/>
    <Salary salary={salary}/>
    <p>
      {children}
    </p>
  </div>
)
 

}

const UserName=({name})=>{
  const inlineStyle={
    color:'#2980b9'
  }
  
  return(
    <h1 style={inlineStyle}>{name}</h1>
  )
}

const Designation=({designation})=>{
  return(
    <h3 style={{fontStyle:'italic'}}>{designation}</h3>
  )
}

const Salary=({salary})=>{
  return(
    <h3 style={{fontStyle:'italic'}}>{salary}</h3>
  )
}
export default UserManager;
